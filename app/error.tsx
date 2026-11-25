"use client";

import { ArrowClockwiseIcon } from "@phosphor-icons/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Kicker from "@/components/shared/kicker";
import { routes } from "@/routes";

interface ErrorPageInterface {
  error: unknown;
  // Re-fetches and re-renders the page that failed
  retry: () => void;
}

// Shown when a page fails to load (e.g. the connection dropped mid-navigation).
// The header and footer stay in place, so visitors can still move around the site.
export default function ErrorPage({ retry }: ErrorPageInterface) {
  return (
    <section className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <Kicker>Something went wrong</Kicker>
      <h1 className="mt-4 text-h2 leading-[1.2] font-semibold tracking-[-0.02em]">
        This page didn&apos;t load
      </h1>
      <p className="mt-4 text-ink-muted">
        It may be a problem with your connection. Please try again, or head back to the home page.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Button size="lg" onClick={() => retry()}>
          <ArrowClockwiseIcon data-icon="inline-start" className="size-5" />
          Try again
        </Button>
        <Button asChild size="lg" variant="glass">
          <Link href={routes.home}>Go to home page</Link>
        </Button>
      </div>
    </section>
  );
}
