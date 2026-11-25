"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { easeSmooth } from "@/lib/motion";
import { mainNav, routes } from "@/routes";

import MobileNav from "./mobile-nav";
import Logo from "./logo";

// How far down the page before the header starts hiding on scroll.
const HIDE_AFTER_PX = 120;

export default function SiteHeader() {
  // state
  const [isHidden, setIsHidden] = useState(false);

  // hooks
  const { scrollY } = useScroll();

  // effect
  // Hide while scrolling down, show again as soon as the visitor scrolls up.
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsHidden(current > previous && current > HIDE_AFTER_PX);
  });

  return (
    <motion.header
      animate={{ y: isHidden ? "-120%" : "0%" }}
      transition={{ duration: 0.3, ease: easeSmooth }}
      // Keyboard users tabbing into the header always bring it back into view
      onFocusCapture={() => setIsHidden(false)}
      className="sticky top-0 z-40 px-4 pt-3 sm:px-6"
    >
      <a
        href="#main"
        className="sr-only rounded-pill bg-brand-navy px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-4"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-(--container-max) items-center justify-between gap-4 rounded-pill border border-border-subtle bg-surface-elevated/95 py-2 pr-2 pl-2 shadow-md backdrop-blur sm:pr-3">
        <Logo showName nameClassName="hidden sm:inline" />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-pill px-4 py-2 text-sm font-medium text-ink-primary transition-colors hover:bg-surface-sand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild className="hidden sm:inline-flex">
            <Link href={routes.admissions}>
              Apply Now
              <ArrowUpRightIcon data-icon="inline-end" className="size-4" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
