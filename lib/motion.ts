import type { TargetAndTransition, Transition, Variants } from "framer-motion";

// Matches --ease-smooth and --ease-spring in app/globals.css
export const easeSmooth = [0.22, 1, 0.36, 1] as const;
export const easeSpring = [0.34, 1.56, 0.64, 1] as const;

export const revealTransition: Transition = {
  duration: 0.7,
  ease: easeSmooth,
};

// --- Scroll reveals (used by components/shared/reveal.tsx) ---

// Section text: fade in while rising 40px.
export const revealText: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

// Photos and video: fade, rise and grow slightly into place.
export const revealPhoto: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: easeSmooth } },
};

// Cards: spring up with a small tilt for a playful settle.
export const revealCard: Variants = {
  hidden: { opacity: 0, y: 56, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  },
};

// Parent wrapper that reveals its children one after another.
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// --- Hero (runs once on page load, see components/sections/hero-text.tsx) ---

// Rise ~16px into place without fading, so it stays readable before hydration.
export const rise: Variants = {
  hidden: { y: 16 },
  visible: { y: 0, transition: { duration: 0.5, ease: easeSmooth } },
};

// Each headline word hops straight up with a springy settle (no tilt, so it never looks crooked).
export const popWord: Variants = {
  hidden: { y: "0.45em", scale: 0.94 },
  visible: {
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 14 },
  },
};

// Staggers kicker, words, underline, paragraph and buttons in turn.
export const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

// Draws a decorative line in from left to right.
export const drawLine: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.6, ease: easeSmooth } },
};

// Headline words wobble one after another like a wave, and the wave repeats every few seconds.
// `order` is the word's position in the headline, so each word starts slightly after the last.
export const wordWobble = (order: number): TargetAndTransition => ({
  rotate: [0, -8, 6, -4, 2, 0],
  y: [0, -8, 0, -3, 0],
  transition: {
    duration: 0.6,
    ease: "easeInOut",
    delay: 2 + order * 0.15,
    repeat: Infinity,
    repeatDelay: 10,
  },
});

// --- Hover ---

// Card hover: 4px lift with the spring curve.
export const cardLift = {
  y: -4,
  transition: { duration: 0.3, ease: easeSpring },
};
