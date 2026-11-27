import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface DetailRow {
  label: string;
  value: string;
}

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
  details?: DetailRow[];
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildPreheader({
  name,
  inquiryType,
  message,
  details,
}: {
  name: string;
  inquiryType: string;
  message: string;
  details: DetailRow[];
}): string {
  const summaryParts = details
    .filter((d) => d.value.trim().length > 0 && d.value !== "Not specified")
    .slice(0, 2)
    .map((d) => `${d.label}: ${d.value}`);

  if (summaryParts.length > 0) {
    return `${summaryParts.join(" · ")} — ${message}`;
  }
  return `${inquiryType} from ${name}: ${message}`;
}

function buildHtmlEmail({
  name,
  email,
  phone,
  inquiryType,
  message,
  details,
}: {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  details: DetailRow[];
}): string {
  const preheader = buildPreheader({ name, inquiryType, message, details });
  const rows: DetailRow[] = [
    { label: "Submitted By", value: name },
    { label: "Email", value: email || "Not provided" },
    { label: "Phone", value: phone || "Not provided" },
    ...details.filter((d) => d.value.trim().length > 0),
  ];

  const rowsHtml = rows
    .map(
      (row, index) => `
      <tr>
        <td style="padding:11px 16px;${index < rows.length - 1 ? "border-bottom:1px solid #e6ddd0;" : ""}font-size:13px;font-weight:500;color:#4a5568;width:36%;vertical-align:top;">
          ${escapeHtml(row.label)}
        </td>
        <td style="padding:11px 16px;${index < rows.length - 1 ? "border-bottom:1px solid #e6ddd0;" : ""}font-size:14px;color:#182638;vertical-align:top;">
          ${escapeHtml(row.value)}
        </td>
      </tr>`,
    )
    .join("");

  const replyButton = email
    ? `<tr>
        <td style="padding-top:24px;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="background-color:#e84a27;border-radius:9999px;">
                <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(`Re: ${inquiryType} — Happy Heart School`)}"
                   style="display:inline-block;padding:11px 22px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border:1px solid transparent;">
                  Reply to ${escapeHtml(name)}
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${escapeHtml(inquiryType)} — Happy Heart School</title>
  </head>
  <body style="margin:0;padding:0;background-color:#fffbf5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#182638;">
    <!-- Hidden inbox preview text -->
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:#fffbf5;opacity:0;">
      ${escapeHtml(preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
    </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#fffbf5;table-layout:fixed;">
      <tr>
        <td align="center" style="padding:36px 12px;">
          <table border="0" cellpadding="0" cellspacing="0" width="560" style="max-width:560px;width:100%;background-color:#ffffff;border:1px solid #e6ddd0;border-top:3px solid #e84a27;border-radius:12px;overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="padding:22px 36px;border-bottom:1px solid #e6ddd0;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="font-size:15px;font-weight:700;color:#182638;letter-spacing:-0.01em;">
                      Happy Heart School
                    </td>
                    <td align="right" style="font-size:12px;font-weight:600;color:#e84a27;">
                      ${escapeHtml(inquiryType)}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Main Content -->
            <tr>
              <td style="padding:32px 36px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="font-size:20px;font-weight:700;color:#182638;letter-spacing:-0.02em;padding-bottom:8px;">
                      New ${escapeHtml(inquiryType.toLowerCase())} from ${escapeHtml(name)}
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size:14px;line-height:1.5;color:#4a5568;padding-bottom:24px;">
                      Submitted via the Happy Heart School website.
                    </td>
                  </tr>

                  <!-- Details Table -->
                  <tr>
                    <td style="padding-bottom:20px;">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #e6ddd0;border-radius:8px;border-collapse:collapse;">
                        ${rowsHtml}
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td>
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#fffbf5;border:1px solid #e6ddd0;border-radius:8px;">
                        <tr>
                          <td style="padding:16px 18px;">
                            <div style="font-size:12px;font-weight:600;color:#4a5568;padding-bottom:6px;">
                              Message
                            </div>
                            <div style="font-size:14px;line-height:1.6;color:#182638;white-space:pre-line;">${escapeHtml(message)}</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  ${replyButton}
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f4ede2;padding:18px 36px;border-top:1px solid #e6ddd0;">
                <span style="font-size:12px;line-height:1.4;color:#4a5568;">
                  Happy Heart School &bull; 4 Uranus Street, Dome Pillar 2, Accra
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const inquiryType = body.inquiryType?.trim() || "Website Enquiry";
    const message = body.message?.trim() ?? "";
    const details = Array.isArray(body.details) ? body.details : [];

    if (!name || (!email && !phone) || !message) {
      return NextResponse.json(
        { error: "Please provide your name, a contact email or phone number, and a message." },
        { status: 400 },
      );
    }

    const port = Number(process.env.SMTP_PORT) || 465;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const textLines = [
      `Category: ${inquiryType}`,
      `Name: ${name}`,
      `Email: ${email || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      ...details.filter((d) => d.value.trim().length > 0).map((d) => `${d.label}: ${d.value}`),
      "",
      "Message:",
      message,
    ];

    await transporter.sendMail({
      // Use a distinct sender like noreply@happyheart.edu.gh so Gmail doesn't label it "me"
      from: `"${name.replace(/"/g, "")} (via Happy Heart)" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "admin@happyheart.edu.gh",
      ...(email ? { replyTo: email } : {}),
      subject: `${inquiryType}: ${name}`,
      text: textLines.join("\n"),
      html: buildHtmlEmail({ name, email, phone, inquiryType, message, details }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SMTP send error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or reach us on WhatsApp." },
      { status: 500 },
    );
  }
}

// Dev-only browser preview: open /api/contact?preview=1 to inspect the HTML email without sending
export async function GET(req: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  if (searchParams.get("preview") !== "1") {
    return NextResponse.json({ message: "Add ?preview=1 in development to preview the email." });
  }

  const html = buildHtmlEmail({
    name: "Akosua Mensah",
    email: "akosua@example.com",
    phone: "055 441 4948",
    inquiryType: "Admissions",
    message: "Hello, we would like to book a visit and enrol our daughter into Basic 2 for Term 2.",
    details: [
      { label: "Student Name", value: "Abena Mensah" },
      { label: "Class Applying For", value: "Basic 2" },
      { label: "Preferred Term", value: "Second Term (January)" },
    ],
  });

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
