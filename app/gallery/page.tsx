import GalleryView from "@/components/gallery/gallery-view";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Gallery",
  description: "Explore everyday moments, trips, and celebrations at Happy Heart School.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <GalleryView />;
}
