import Image from "next/image";

import { cn } from "@/lib/utils";

type DecorName =
  | "arch"
  | "curved-arrow"
  | "heart"
  | "leaf-frame"
  | "sparkle"
  | "sunburst"
  | "underline";

interface DecorInterface {
  name: DecorName;
  className?: string;
}

// Signature SVG from public/svg. Always decorative, so hidden from screen readers.
export default function Decor({ name, className }: DecorInterface) {
  return (
    <Image
      src={`/svg/${name}.svg`}
      alt=""
      aria-hidden="true"
      width={100}
      height={100}
      className={cn("pointer-events-none select-none", className)}
    />
  );
}
