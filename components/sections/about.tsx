import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";

import campus from "@/public/images/IMG-20261123-WA0026.jpg";
import { Reveal } from "@/components/shared/reveal";
import Kicker from "@/components/shared/kicker";
import Decor from "@/components/shared/decor";
import { site } from "@/lib/site";
import { routes } from "@/routes";

const facts = [
  { label: "Ages", value: "18 months – 14 years" },
  { label: "Stages", value: "Crèche & Nursery, Kindergarten, Primary, JHS" },
  { label: "Location", value: `${site.address.area}, ${site.address.city}` },
];

export default function About() {
  return (
    <section aria-labelledby="about-title" className="bg-surface-sand">
      <div className="mx-auto grid max-w-(--container-max) items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
        <Reveal variant="photo" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Decor name="sunburst" className="absolute -top-10 -left-6 size-16" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-arch shadow-lg lg:mr-12">
            <Image
              src={campus}
              alt="Pupils in navy uniforms with kente collars seated in the school courtyard beside the coral and navy campus building"
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, (min-width: 448px) 448px, 92vw"
              className="size-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <Kicker>Our campus</Kicker>
          <h2
            id="about-title"
            className="mt-4 text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
          >
            A home away from home in {site.address.area}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-normal text-ink-muted lg:text-xl">
            Behind our coral and navy walls, children learn, play and grow together, from their
            very first day in Crèche to their final year of Junior High School.
          </p>

          <blockquote className="mt-8 border-l-4 border-accent-marigold pl-5">
            <p className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink-primary">
              We grow, we learn, we serve.
            </p>
            <footer className="mt-1 text-sm text-ink-muted">Our school motto</footer>
          </blockquote>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-card bg-surface-elevated p-4">
                <dt className="font-label text-xs font-medium tracking-[0.04em] text-ink-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-ink-primary">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            href={routes.about}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-coral-dark underline-offset-4 hover:underline"
          >
            More about Happy Heart
            <ArrowRightIcon aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
