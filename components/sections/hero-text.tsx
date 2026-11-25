"use client";

import { ArrowUpRightIcon, CalendarBlankIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

import { drawLine, heroStagger, popWord, rise } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import Kicker from "@/components/shared/kicker";
import Decor from "@/components/shared/decor";
import { site } from "@/lib/site";
import { routes } from "@/routes";

interface WordsInterface {
  text: string;
}

// Splits a line into words that each animate on their own.
function Words({ text }: WordsInterface) {
  return text.split(" ").map((word, index) => (
    <span key={word + index}>
      {index > 0 && " "}
      <motion.span variants={popWord} className="inline-block origin-bottom-left">
        {word}
      </motion.span>
    </span>
  ));
}

// Hero headline, intro and buttons, revealed in a playful sequence on page load.
export default function HeroText() {
  return (
    <motion.div
      variants={heroStagger}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center text-center"
    >
      <Decor name="sunburst" className="absolute -top-8 left-0 size-14 sm:left-6 lg:-left-6" />

      <motion.div variants={rise}>
        <Kicker>
          {site.ageRange} · {site.address.area}, {site.address.city}
        </Kicker>
      </motion.div>

      <h1
        id="hero-title"
        className="mt-5 text-hero leading-[1.1] font-bold tracking-[-0.03em] text-ink-primary lg:leading-[1.08]"
      >
        <Words text="Little hearts." />
        <br />
        <span className="relative inline-block text-brand-coral">
          <Words text="Big possibilities." />
          <motion.span
            variants={drawLine}
            aria-hidden="true"
            className="absolute top-[82%] left-1/2 block h-10 w-[70%] -translate-x-1/2 sm:h-12"
          >
            {/* The SVG is square with the stroke in its middle band; object-cover crops to that band */}
            <Decor name="underline" className="size-full object-cover" />
          </motion.span>
        </span>
      </h1>

      <motion.p
        variants={rise}
        className="mt-10 max-w-md text-[1.0625rem] leading-normal text-ink-muted lg:text-xl"
      >
        A warm, joyful school in {site.address.area}, {site.address.city}, guiding children from
        Crèche all the way to Junior High School.
      </motion.p>

      <motion.div
        variants={rise}
        className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-5"
      >
        <Button asChild size="lg">
          <Link href={routes.admissions}>
            Apply Now
            <ArrowUpRightIcon data-icon="inline-end" className="size-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="glass">
          <Link href={routes.contact}>
            <CalendarBlankIcon data-icon="inline-start" className="size-5" />
            Book a Visit
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
