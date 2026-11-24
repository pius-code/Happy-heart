import type { Transition, Variants } from "framer-motion";

// Matches --ease-smooth and --ease-spring in app/globals.css
export const easeSmooth = [0.22, 1, 0.36, 1] as const;
export const easeSpring = [0.34, 1.56, 0.64, 1] as const;

export const revealTransition: Transition = {
  duration: 0.5,
  ease: easeSmooth,
};

// Fade and rise ~16px into place. Use only for non-essential content,
// because the "hidden" state is rendered before hydration.
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

// Parent wrapper that staggers its children's reveals.
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Card hover: 4px lift with the spring curve.
export const cardLift = {
  whileHover: { y: -4 },
  transition: { duration: 0.3, ease: easeSpring },
};

// Pill button hover/focus: subtle 1.02 scale.
export const buttonScale = {
  whileHover: { scale: 1.02 },
  whileFocus: { scale: 1.02 },
  transition: { duration: 0.2, ease: easeSmooth },
};
