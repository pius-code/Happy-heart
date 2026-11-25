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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: `${site.name}, ${site.address.area}, ${site.address.city}. ${site.ageRange}.`,
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
