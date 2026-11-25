"use client";

import { PlayIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface MusicVideoInterface {
  className?: string;
}

// Portrait music-lesson video. Nothing downloads or plays until the visitor clicks play,
// and it pauses by itself when scrolled out of view.
export default function MusicVideo({ className }: MusicVideoInterface) {
  // state
  const [hasStarted, setHasStarted] = useState(false);

  // hooks
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.3 });

  // effect
  useEffect(() => {
    if (!isInView) videoRef.current?.pause();
  }, [isInView]);

  // functions
  const handlePlay = () => {
    setHasStarted(true);
    videoRef.current?.play().catch(() => setHasStarted(false));
  };

  return (
    <figure
      className={cn(
        "relative aspect-[29/52] overflow-hidden rounded-squircle bg-brand-navy",
        className,
      )}
    >
      <video
        ref={videoRef}
        controls={hasStarted}
        preload="none"
        playsInline
        poster="/videos/music-lesson-poster.jpg"
        aria-label="Music lesson: a pupil plays the keyboard while a teacher plays the saxophone"
        className="size-full object-cover"
      >
        <source src="/videos/VID-20261123-WA0029.mp4" type="video/mp4" />
      </video>

      {!hasStarted && (
        <>
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play the music lesson video (1 minute 10 seconds)"
            className="group absolute inset-0 z-10 flex items-center justify-center outline-none"
          >
            <span
              className={cn(
                "flex size-16 items-center justify-center rounded-full border border-white/70 bg-white/80 text-brand-navy backdrop-blur-md",
                "transition-colors duration-150 ease-smooth group-hover:bg-white/95",
                "group-focus-visible:ring-4 group-focus-visible:ring-accent-marigold",
              )}
            >
              <PlayIcon weight="fill" aria-hidden="true" className="size-7" />
            </span>
          </button>
          {/* Same caption style as the photos; hidden once the native controls appear */}
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-navy/80 via-brand-navy/35 to-transparent px-6 pt-16 pb-5 font-display text-xl font-semibold tracking-[-0.01em] text-white">
            Music lessons
          </figcaption>
        </>
      )}
    </figure>
  );
}
