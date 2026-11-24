import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <h1 className="text-hero font-bold tracking-[-0.03em]">{site.name}</h1>
    </main>
  );
}
