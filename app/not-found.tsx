import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Kicker from "@/components/shared/kicker";
import Decor from "@/components/shared/decor";
import { routes } from "@/routes";

export const metadata: Metadata = {
  title: "Page not found",
};

// Shown for any URL that doesn't exist, including the old /contact page.
export default function NotFound() {
  return (
    <section className="relative mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <Decor name="heart" className="size-14" />
      <Kicker className="mt-6">Error 404</Kicker>
      <h1 className="mt-4 text-h2 leading-[1.2] font-semibold tracking-[-0.02em]">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 text-ink-muted">
        The link may be old or mistyped. Here are some good places to start.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href={routes.home}>Go to home page</Link>
        </Button>
        <Button asChild size="lg" variant="glass">
          <Link href={routes.admissions}>Admissions</Link>
        </Button>
      </div>
    </section>
  );
}
