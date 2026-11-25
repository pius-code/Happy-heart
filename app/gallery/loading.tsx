export default function GalleryLoading() {
  const skeletonAspects = [
    "aspect-[4/3]",
    "aspect-[3/4]",
    "aspect-[4/3]",
    "aspect-square",
    "aspect-[3/4]",
    "aspect-[4/3]",
  ];

  return (
    <section
      aria-label="Loading gallery"
      className="mx-auto w-full max-w-(--container-max) px-4 py-8 sm:px-6 sm:py-12"
    >
      <div className="mb-6 space-y-2 sm:mb-8">
        <div className="h-3 w-32 animate-pulse rounded-pill bg-surface-sand" />
        <div className="h-9 w-48 animate-pulse rounded-lg bg-surface-sand" />
      </div>

      <div className="mb-4 h-3 w-24 animate-pulse rounded-pill bg-surface-sand" />
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {skeletonAspects.map((aspect, index) => (
          <div
            key={index}
            className={`mb-3 w-full break-inside-avoid animate-pulse rounded-card bg-surface-sand sm:mb-4 ${aspect}`}
          />
        ))}
      </div>
    </section>
  );
}
