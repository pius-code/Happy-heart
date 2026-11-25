"use client";

import { motion } from "framer-motion";
import { useId } from "react";

export default function HappyHeartBanner() {
  const rawId = useId();
  const gradId = `happy-heart-kente-${rawId.replace(/:/g, "")}`;

  return (
    <section
      aria-label="Happy Heart School"
      className="px-4 py-8 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <span className="sr-only">Happy Heart</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 920 140"
          className="h-auto w-full overflow-visible select-none"
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E84A27" />
              <stop offset="25%" stopColor="#F5B301" />
              <stop offset="50%" stopColor="#1E8E5A" />
              <stop offset="75%" stopColor="#182638" />
              <stop offset="100%" stopColor="#FF7A1A" />
            </linearGradient>
          </defs>

          {/* Kente fill fades in as the outline finishes drawing */}
          <motion.text
            x="460"
            y="104"
            textAnchor="middle"
            fontSize="106"
            fontWeight="800"
            letterSpacing="-0.02em"
            fontFamily="var(--font-bricolage), system-ui, sans-serif"
            fill={`url(#${gradId})`}
            initial={{ fillOpacity: 0 }}
            whileInView={{ fillOpacity: [0, 0.15, 0.95] }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            HAPPY HEART
          </motion.text>

          {/* Animated Kente stroke outline */}
          <motion.text
            x="460"
            y="104"
            textAnchor="middle"
            fontSize="106"
            fontWeight="800"
            letterSpacing="-0.02em"
            fontFamily="var(--font-bricolage), system-ui, sans-serif"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="650"
            initial={{ strokeDashoffset: 650 }}
            whileInView={{ strokeDashoffset: [650, 0] }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            HAPPY HEART
          </motion.text>
        </svg>
      </div>
    </section>
  );
}
