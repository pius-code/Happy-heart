import { Bricolage_Grotesque, Poppins } from "next/font/google";
import type { Metadata } from "next";

import MotionProvider from "@/providers/motion-provider";
import SiteHeader from "@/components/shared/site-header";
import SiteFooter from "@/components/shared/site-footer";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const defaultDescription = `${site.name} in ${site.address.area}, ${site.address.city} — a warm, joyful school guiding children from Crèche to Junior High School (${site.ageRange}).`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.address.area}, ${site.address.city}`,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  keywords: [
    "Happy Heart School",
    "Happy Heart School Accra",
    "school in Dome Pillar 2",
    "Ga East school",
    "Crèche and Nursery Accra",
    "Kindergarten Accra",
    "Primary school Accra",
    "Junior High School Accra",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Little hearts. Big possibilities.`,
    description: defaultDescription,
    images: [
      {
        url: "/images/excursion.jpg",
        width: 1200,
        height: 630,
        alt: "Happy Heart School pupils smiling together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Little hearts. Big possibilities.`,
    description: defaultDescription,
    images: ["/images/excursion.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", bricolage.variable, poppins.variable)}
    >
      <body className="flex min-h-full flex-col">
        <MotionProvider>
          <SiteHeader />
          <main id="main" className="flex flex-1 flex-col">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
