"use client";

import { useState } from "react";
import { Loader2, Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);
  const [useFallbackPoster, setUseFallbackPoster] = useState(false);

  const posterUrl = useFallbackPoster
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-squircle border border-border-subtle bg-surface-sand shadow-lg">
      {!hasStarted ? (
        <button
          type="button"
          onClick={() => setHasStarted(true)}
          aria-label={`Play ${title}`}
          className="group relative block size-full cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:outline-none"
        >
          {/* Lightweight poster avoids loading YouTube's player until the visitor clicks Play */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={posterUrl}
            alt={title}
            loading="lazy"
            onError={() => setUseFallbackPoster(true)}
            onLoad={(e) => {
              // YouTube returns a 120px placeholder if maxresdefault doesn't exist
              if (!useFallbackPoster && e.currentTarget.naturalWidth <= 120) {
                setUseFallbackPoster(true);
              }
            }}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/25 transition-colors group-hover:bg-brand-navy/35">
            <span className="flex size-16 items-center justify-center rounded-full border border-white/75 bg-white/90 text-brand-coral shadow-lg backdrop-blur-md transition-transform duration-200 group-hover:scale-105">
              <Play className="size-7 fill-current" />
            </span>
          </div>
        </button>
      ) : (
        <>
          {!isFrameLoaded && (
            <div
              aria-label="Loading video"
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-surface-sand text-ink-primary"
            >
              <Loader2 className="size-8 animate-spin text-brand-coral" />
              <span className="text-sm font-medium text-ink-muted">Loading video…</span>
            </div>
          )}
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={() => setIsFrameLoaded(true)}
            className="relative z-0 size-full border-0"
          />
        </>
      )}
    </div>
  );
}
