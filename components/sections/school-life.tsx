import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

import castleTrip from "@/public/images/IMG-20261123-WA0027.jpg";
import chineseClub from "@/public/images/Chinese club.jpg";
import excursion from "@/public/images/excursion.jpg";
import { Reveal, RevealItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Kicker from "@/components/shared/kicker";
import Decor from "@/components/shared/decor";
import { routes } from "@/routes";
import { cn } from "@/lib/utils";

import MusicVideo from "./music-video";

interface PhotoTileInterface {
  src: StaticImageData;
  alt: string;
  caption: string;
  sizes: string;
  // Classes for the image frame (aspect ratio / height)
  frameClassName: string;
  className?: string;
}

function PhotoTile({ src, alt, caption, sizes, frameClassName, className }: PhotoTileInterface) {
  return (
    <RevealItem variant="photo" className={className}>
      <figure
        className={cn("relative overflow-hidden rounded-squircle bg-surface-sand", frameClassName)}
      >
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          sizes={sizes}
          className="size-full object-cover"
        />
        {/* Soft dark fade at the bottom so the caption reads on any photo */}
        <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-navy/80 via-brand-navy/35 to-transparent px-6 pt-16 pb-5 font-display text-xl font-semibold tracking-[-0.01em] text-white">
          {caption}
        </figcaption>
      </figure>
    </RevealItem>
  );
}

export default function SchoolLife() {
  return (
    <section
      aria-labelledby="school-life-title"
      className="mx-auto w-full max-w-(--container-max) px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
    >
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <Decor name="heart" className="absolute -top-6 right-0 size-12 sm:right-10" />
        <Kicker>School life</Kicker>
        <h2
          id="school-life-title"
          className="mt-3 text-h2 leading-[1.2] font-semibold tracking-[-0.02em] lg:leading-[1.15]"
        >
          Learning that goes beyond the classroom
        </h2>
        <p className="mt-4 text-ink-muted">
          Excursions, clubs, music and celebrations give every child room to explore, make friends
          and discover what they love.
        </p>
      </Reveal>

      <Reveal stagger className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12">
        <PhotoTile
          src={excursion}
          alt="A group of smiling pupils in yellow school polos posing together outdoors on an excursion"
          caption="Excursions"
          sizes="(min-width: 1024px) 56vw, 92vw"
          frameClassName="aspect-[16/9] lg:aspect-auto lg:h-96"
          className="sm:col-span-2 lg:col-span-7"
        />
        <PhotoTile
          src={castleTrip}
          alt="Pupils in yellow and orange polos gathered outside a large whitewashed castle with arched windows"
          caption="Heritage trips"
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 46vw, 92vw"
          frameClassName="aspect-[4/3] lg:aspect-auto lg:h-96"
          className="lg:col-span-5"
        />

        <RevealItem variant="photo" className="lg:col-span-4">
          <MusicVideo className="mx-auto max-w-sm lg:max-w-none" />
        </RevealItem>

        <div className="flex flex-col gap-8 sm:col-span-2 lg:col-span-8">
          <PhotoTile
            src={chineseClub}
            alt="Members of the Chinese club holding up a certificate on the school steps"
            caption="Chinese club"
            sizes="(min-width: 1024px) 64vw, 92vw"
            frameClassName="aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[26rem]"
          />

          <RevealItem variant="card" className="flex flex-1 flex-col justify-between gap-8 rounded-squircle bg-accent-marigold p-8 text-ink-primary lg:p-10">
            <p className="max-w-md font-display text-2xl leading-snug font-semibold tracking-[-0.01em] lg:text-[1.75rem]">
              From Cultural Day to computer lessons, see what a day at Happy Heart looks like.
            </p>
            <Button asChild variant="navy" className="self-start">
              <Link href={routes.gallery}>
                Visit the gallery
                <ArrowRightIcon data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
          </RevealItem>
        </div>
      </Reveal>
    </section>
  );
}
