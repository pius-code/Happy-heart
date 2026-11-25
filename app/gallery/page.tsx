import type { Metadata } from "next";

import GalleryView from "@/components/gallery/gallery-view";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore everyday moments, trips, and celebrations at Happy Heart School.",
};

export default function GalleryPage() {
  return <GalleryView />;
}
