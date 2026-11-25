"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { site } from "@/lib/site";

const classOptions = [
  "Crèche (18 months – 2 years)",
  "Nursery 1",
  "Nursery 2",
  "Kindergarten 1",
  "Kindergarten 2",
  "Basic 1",
  "Basic 2",
  "Basic 3",
  "Basic 4",
  "Basic 5",
  "Basic 6",
  "JHS 1",
  "JHS 2",
  "JHS 3",
];

const sectionOptions = ["First Term (September)", "Second Term (January)", "Third Term (April)"];

const inputClassName =
  "w-full rounded-input border border-border-subtle bg-surface-canvas px-4 py-2.5 text-sm text-ink-primary placeholder:text-ink-muted/70 transition-colors focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 focus:outline-none";

export default function AdmissionForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [targetClass, setTargetClass] = useState("");
  const [section, setSection] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const studentName = `${firstName.trim()} ${lastName.trim()}`.trim();
    const subject = encodeURIComponent(`Admission Application — ${studentName || "New Student"}`);
    const body = encodeURIComponent(
      [
        "STUDENT INFORMATION",
        `Name: ${studentName}`,
        `Gender: ${gender || "Not specified"}`,
        `Date of Birth: ${dob}`,
        `Class Applying For: ${targetClass}`,
        `Preferred Term / Section: ${section || "Not specified"}`,
        "",
        "PARENT / GUARDIAN INFORMATION",
        `Name: ${guardianName.trim()}`,
        `Phone: ${phone.trim()}`,
        `Email: ${email.trim() || "Not provided"}`,
        notes.trim() ? `\nAdditional Notes:\n${notes.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden rounded-squircle border border-border-subtle bg-surface-elevated shadow-md">
      {/* Kente woven top trim */}
      <div aria-hidden="true" className="h-2 w-full bg-[url('/svg/kente-trim.svg')] bg-repeat-x" />

      <form onSubmit={handleSubmit} className="space-y-8 p-6 sm:p-8 lg:p-10">
        {/* Student Information */}
        <div>
          <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink-primary sm:text-2xl">
            Student Information
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <label htmlFor="adm-first-name" className="block text-sm font-medium text-ink-primary">
                First Name <span className="text-brand-coral">*</span>
              </label>
              <input
                id="adm-first-name"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="e.g. Kwame"
                className={inputClassName}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="adm-last-name" className="block text-sm font-medium text-ink-primary">
                Last Name <span className="text-brand-coral">*</span>
              </label>
              <input
                id="adm-last-name"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="e.g. Mensah"
                className={inputClassName}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="adm-gender" className="block text-sm font-medium text-ink-primary">
                Gender
              </label>
              <select
                id="adm-gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={inputClassName}
              >
                <option value="">Choose Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="adm-dob" className="block text-sm font-medium text-ink-primary">
                Date Of Birth <span className="text-brand-coral">*</span>
              </label>
              <input
                id="adm-dob"
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className={inputClassName}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="adm-class" className="block text-sm font-medium text-ink-primary">
                What Class Do You Want to Admit? <span className="text-brand-coral">*</span>
              </label>
              <select
                id="adm-class"
                required
                value={targetClass}
                onChange={(e) => setTargetClass(e.target.value)}
                className={inputClassName}
              >
                <option value="">Choose Your Class</option>
                {classOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="adm-section" className="block text-sm font-medium text-ink-primary">
                Preferred Term
              </label>
              <select
                id="adm-section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className={inputClassName}
              >
                <option value="">Choose Your Term</option>
                {sectionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Parent / Guardian Information */}
        <div className="border-t border-border-subtle pt-7">
          <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink-primary sm:text-2xl">
            Parent / Guardian Information
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <label htmlFor="adm-guardian" className="block text-sm font-medium text-ink-primary">
                Parent / Guardian Name <span className="text-brand-coral">*</span>
              </label>
              <input
                id="adm-guardian"
                type="text"
                required
                value={guardianName}
                onChange={(e) => setGuardianName(e.target.value)}
                placeholder="Full name"
                className={inputClassName}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="adm-phone" className="block text-sm font-medium text-ink-primary">
                Phone Number <span className="text-brand-coral">*</span>
              </label>
              <input
                id="adm-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 055 441 4948"
                className={inputClassName}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="adm-email" className="block text-sm font-medium text-ink-primary">
                Email Address
              </label>
              <input
                id="adm-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="parent@example.com"
                className={inputClassName}
              />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <label htmlFor="adm-notes" className="block text-sm font-medium text-ink-primary">
              Anything else we should know?
            </label>
            <textarea
              id="adm-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Allergies, transport needs, or questions for our admissions team..."
              className={inputClassName}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse items-stretch justify-between gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center">
          {submitted ? (
            <p className="inline-flex items-center gap-2 text-sm font-medium text-accent-emerald">
              <CheckCircle2 className="size-4 shrink-0" />
              <span>Application prepared! Send the email that opened, or message us on WhatsApp.</span>
            </p>
          ) : (
            <p className="text-xs text-ink-muted">
              Fields marked with <span className="text-brand-coral">*</span> are required.
            </p>
          )}

          <button
            type="submit"
            className="group inline-flex items-center justify-between gap-3 self-end rounded-pill bg-brand-coral py-2 pr-2 pl-6 text-sm font-semibold text-white shadow-coral-glow transition-all hover:bg-brand-coral-dark focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:outline-none active:scale-[0.98]"
          >
            <span>Submit Application</span>
            <span className="flex size-8 items-center justify-center rounded-full bg-white text-brand-coral transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
