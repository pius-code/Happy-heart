"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Loader2, Share2, X } from "lucide-react";
import Image from "next/image";

import type { GalleryItem } from "@/lib/gallery";
import { cn } from "@/lib/utils";

interface GalleryModalProps {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function GalleryModal({
  items,
  activeIndex,
  onClose,
  onSelectIndex,
}: GalleryModalProps) {
  const item = items[activeIndex];
  const [loadedId, setLoadedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isLoading = loadedId !== item.id;

  const goPrev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    onSelectIndex(prevIndex);
  }, [activeIndex, items.length, onSelectIndex]);

  const goNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % items.length;
    onSelectIndex(nextIndex);
  }, [activeIndex, items.length, onSelectIndex]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goNext, goPrev, onClose]);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/gallery/${item.id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      const input = document.createElement("input");
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }

    setCopied(true);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      // Top gap (pt-12 sm:pt-16) keeps the modal visibly distinct from a full-screen view
      className="fixed inset-0 z-50 flex flex-col justify-end bg-brand-navy/75 pt-12 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6 sm:pt-16"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const deltaX = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(deltaX) > 45) {
            if (deltaX > 0) goPrev();
            else goNext();
          }
        }}
        className="relative flex h-full max-h-[86dvh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl bg-brand-navy text-white shadow-2xl ring-1 ring-white/15 sm:max-h-[84dvh] sm:max-w-lg sm:rounded-3xl"
      >
        {/* Top bar */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4">
          <span className="rounded-pill bg-black/45 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
            {activeIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close media viewer"
            className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-black/70 focus-visible:ring-2 focus-visible:ring-accent-marigold focus-visible:outline-none"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Main media area */}
        <div className="relative flex-1 overflow-hidden bg-brand-navy">
          {item.type === "image" ? (
            <Image
              key={item.id}
              src={item.src}
              alt={item.alt}
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 640px) 100vw, 512px"
              onLoad={() => setLoadedId(item.id)}
              className={cn(
                "object-cover transition-opacity duration-200",
                isLoading ? "opacity-80" : "opacity-100",
              )}
            />
          ) : (
            <video
              key={item.id}
              src={item.videoSrc}
              controls
              autoPlay
              playsInline
              preload="auto"
              onLoadedData={() => setLoadedId(item.id)}
              className="size-full object-contain pb-20"
            />
          )}

          {/* Spinner while image or video loads (helpful on 2G) */}
          {isLoading && (
            <div
              aria-label="Loading media"
              className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-brand-navy/25 backdrop-blur-[2px]"
            >
              <div className="flex items-center gap-2 rounded-pill bg-black/55 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                <Loader2 className="size-4 animate-spin text-accent-marigold" />
                <span>{item.type === "video" ? "Loading video…" : "Loading photo…"}</span>
              </div>
            </div>
          )}

          {/* Bottom gradient + controls */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pt-14 pb-5 sm:px-5">
            <div className="pointer-events-auto flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous item"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent-marigold focus-visible:outline-none"
              >
                <ChevronLeft className="size-5" />
              </button>

              <button
                type="button"
                onClick={handleShare}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-pill px-5 py-2.5 text-sm font-semibold transition-all active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-marigold focus-visible:outline-none",
                  copied
                    ? "bg-accent-emerald text-white"
                    : "bg-brand-coral text-white shadow-coral-glow hover:bg-brand-coral-dark",
                )}
              >
                {copied ? (
                  <>
                    <Check className="size-4" />
                    <span>Link copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="size-4" />
                    <span>Share</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next item"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent-marigold focus-visible:outline-none"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
