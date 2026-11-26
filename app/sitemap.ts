import type { MetadataRoute } from "next";

import { galleryItems } from "@/lib/gallery";
import { site } from "@/lib/site";
import { routes } from "@/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    routes.home,
    routes.about,
    routes.programmes,
    routes.admissions,
    routes.gallery,
    routes.contact,
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === routes.gallery ? "weekly" : "monthly",
    priority: route === routes.home ? 1 : 0.8,
  }));

  const galleryEntries: MetadataRoute.Sitemap = galleryItems.map((item) => ({
    url: `${site.url}/gallery/${item.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...galleryEntries];
}
