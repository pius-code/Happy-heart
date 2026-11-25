import type { Metadata } from "next";
import { notFound } from "next/navigation";

import GalleryView from "@/components/gallery/gallery-view";
import { galleryItems, getGalleryItemById } from "@/lib/gallery";

export function generateStaticParams() {
  return galleryItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = getGalleryItemById(id);

  if (!item) {
    return { title: "Media Not Found | Gallery" };
  }

  return {
    title: `${item.title} | Gallery`,
    description: item.caption,
    openGraph: {
      title: `${item.title} — Happy Heart School`,
      description: item.caption,
      ...(item.type === "image" ? { images: [{ url: item.src.src }] } : {}),
    },
  };
}

export default async function GalleryItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getGalleryItemById(id);

  if (!item) {
    notFound();
  }

  return <GalleryView initialItemId={item.id} />;
}
