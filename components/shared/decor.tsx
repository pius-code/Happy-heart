"use client";

import { motion } from "framer-motion";
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

const sunburstPaths = ["M30 54L12 45", "M43 35L35 12", "M61 32L72 12"];

// Signature SVG from public/svg. Always decorative, so hidden from screen readers.
export default function Decor({ name, className }: DecorInterface) {
  if (name === "sunburst") {
    return (
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className={cn("pointer-events-none select-none", className)}
      >
        <g fill="none" stroke="#F5B301" strokeWidth="5" strokeLinecap="round">
          {sunburstPaths.map((d, index) => (
            <motion.path
              key={d}
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                pathLength: {
                  duration: 0.45,
                  delay: 0.1 + index * 0.12,
                  ease: [0.34, 1.56, 0.64, 1],
                },
                opacity: { duration: 0.15, delay: 0.1 + index * 0.12 },
              }}
            />
          ))}
        </g>
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <motion.svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        initial={{ rotate: -8, scale: 0.9 }}
        whileInView={{ rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        className={cn("pointer-events-none select-none", className)}
      >
        <motion.path
          d="M50 85L17 51C-4 25 30 7 50 33C70 7 104 25 83 51Z"
          fill="none"
          stroke="#E84A27"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            pathLength: { duration: 1.05, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.2, delay: 0.15 },
          }}
        />
      </motion.svg>
    );
  }

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
