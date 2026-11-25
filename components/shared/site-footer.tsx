import { EnvelopeSimpleIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";

import { mainNav } from "@/routes";
import { site } from "@/lib/site";

import KenteTrim from "./kente-trim";
import Logo from "./logo";

export default function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <KenteTrim />
      <div className="mx-auto grid max-w-(--container-max) gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1.4fr] lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4">
          <Logo showName nameClassName="text-white text-xl" />
          <p className="max-w-xs text-sm leading-relaxed text-white/80">
            We grow, we learn, we serve. {site.ageRange}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 font-label text-xs font-medium tracking-[0.04em] text-accent-marigold uppercase">
            Explore
          </h2>
          <ul className="flex flex-col gap-2.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/85 underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-label text-xs font-medium tracking-[0.04em] text-accent-marigold uppercase">
            Visit &amp; contact
          </h2>
          <address className="flex flex-col gap-3 text-sm text-white/85 not-italic">
            <p className="flex gap-3">
              <MapPinIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-marigold" />
              <span>
                {site.address.full}
                <br />
                Ghana Post GPS: {site.ghanaPostAddress}
              </span>
            </p>
            <a href={site.phone.href} className="flex gap-3 hover:text-white">
              <PhoneIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-marigold" />
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
              <EnvelopeSimpleIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-marigold" />
              {site.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-(--container-max) px-4 py-6 text-xs text-white/70 sm:px-6 lg:px-8">
          © {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
