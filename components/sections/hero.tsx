import Image from "next/image";

import culturalDay from "@/public/images/IMG-20261123-WA0028.jpg";
import classroom from "@/public/images/Basic1 classrooom.jpg";
import { Reveal } from "@/components/shared/reveal";

import HeroText from "./hero-text";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative mx-auto w-full max-w-(--container-max) px-4 pt-12 pb-14 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16"
    >
      <div className="grid grid-cols-2 items-start gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-[1fr_minmax(0,36rem)_1fr] lg:gap-x-10">
        {/* Headline block: first on mobile, centre column on desktop */}
        <div className="col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:pt-6">
          <HeroText />
        </div>

        {/* Left photo: Cultural Day, arch frame */}
        <Reveal variant="photo" className="relative lg:col-start-1 lg:row-start-1 lg:mt-28">
          <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-3 translate-y-3 rounded-arch bg-accent-marigold sm:-translate-x-4 sm:translate-y-4"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-arch shadow-lg">
            <Image
              src={culturalDay}
              alt="A smiling pupil in kente cloth and a gold crown waves at the camera during a Cultural Day celebration"
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 22vw, 46vw"
              className="size-full object-cover"
            />
          </div>
        </Reveal>

        {/* Right photo: classroom, squircle frame, offset lower */}
        <Reveal variant="photo" className="relative mt-16 lg:col-start-3 lg:row-start-1 lg:mt-52">
          <span
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 -translate-y-3 rounded-[28px_120px_28px_120px] bg-accent-emerald sm:translate-x-4 sm:-translate-y-4"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-squircle shadow-lg">
            <Image
              src={classroom}
              alt="Pupils in navy uniforms with kente collars writing at their desks in a Basic 1 classroom"
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 22vw, 46vw"
              className="size-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
