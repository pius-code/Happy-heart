"use client";

import { motion } from "framer-motion";
import { useId } from "react";

// Happy Heart Kente palette (from public/svg/kente-trim.svg + globals.css)
const KENTE_COLORS = ["#E84A27", "#F5B301", "#1E8E5A", "#182638", "#FF7A1A"];

const COLUMNS = 16;
const ROWS = 5;
const COL_WIDTH = 24;
const ROW_HEIGHT = 20;

interface KenteSlideTextProps {
  text: string;
}

// Deterministic pseudo-random helper so SSR and client hydration always match.
function seededValue(index: number) {
  const x = Math.sin(index * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const segments = Array.from({ length: COLUMNS * ROWS }, (_, idx) => {
  const col = Math.floor(idx / ROWS);
  const row = idx % ROWS;
  const r1 = seededValue(idx + 1);
  const r2 = seededValue(idx + 101);
  const r3 = seededValue(idx + 201);

  return {
    key: `${col}-${row}`,
    x: col * COL_WIDTH,
    y: row * ROW_HEIGHT - 12,
    color: KENTE_COLORS[Math.floor(r1 * KENTE_COLORS.length)],
    offsetY: -12 + r2 * 24,
    duration: 1.2 + r3 * 1.1,
    delay: r1 * 0.8,
  };
});

export default function KenteSlideText({ text }: KenteSlideTextProps) {
  const rawId = useId();
  const patternId = `kente-slide-${rawId.replace(/:/g, "")}`;

  return (
    <span className="inline-block whitespace-nowrap">
      <span className="sr-only">{text}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 380 76"
        className="inline-block h-[1.18em] w-auto align-[-0.24em] overflow-visible"
      >
        <defs>
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width={COLUMNS * COL_WIDTH}
            height={ROWS * ROW_HEIGHT}
          >
            {/* Solid base keeps letters 100% legible when colored blocks slide */}
            <rect
              x="0"
              y="0"
              width={COLUMNS * COL_WIDTH}
              height={ROWS * ROW_HEIGHT}
              fill="#182638"
            />
            {segments.map((seg) => (
              <motion.rect
                key={seg.key}
                x={seg.x}
                y={seg.y}
                width={COL_WIDTH + 1}
                height={ROW_HEIGHT + 10}
                fill={seg.color}
                animate={{ y: [seg.y, seg.y + seg.offsetY, seg.y] }}
                transition={{
                  duration: seg.duration,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: seg.delay,
                }}
              />
            ))}
          </pattern>
        </defs>
        <text
          x="4"
          y="56"
          fontSize="60"
          fontWeight="700"
          letterSpacing="-0.03em"
          fontFamily="var(--font-bricolage), system-ui, sans-serif"
          fill={`url(#${patternId})`}
        >
          {text}
        </text>
      </svg>
    </span>
  );
}
