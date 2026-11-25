"use client";

import { ArrowUpRightIcon, ListIcon } from "@phosphor-icons/react";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { mainNav, routes } from "@/routes";
import { site } from "@/lib/site";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon-lg" aria-label="Open menu" className="lg:hidden">
          <ListIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] bg-surface-canvas sm:max-w-sm">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">{site.name}</SheetTitle>
          <SheetDescription>{site.ageRange}</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
          {mainNav.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="rounded-input px-3 py-3 text-base font-medium text-ink-primary hover:bg-surface-sand"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <SheetClose asChild>
            <Button asChild size="lg" className="w-full">
              <Link href={routes.admissions}>
                Apply Now
                <ArrowUpRightIcon data-icon="inline-end" className="size-5" />
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
