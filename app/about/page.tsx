import {
  BusIcon,
  DesktopIcon,
  ForkKnifeIcon,
  MusicNotesIcon,
  ShieldCheckIcon,
  SmileyIcon,
  TranslateIcon,
  TreeIcon,
} from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Image from "next/image";

import pupilsWriting from "@/public/images/IMG_20240126_084507.jpg";
import AdmissionsCta from "@/components/sections/admissions-cta";
import KenteSlideText from "@/components/shared/kente-slide-text";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import PageIntro from "@/components/shared/page-intro";
import Kicker from "@/components/shared/kicker";
import Decor from "@/components/shared/decor";
import { cn } from "@/lib/utils";

import Team from "./_components/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Happy Heart School in Dome Pillar 2, Accra: small classes, staff who know every child, and the team behind the school.",
};

// Facilities listed on the school's previous website.
const facilities = [
  { label: "School bus", icon: BusIcon, color: "bg-accent-marigold text-ink-primary" },
  { label: "Playground", icon: TreeIcon, color: "bg-accent-emerald text-white" },
  { label: "Healthy canteen", icon: ForkKnifeIcon, color: "bg-accent-tangerine text-ink-primary" },
  { label: "Positive learning", icon: SmileyIcon, color: "bg-brand-navy text-white" },
  { label: "Music room", icon: MusicNotesIcon, color: "bg-brand-coral text-white" },
  { label: "ICT department", icon: DesktopIcon, color: "bg-brand-navy text-white" },
  { label: "Chinese & French lessons", icon: TranslateIcon, color: "bg-accent-marigold text-ink-primary" },
  { label: "24/7 CCTV & security", icon: ShieldCheckIcon, color: "bg-accent-emerald text-white" },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        kicker="About us"
        title={
          <>
            Making every <KenteSlideText text="heart happy" />
          </>
        }
        lead="Our aim is to bring satisfaction to everyone in our community and make each heart happy: child, parent and school alike."
      />

      <section aria-label="School video" className="mx-auto w-full max-w-(--container-max) px-4 pb-12 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto aspect-video max-w-4xl overflow-hidden rounded-squircle border border-border-subtle bg-brand-navy shadow-lg">
          <iframe
            src="https://www.youtube-nocookie.com/embed/56tZLhGHZOY?si=LH_-yc-iT4tkilvQ"
            title="Happy Heart School video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="size-full border-0"
          />
        </div>
      </section>

      <section aria-labelledby="belief-title" className="bg-surface-sand">
        <div className="mx-auto grid max-w-(--container-max) items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
          <Reveal variant="photo" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Decor name="heart" className="absolute -top-8 -right-2 size-14" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-arch shadow-lg lg:mr-12">
              <Image
                src={pupilsWriting}
                alt="Pupils in yellow school polos writing in their exercise books at a row of computers"
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, (min-width: 448px) 448px, 92vw"
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <Kicker>What we believe</Kicker>
            <h2
              id="belief-title"
              className="mt-4 text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
            >
              A happy child makes a good learner
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-normal text-ink-muted lg:text-xl">
              And a happy parent makes a good supporter. That is why we care just as much about
              how children feel at school as about what they learn.
            </p>
            <p className="mt-4 text-[1.0625rem] leading-normal text-ink-muted">
              Our class sizes are small, so our staff make it a point to know each child
              personally.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="facilities-title"
        className="mx-auto w-full max-w-(--container-max) px-4 pt-14 sm:px-6 lg:px-8 lg:pt-24"
      >
        <Reveal className="mx-auto max-w-2xl text-center">
          <Kicker>Facilities</Kicker>
          <h2
            id="facilities-title"
            className="mt-3 text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
          >
            Everything a school day needs
          </h2>
        </Reveal>

        <Reveal stagger className="mt-10 grid grid-cols-2 gap-4 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {facilities.map((facility) => (
            <RevealItem
              key={facility.label}
              variant="card"
              lift
              className={cn("flex flex-col items-start gap-6 rounded-card p-5 sm:p-6", facility.color)}
            >
              <facility.icon aria-hidden="true" weight="duotone" className="size-10" />
              <p className="font-display text-xl leading-tight font-semibold">
                {facility.label}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </section>

      <Team />
      <AdmissionsCta />
    </>
  );
}
