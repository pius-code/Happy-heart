"use client";

import { MotionConfig } from "framer-motion";

interface MotionProviderInterface {
  children: React.ReactNode;
}

// Turns off non-essential motion for visitors who prefer reduced motion.
export default function MotionProvider({ children }: MotionProviderInterface) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
