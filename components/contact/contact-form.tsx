"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { site } from "@/lib/site";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim() || "Parent / Guardian";
    const subject = encodeURIComponent(`School Enquiry from ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name..."
              className="w-full rounded-pill border border-border-subtle bg-surface-canvas px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/70 transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none"
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name..."
              className="w-full rounded-pill border border-border-subtle bg-surface-canvas px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/70 transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-email" className="block text-sm font-medium text-ink-primary">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address..."
            className="w-full rounded-pill border border-border-subtle bg-surface-canvas px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/70 transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none"
          />
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message..."
            className="w-full resize-y rounded-card border border-border-subtle bg-surface-canvas px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted/70 transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none"
          />
        </div>

        <div className="flex flex-col-reverse items-stretch justify-between gap-4 pt-2 sm:flex-row sm:items-center">
          {submitted ? (
            <p className="inline-flex items-center gap-2 text-sm font-medium text-accent-emerald">
              <CheckCircle2 className="size-4 shrink-0" />
              <span>Opening your email app to send to {site.email}</span>
            </p>
          ) : (
            <span />
          )}

          <button
            type="submit"
            className="group inline-flex items-center justify-between gap-3 self-end rounded-pill bg-brand-navy py-2 pr-2 pl-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-coral focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:outline-none active:scale-[0.98]"
          >
            <span>Send Message</span>
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-brand-navy transition-transform group-hover:translate-x-0.5 group-hover:text-brand-coral">
              <ArrowRight className="size-4" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
