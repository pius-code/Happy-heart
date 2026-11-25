import Image from "next/image";

import { Reveal, RevealItem } from "@/components/shared/reveal";
import Kicker from "@/components/shared/kicker";
import { team } from "@/lib/site";
import { cn } from "@/lib/utils";

// Background colours for the initials, in card order.
const initialsColors = [
  "bg-accent-marigold text-ink-primary",
  "bg-accent-tangerine text-ink-primary",
  "bg-accent-emerald text-white",
  "bg-brand-navy text-white",
];

// "Mr Isaac Aboagye Asante" -> "IA" (skips the title, takes first and last name).
function getInitials(name: string) {
  const parts = name.split(" ").slice(1);
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Team() {
  return (
    <section
      aria-labelledby="team-title"
      className="mx-auto w-full max-w-(--container-max) px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <Kicker>The team</Kicker>
        <h2
          id="team-title"
          className="mt-3 text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
        >
          The people behind Happy Heart
        </h2>
      </Reveal>

      <Reveal stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {team.map((person, index) => (
          <RevealItem key={person.name} variant="card" lift>
            <article className="h-full rounded-card bg-surface-elevated p-3 shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-surface-sand">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className={cn(
                      "flex size-full items-center justify-center font-display text-6xl font-bold tracking-[-0.02em]",
                      initialsColors[index % initialsColors.length],
                    )}
                  >
                    {getInitials(person.name)}
                  </div>
                )}
              </div>
              <div className="px-3 pt-4 pb-3">
                <h3 className="font-display text-xl font-semibold tracking-[-0.01em]">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-coral-dark">{person.role}</p>
              </div>
            </article>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
