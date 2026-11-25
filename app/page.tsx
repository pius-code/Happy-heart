import HappyHeartBanner from "@/components/sections/happy-heart-banner";
import AdmissionsCta from "@/components/sections/admissions-cta";
import SchoolLife from "@/components/sections/school-life";
import Programmes from "@/components/sections/programmes";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import { site } from "@/lib/site";

// Structured data for search engines, built only from the verified site constants.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone.href.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: `${site.address.area}, ${site.address.city}`,
    addressCountry: "GH",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Programmes />
      <About />
      <SchoolLife />
      <AdmissionsCta />
      <HappyHeartBanner />
    </>
  );
}
