import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <h1 className="text-h2 font-semibold tracking-[-0.02em]">Gallery</h1>
    </main>
  );
}
