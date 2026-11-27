import Image from "next/image";

import computerLab from "@/public/images/IMG_20240126_101836.jpg";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import Kicker from "@/components/shared/kicker";
import { cn } from "@/lib/utils";

// On phones each card is a slide: 85% wide so the next one peeks in, and it snaps into place.
// (h-full is md-only: on phones it would stop the row stretching every card to the same height.)
const slideClassName = "w-[85%] shrink-0 snap-start sm:w-[70%] md:w-auto";

interface StageCardInterface {
  title: string;
  ages: string;
  description: string;
  // Card surface + text colours
  surface: string;
  // Colour of the age label
  agesColor: string;
  // Abstract shapes used when there is no verified photo for this stage
  shapes?: React.ReactNode;
  className?: string;
}

function StageCard({
  title,
  ages,
  description,
  surface,
  agesColor,
  shapes,
  className,
}: StageCardInterface) {
  return (
    <RevealItem variant="card" lift className={cn("md:h-full", slideClassName, className)}>
      <article
        className={cn(
          "relative flex h-full min-h-72 flex-col justify-end overflow-hidden rounded-card p-6 sm:p-8",
          surface,
        )}
      >
        {shapes}
        <div className="relative">
          <p className={cn("font-label text-sm font-semibold", agesColor)}>{ages}</p>
          <h3 className="mt-2 text-h3 leading-tight font-semibold tracking-[-0.01em]">{title}</h3>
          <p className="mt-2 max-w-sm leading-relaxed">{description}</p>
        </div>
      </article>
    </RevealItem>
  );
}

export default function Programmes() {
  return (
    <section
      aria-labelledby="programmes-title"
      className="mx-auto w-full max-w-(--container-max) px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
    >
      <Reveal className="max-w-xl">
        <Kicker>Programmes</Kicker>
        <h2
          id="programmes-title"
          className="mt-4 text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
        >
          Four stages, one caring journey
        </h2>
      </Reveal>

      {/* Phones: a swipeable row where the next card peeks in. Tablet and up: a grid. */}
      <Reveal
        stagger
        className="-mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto overflow-y-hidden px-4 pt-2 pb-4 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pt-0 md:pb-0 lg:mt-14 lg:grid-cols-12 lg:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        <StageCard
          className="lg:col-span-5"
          title="Crèche & Nursery"
          ages="18 months – 3 years"
          description="A gentle, caring first step into school life for our youngest learners."
          surface="bg-accent-tangerine text-ink-primary"
          agesColor="text-ink-primary"
          shapes={
            <>
              <span aria-hidden="true" className="absolute -top-10 -right-10 size-44 rounded-full bg-white/25" />
              <span aria-hidden="true" className="absolute top-8 right-24 size-12 rounded-full border-4 border-brand-navy/15" />
            </>
          }
        />

        <StageCard
          className="lg:col-span-7"
          title="Kindergarten"
          ages="4 – 5 years"
          description="Play, stories and discovery that build confidence and curiosity before Primary school."
          surface="bg-accent-marigold text-ink-primary"
          agesColor="text-ink-primary"
          shapes={
            <>
              <span aria-hidden="true" className="absolute -right-6 -bottom-16 h-56 w-44 rounded-arch bg-white/30" />
              <span aria-hidden="true" className="absolute top-8 right-48 hidden size-16 rounded-squircle bg-brand-navy/10 sm:block" />
            </>
          }
        />

        {/* Primary: the only stage with a verified photo (computer lab) */}
        <RevealItem
          variant="card"
          lift
          className={cn("md:col-span-2 md:h-full lg:col-span-7", slideClassName)}
        >
          <article className="flex h-full flex-col overflow-hidden rounded-card bg-accent-emerald p-3 sm:flex-row sm:p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] sm:aspect-auto sm:w-1/2">
              <Image
                src={computerLab}
                alt="Pupils gathered around desktop computers during a lesson in the school computer lab"
                placeholder="blur"
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 92vw"
                className="size-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-end rounded-[14px] bg-surface-elevated p-6 text-ink-primary sm:ml-4 sm:p-7">
              <p className="font-label text-sm font-semibold text-ink-primary">6 – 11 years</p>
              <h3 className="mt-2 text-h3 leading-tight font-semibold tracking-[-0.01em]">
                Primary
              </h3>
              <p className="mt-2 leading-relaxed text-ink-muted">
                Strong foundations across core subjects, with hands-on time in our ICT lab.
              </p>
            </div>
          </article>
        </RevealItem>

        <StageCard
          className="md:col-span-2 lg:col-span-5"
          title="Junior High School"
          ages="12 – 14 years"
          description="Dedicated preparation for the BECE, where our candidates consistently excel and earn placements in top senior high schools."
          surface="bg-brand-navy text-white"
          agesColor="text-accent-marigold"
          shapes={
            <>
              <span aria-hidden="true" className="absolute -top-12 -right-12 size-44 rounded-full border-[18px] border-white/10" />
              <span aria-hidden="true" className="absolute right-8 bottom-6 size-10 rounded-full bg-brand-coral/80" />
            </>
          }
        />
      </Reveal>
    </section>
  );
}
