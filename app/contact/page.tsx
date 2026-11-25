import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import ContactForm from "@/components/contact/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} in ${site.address.area}, ${site.address.city}.`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-(--container-max) px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left column: Headline, direct details, and Live Chat CTA */}
        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-8 rounded-pill bg-brand-coral" />
              <span className="h-1.5 w-4 rounded-pill bg-accent-marigold" />
              <span className="h-1.5 w-3 rounded-pill bg-accent-emerald" />
            </div>

            <h1 className="font-display text-hero leading-[1.06] font-bold tracking-[-0.03em] text-ink-primary">
              Get in <span className="text-brand-coral">—</span>
              <br />
              touch with us
            </h1>

            <p className="max-w-md text-base leading-relaxed text-ink-muted">
              We&apos;re here to help! Whether you have a question about admissions, programmes,
              or school life, our team is ready to assist you.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-ink-muted">Email:</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-block font-display text-xl font-semibold text-ink-primary transition-colors hover:text-brand-coral"
              >
                {site.email}
              </a>
            </div>

            <div>
              <p className="text-sm font-medium text-ink-muted">Phone:</p>
              <a
                href={site.phone.href}
                className="mt-1 inline-block font-display text-xl font-semibold text-ink-primary transition-colors hover:text-brand-coral"
              >
                {site.phone.display}
              </a>
              <p className="mt-1 text-xs text-ink-muted">
                Available Monday to Friday, 7:30 AM – 4:00 PM GMT
              </p>
            </div>
          </div>

          <div>
            <a
              href={site.phone.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-pill bg-brand-navy py-2 pr-2 pl-5 text-sm font-semibold text-white shadow-md transition-all hover:bg-accent-emerald focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:outline-none active:scale-[0.98]"
            >
              <span>Live Chat</span>
              <span className="flex size-8 items-center justify-center rounded-full bg-white text-brand-navy transition-transform group-hover:translate-x-0.5 group-hover:text-accent-emerald">
                <ArrowRight className="size-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Right column: Contact form card */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
