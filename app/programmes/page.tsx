import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Programmes",
  description:
    "Explore Crèche, Nursery, Kindergarten, Primary, and Junior High School programmes at Happy Heart School.",
  path: "/programmes",
});

export default function ProgrammesPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-24">
      <h1 className="text-h2 font-semibold tracking-[-0.02em]">Programmes</h1>
    </div>
  );
}
