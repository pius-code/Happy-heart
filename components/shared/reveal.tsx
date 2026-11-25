"use client";

import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { cardLift, revealCard, revealPhoto, revealText, staggerContainer } from "@/lib/motion";

const variantsByName = {
  text: revealText,
  photo: revealPhoto,
  card: revealCard,
};

type RevealVariant = keyof typeof variantsByName;

interface RevealInterface {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  // Reveal direct <RevealItem> children one after another instead.
  stagger?: boolean;
}

interface RevealItemInterface {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  // Lift 4px on hover (for cards).
  lift?: boolean;
}

// Animates content in when it scrolls into view.
// The server renders everything visible, so nothing is hidden before JavaScript loads.
// After hydration, only content that is still below the fold is hidden, ready to animate in.
export function Reveal({ children, className, variant = "text", stagger }: RevealInterface) {
  // hooks
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  // effect
  useEffect(() => {
    const element = ref.current;
    if (element && element.getBoundingClientRect().top > window.innerHeight) {
      controls.set("hidden");
    }
  }, [controls]);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger ? staggerContainer : variantsByName[variant]}
      initial={false}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

// A child of <Reveal stagger>. It follows the parent's hidden/visible state.
export function RevealItem({ children, className, variant = "text", lift }: RevealItemInterface) {
  return (
    <motion.div
      className={className}
      variants={variantsByName[variant]}
      whileHover={lift ? cardLift : undefined}
    >
      {children}
    </motion.div>
  );
}
