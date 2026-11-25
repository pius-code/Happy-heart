import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions",
};

export default function AdmissionsPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-24">
      <h1 className="text-h2 font-semibold tracking-[-0.02em]">Admissions</h1>
    </div>
  );
}
