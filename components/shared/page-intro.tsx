import type { ReactNode } from "react";

import { Reveal } from "@/components/shared/reveal";
import Kicker from "@/components/shared/kicker";
import Decor from "@/components/shared/decor";

interface PageIntroInterface {
  kicker: string;
  title: ReactNode;
  lead: string;
}

// Title block at the top of inner pages (About, Admissions…).
export default function PageIntro({ kicker, title, lead }: PageIntroInterface) {
  return (
    <section className="mx-auto w-full max-w-(--container-max) px-4 pt-12 pb-10 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <Decor name="sunburst" className="absolute -top-8 left-0 size-12 sm:left-6" />
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-4 text-hero leading-[1.1] font-bold tracking-[-0.03em] text-ink-primary">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[1.0625rem] leading-normal text-ink-muted lg:text-xl">
          {lead}
        </p>
      </Reveal>
    </section>
  );
}
