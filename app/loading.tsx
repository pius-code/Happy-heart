import { Skeleton } from "@/components/ui/skeleton";

// Shown instantly while a page loads on a slow connection.
// Shaped like our pages (title block, then a row of cards) so the layout doesn't jump.
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      className="mx-auto w-full max-w-(--container-max) px-4 pt-12 pb-14 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <Skeleton className="h-4 w-28 rounded-pill bg-surface-sand motion-reduce:animate-none" />
        <Skeleton className="mt-5 h-12 w-full max-w-xl rounded-input bg-surface-sand motion-reduce:animate-none lg:h-16" />
        <Skeleton className="mt-6 h-5 w-full max-w-md rounded-pill bg-surface-sand motion-reduce:animate-none" />
        <Skeleton className="mt-3 h-5 w-2/3 max-w-sm rounded-pill bg-surface-sand motion-reduce:animate-none" />
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Skeleton
            key={item}
            className="h-40 rounded-card bg-surface-sand motion-reduce:animate-none"
          />
        ))}
      </div>
    </div>
  );
}
