"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const reasonOptions = ["Admission enquiry", "Visit", "Others"] as const;

function resolveInitialReason(param: string | null): string {
  if (!param) return "Admission enquiry";
  const normalized = param.trim().toLowerCase();
  if (normalized === "visit") return "Visit";
  if (normalized === "others") return "Others";
  return "Admission enquiry";
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState(() => resolveInitialReason(searchParams.get("reason")));
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSubmitted(false);

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: email.trim(),
          inquiryType: reason,
          message: message.trim(),
        }),
      });

      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-squircle border border-border-subtle bg-surface-elevated shadow-md">
      {/* Kente woven top trim */}
      <div
        aria-hidden="true"
        className="h-2 w-full bg-[url('/svg/kente-trim.svg')] bg-repeat-x"
      />

      <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="contact-first-name"
              className="block text-sm font-medium text-ink-primary"
            >
              First Name
            </label>
            <input
              id="contact-first-name"
              name="firstName"
              type="text"
              required
              disabled={isSubmitting}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name..."
              className="w-full rounded-pill border border-border-subtle bg-surface-canvas px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/70 transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none disabled:opacity-60"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-last-name"
              className="block text-sm font-medium text-ink-primary"
            >
              Last Name
            </label>
            <input
              id="contact-last-name"
              name="lastName"
              type="text"
              required
              disabled={isSubmitting}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name..."
              className="w-full rounded-pill border border-border-subtle bg-surface-canvas px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/70 transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none disabled:opacity-60"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="contact-email" className="block text-sm font-medium text-ink-primary">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              disabled={isSubmitting}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full rounded-pill border border-border-subtle bg-surface-canvas px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/70 transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none disabled:opacity-60"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-reason" className="block text-sm font-medium text-ink-primary">
              Reason
            </label>
            <select
              id="contact-reason"
              name="reason"
              disabled={isSubmitting}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full rounded-pill border border-border-subtle bg-surface-canvas px-4 py-2.5 text-sm text-ink-primary transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none disabled:opacity-60"
            >
              {reasonOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-message" className="block text-sm font-medium text-ink-primary">
            How can we help you?
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            disabled={isSubmitting}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message..."
            className="w-full resize-y rounded-card border border-border-subtle bg-surface-canvas px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted/70 transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none disabled:opacity-60"
          />
        </div>

        <div className="flex flex-col-reverse items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
          <div>
            {submitted && (
              <p className="inline-flex items-center gap-2 text-sm font-medium text-accent-emerald">
                <CheckCircle2 className="size-4 shrink-0" />
                <span>Message sent! We&apos;ll get back to you shortly.</span>
              </p>
            )}
            {error && (
              <p className="inline-flex items-center gap-2 text-sm font-medium text-destructive">
                <AlertCircle className="size-4 shrink-0" />
                <span>{error}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center justify-between gap-3 self-end rounded-pill bg-brand-navy py-2 pr-2 pl-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-coral focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:outline-none active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-brand-navy transition-transform group-hover:translate-x-0.5 group-hover:text-brand-coral">
              {isSubmitting ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <ArrowRight className="size-4" />
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
