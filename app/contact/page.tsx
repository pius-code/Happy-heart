import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-24">
      <h1 className="text-h2 font-semibold tracking-[-0.02em]">Contact</h1>
    </div>
  );
}
