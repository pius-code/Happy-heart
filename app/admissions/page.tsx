import {
  CalendarBlankIcon,
  CheckCircleIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";

import { Reveal, RevealItem } from "@/components/shared/reveal";
import PageIntro from "@/components/shared/page-intro";
import { Button } from "@/components/ui/button";
import Kicker from "@/components/shared/kicker";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions at Happy Heart School, Dome Pillar 2, Accra. Classes from Crèche to Junior High School, ages 18 months to 14 years.",
};

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
