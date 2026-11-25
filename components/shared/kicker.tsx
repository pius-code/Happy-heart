import { cn } from "@/lib/utils";

interface KickerInterface {
  children: React.ReactNode;
  className?: string;
}

// Small plain-text label shown above headings. No pill or border.
export default function Kicker({ children, className }: KickerInterface) {
  return (
    <p className={cn("font-label text-sm font-semibold text-brand-coral-dark", className)}>
      {children}
    </p>
  );
}
