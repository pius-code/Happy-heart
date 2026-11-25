import Image from "next/image";
import Link from "next/link";

import logo from "@/public/brand/Happy Heart Logo 2025 300x200 pixels.jpg";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { routes } from "@/routes";

interface LogoInterface {
  className?: string;
  // Show the school name next to the emblem.
  showName?: boolean;
  nameClassName?: string;
}

export default function Logo({ className, showName, nameClassName }: LogoInterface) {
  return (
    <Link
      href={routes.home}
      className={cn("inline-flex items-center gap-3 rounded-pill", className)}
    >
      <Image
        src={logo}
        alt={showName ? "" : `${site.name} home`}
        className="size-12 shrink-0 rounded-full bg-white object-contain"
        sizes="48px"
      />
      {showName && (
        <span
          className={cn(
            "font-display text-lg leading-tight font-bold tracking-[-0.02em]",
            nameClassName,
          )}
        >
          {site.name}
        </span>
      )}
    </Link>
  );
}
