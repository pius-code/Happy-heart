import {
  ArrowUpRightIcon,
  CalendarBlankIcon,
  EnvelopeSimpleIcon,
  PhoneIcon,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";

import KenteTrim from "@/components/shared/kente-trim";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Decor from "@/components/shared/decor";
import { site } from "@/lib/site";
import { routes } from "@/routes";

export default function AdmissionsCta() {
  return (
    <section
      aria-labelledby="admissions-title"
      className="mx-auto w-full max-w-(--container-max) px-4 pb-14 sm:px-6 lg:px-8 lg:pb-24"
    >
      <Reveal
        variant="photo"
        className="relative overflow-hidden rounded-squircle bg-brand-navy text-white"
      >
        <KenteTrim />
        <Decor name="curved-arrow" className="absolute top-10 right-8 hidden size-24 lg:block" />
        <div className="relative px-6 py-12 text-center sm:px-10 lg:py-20">
          <h2
            id="admissions-title"
            className="mx-auto max-w-2xl text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
          >
            Give your child a happy start
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Start an application, or book a visit to see Happy Heart for yourself.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href={routes.admissions}>
                Apply Now
                <ArrowUpRightIcon data-icon="inline-end" className="size-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="glass-dark">
              <Link href={routes.contact}>
                <CalendarBlankIcon data-icon="inline-start" className="size-5" />
                Book a Visit
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-white/85 sm:flex-row sm:gap-8">
            <a href={site.phone.href} className="inline-flex items-center gap-2 hover:text-white">
              <PhoneIcon aria-hidden="true" className="size-4 text-accent-marigold" />
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <EnvelopeSimpleIcon aria-hidden="true" className="size-4 text-accent-marigold" />
              {site.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
