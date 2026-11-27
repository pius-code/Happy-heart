"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Kicker from "@/components/shared/kicker";
import Decor from "@/components/shared/decor";
import { routes } from "@/routes";

const mottoLines = [
  {
    text: "We grow,",
    className: "text-accent-emerald -rotate-2",
    delay: 0.05,
  },
  {
    text: "We learn,",
    className: "pl-6 sm:pl-20 lg:pl-36 text-brand-navy rotate-1",
    delay: 0.25,
  },
  {
    text: "We serve.",
    className: "pl-2 sm:pl-10 lg:pl-16 text-brand-coral -rotate-1",
    delay: 0.45,
  },
];

export default function MottoBanner() {
  return (
    <section
      aria-label="School motto"
      className="relative overflow-hidden px-4 pt-4 pb-2 sm:px-6 sm:pt-6 sm:pb-4 lg:px-8 lg:pt-8 lg:pb-4"
    >
      <div className="relative mx-auto max-w-(--container-max) rounded-squircle bg-surface-elevated/90 px-6 py-12 shadow-md sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        {/* Warm coral-tangerine-marigold glow orb */}
        <motion.div
          aria-hidden="true"
          animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.78, 0.55] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-1/2 right-4 size-56 -translate-y-1/2 rounded-full bg-linear-to-tr from-accent-marigold via-accent-tangerine to-brand-coral blur-3xl sm:right-12 sm:size-72 lg:size-80"
        />

        {/* Playful hand-drawn doodles */}
        <Decor
          name="sunburst"
          className="absolute -top-5 left-6 size-12 sm:top-6 sm:left-10 sm:size-14"
        />
        <Decor
          name="heart"
          className="absolute right-8 bottom-16 size-12 sm:right-16 sm:bottom-14 sm:size-16"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -6, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute top-8 right-8 hidden sm:block"
        >
          <Decor name="sparkle" className="size-10" />
        </motion.div>

        <div className="relative z-10">
          <Kicker className="mb-4">Words we live by</Kicker>

          <h2 className="font-display text-[clamp(2.5rem,7.5vw,5.25rem)] leading-[1.02] font-extrabold tracking-[-0.03em]">
            {mottoLines.map((line) => (
              <motion.span
                key={line.text}
                initial={{ y: 28, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 15,
                  delay: line.delay,
                }}
                className={`block origin-left ${line.className}`}
              >
                {line.text}
              </motion.span>
            ))}
          </h2>

          <div className="mt-8 sm:mt-10">
            <Link
              href={routes.about}
              className="group inline-flex items-center gap-2 rounded-pill bg-accent-marigold px-5 py-2.5 text-sm font-semibold text-ink-primary shadow-sm transition-transform hover:scale-105 active:scale-95"
            >
              <span>Who we are</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
