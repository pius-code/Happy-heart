import { cn } from "@/lib/utils";

interface KenteTrimInterface {
  className?: string;
}

// 4px Kente pattern strip. Use only at major section transitions.
export default function KenteTrim({ className }: KenteTrimInterface) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "h-1 w-full bg-[url(/svg/kente-trim.svg)] bg-size-[60px_4px] bg-repeat-x",
        className,
      )}
    />
  );
}
