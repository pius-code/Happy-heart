"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

import { galleryItems, type GalleryItem } from "@/lib/gallery";
import { cn } from "@/lib/utils";

import GalleryModal from "./gallery-modal";

interface GalleryViewProps {
  initialItemId?: string;
}

const aspectClasses: Record<GalleryItem["aspect"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

function GalleryTile({
  item,
  onSelect,
}: {
  item: GalleryItem;
  onSelect: (id: string) => void;
}) {
  const [isLoaded, setIsLoaded] = useState(item.type === "video");

  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      aria-label={`Open ${item.title}`}
      className={cn(
        "group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-card bg-surface-sand text-left shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:outline-none sm:mb-4",
        aspectClasses[item.aspect],
      )}
    >
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 animate-pulse bg-surface-sand"
        />
      )}

      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          placeholder="blur"
          sizes="(max-width: 640px) 48vw, (max-width: 1024px) 32vw, 24vw"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "object-cover transition-transform duration-300 group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
        />
      ) : (
        <>
          {/* Only fetch lightweight metadata for grid tiles so 2G users don't download full MP4s */}
          <video
            src={`${item.videoSrc}#t=0.2`}
            preload="metadata"
            muted
            playsInline
            aria-hidden="true"
            className="size-full bg-brand-navy object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-brand-navy/20">
            <span className="flex size-12 items-center justify-center rounded-full border border-white/70 bg-white/85 text-brand-navy shadow-md backdrop-blur-md transition-transform group-hover:scale-105">
              <Play className="size-5 fill-current" />
            </span>
          </div>
        </>
      )}
    </button>
  );
}

export default function GalleryView({ initialItemId }: GalleryViewProps) {
  const initialIndex = useMemo(() => {
    if (!initialItemId) return null;
    const idx = galleryItems.findIndex((item) => item.id === initialItemId);
    return idx >= 0 ? idx : null;
  }, [initialItemId]);

  const [activeIndex, setActiveIndex] = useState<number | null>(initialIndex);

  const openById = useCallback((id: string) => {
    const idx = galleryItems.findIndex((item) => item.id === id);
    if (idx < 0) return;
    setActiveIndex(idx);
    window.history.pushState(null, "", `/gallery/${id}`);
  }, []);

  const selectIndex = useCallback((index: number) => {
    const target = galleryItems[index];
    if (!target) return;
    setActiveIndex(index);
    window.history.replaceState(null, "", `/gallery/${target.id}`);
  }, []);

  const closeModal = useCallback(() => {
    setActiveIndex(null);
    window.history.pushState(null, "", "/gallery");
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const match = window.location.pathname.match(/^\/gallery\/([^/]+)$/);
      if (match?.[1]) {
        const idx = galleryItems.findIndex((item) => item.id === match[1]);
        setActiveIndex(idx >= 0 ? idx : null);
      } else {
        setActiveIndex(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <section className="mx-auto w-full max-w-(--container-max) px-4 py-8 sm:px-6 sm:py-12">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <p className="text-xs font-semibold tracking-wider text-brand-coral uppercase">
          Happy Heart Moments
        </p>
        <h1 className="mt-1 font-display text-h2 font-semibold tracking-[-0.02em] text-ink-primary">
          Photo Gallery
        </h1>
      </div>

      {/* Masonry grid */}
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {galleryItems.map((item) => (
          <GalleryTile key={item.id} item={item} onSelect={openById} />
        ))}
      </div>

      {activeIndex !== null && (
        <GalleryModal
          items={galleryItems}
          activeIndex={activeIndex}
          onClose={closeModal}
          onSelectIndex={selectIndex}
        />
      )}
    </section>
  );
}
