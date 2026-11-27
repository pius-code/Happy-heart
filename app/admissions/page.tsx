import {
  CalendarBlankIcon,
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";

import AdmissionForm from "@/components/admissions/admission-form";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import PageIntro from "@/components/shared/page-intro";
import { Button } from "@/components/ui/button";
import Kicker from "@/components/shared/kicker";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildPageMetadata({
  title: "Admissions",
  description:
    "Admissions at Happy Heart School, Dome Pillar 2, Accra. Classes from Crèche to Junior High School, ages 18 months to 14 years.",
  path: "/admissions",
});

// Same stages and ages as the Programmes section on the home page.
const stages = [
  { title: "Crèche & Nursery", ages: "18 months – 3 years", color: "bg-accent-tangerine text-ink-primary" },
  { title: "Kindergarten", ages: "4 – 5 years", color: "bg-accent-marigold text-ink-primary" },
  { title: "Primary", ages: "6 – 11 years", color: "bg-accent-emerald text-white" },
  { title: "Junior High School", ages: "12 – 14 years", color: "bg-brand-navy text-white" },
];

// The details asked for on the school's admission enquiry form.
const enquiryDetails = [
  "Parents' or guardian's names",
  "A phone number and email we can reach you on",
  "Your child's name and age",
  "The class you would like your child to join",
];

const whatsappMessage = "Hello Happy Heart School, I would like to enquire about admission for my child.";
const whatsappEnquiryHref = `${site.phone.whatsappHref}?text=${encodeURIComponent(whatsappMessage)}`;

export default function AdmissionsPage() {
  return (
    <>
      <PageIntro
        kicker="Admissions"
        title="Join the Happy Heart family"
        lead="We welcome children aged 18 months to 14 years. Every admission starts with a friendly conversation with our team."
      />

      <section aria-label="Academic calendar notice" className="mx-auto w-full max-w-(--container-max) px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-squircle bg-linear-to-r from-brand-coral via-accent-tangerine to-accent-marigold p-6 text-white shadow-coral-glow sm:p-8 lg:px-10 lg:py-9">
            {/* Decorative background shapes inspired by the promo banners */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -right-8 size-52 rounded-full bg-white/15"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-24 -bottom-16 size-44 rounded-full bg-brand-navy/10"
            />

            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <p className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">
                  Next Academic Calendar · 2026–2027
                </p>
                <h2 className="mt-1 font-display text-2xl leading-tight font-bold tracking-[-0.02em] text-white sm:text-3xl">
                  Term 2 begins on January 5, 2027
                </h2>
                <a
                  href="#apply"
                  className="mt-5 inline-flex items-center rounded-pill bg-brand-navy/80 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-brand-navy"
                >
                  Apply for Term 2
                </a>
              </div>

              {/* Stylized calendar illustration on the right */}
              <div
                aria-hidden="true"
                className="hidden shrink-0 rotate-3 rounded-card bg-white/95 px-6 py-4 text-center text-brand-navy shadow-lg sm:block"
              >
                <p className="font-label text-xs font-bold tracking-widest text-brand-coral uppercase">
                  Jan 2027
                </p>
                <p className="font-display text-4xl leading-none font-extrabold text-brand-navy">
                  05
                </p>
                <p className="mt-1 text-[11px] font-semibold text-ink-muted">Term 2</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section
        aria-labelledby="classes-title"
        className="mx-auto w-full max-w-(--container-max) px-4 pb-14 sm:px-6 lg:px-8 lg:pb-24"
      >
        <Reveal>
          <Kicker>Classes</Kicker>
          <h2
            id="classes-title"
            className="mt-3 text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
          >
            Find the right class for your child
          </h2>
        </Reveal>

        <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {stages.map((stage) => (
            <RevealItem
              key={stage.title}
              variant="card"
              lift
              className={cn("flex min-h-40 flex-col justify-end rounded-card p-6", stage.color)}
            >
              <p className="font-label text-sm font-semibold">{stage.ages}</p>
              <h3 className="mt-2 font-display text-2xl leading-tight font-semibold tracking-[-0.01em]">
                {stage.title}
              </h3>
            </RevealItem>
          ))}
        </Reveal>
      </section>

      {/* Admission application form */}
      <section
        id="apply"
        aria-labelledby="apply-title"
        className="mx-auto w-full max-w-(--container-max) scroll-mt-24 px-4 pb-14 sm:px-6 lg:px-8 lg:pb-24"
      >
        <Reveal className="mb-8">
          <Kicker>Application Form</Kicker>
          <h2
            id="apply-title"
            className="mt-3 text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
          >
            Apply for admission
          </h2>
          <p className="mt-3 max-w-2xl text-[1.0625rem] leading-normal text-ink-muted">
            Fill in your child&apos;s details below and our admissions team will get back to you
            with the next steps.
          </p>
        </Reveal>

        <AdmissionForm />
      </section>

      {/* id="enquire" is the target of every "Book a Visit" button (routes.visit) */}
      <section id="enquire" aria-labelledby="enquire-title" className="scroll-mt-24 bg-surface-sand">
        <div className="mx-auto grid max-w-(--container-max) gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
          <Reveal>
            <Kicker>How to apply</Kicker>
            <h2
              id="enquire-title"
              className="mt-3 text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
            >
              Start with an enquiry
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-normal text-ink-muted">
              Message, call or email us and we will guide you through the next steps. It helps to
              have these details ready:
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {enquiryDetails.map((detail) => (
                <li key={detail} className="flex gap-3 text-ink-primary">
                  <CheckCircleIcon
                    aria-hidden="true"
                    weight="fill"
                    className="mt-0.5 size-5 shrink-0 text-accent-emerald"
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="photo" className="rounded-squircle bg-surface-elevated p-6 shadow-md sm:p-10">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.01em]">Talk to us</h3>
            <p className="mt-2 text-ink-muted">
              Choose whichever is easiest for you: {site.phone.display} or {site.email}.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <Button asChild size="lg" className="w-full">
                <a href={whatsappEnquiryHref} target="_blank" rel="noopener noreferrer">
                  <WhatsappLogoIcon data-icon="inline-start" className="size-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="navy" className="w-full">
                <a href={site.phone.href}>
                  <PhoneIcon data-icon="inline-start" className="size-5" />
                  Call us
                </a>
              </Button>
              <Button asChild size="lg" variant="glass" className="w-full">
                <a href={`mailto:${site.email}?subject=${encodeURIComponent("Admission enquiry")}`}>
                  <EnvelopeSimpleIcon data-icon="inline-start" className="size-5" />
                  Email us
                </a>
              </Button>
            </div>

            <p className="mt-8 flex gap-3 border-t border-border-subtle pt-6 text-sm text-ink-muted">
              <CalendarBlankIcon aria-hidden="true" className="size-5 shrink-0 text-brand-coral" />
              Prefer to see the school first? Ask us to book a visit when you get in touch.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
