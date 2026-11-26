import type { Metadata } from "next";

import { site } from "@/lib/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

/** Builds consistent canonical, Open Graph, and Twitter metadata for inner pages. */
export function buildPageMetadata({
  title,
  description,
  path,
  image = "/images/excursion.jpg",
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_GH",
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
