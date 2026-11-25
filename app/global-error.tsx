"use client";

import "./globals.css";

interface GlobalErrorInterface {
  error: unknown;
  retry: () => void;
}

// Last-resort fallback if the whole layout (header/footer) fails.
// It replaces the root layout, so it needs its own <html> and <body>.
export default function GlobalError({ retry }: GlobalErrorInterface) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-surface-canvas px-4 text-center text-ink-primary">
        <title>Something went wrong | Happy Heart School</title>
        <h1 className="text-h2 font-semibold tracking-[-0.02em]">Something went wrong</h1>
        <p className="mt-4 max-w-md text-ink-muted">
          Please check your connection and try again.
        </p>
        <button
          type="button"
          onClick={() => retry()}
          className="mt-8 rounded-pill bg-primary px-7 py-3 font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
