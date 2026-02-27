import HeroSlider from "@/components/home/HeroSlider";
import IntroStrip from "@/components/home/IntroStrip";
import PracticeGrid from "@/components/home/PracticeGrid";
import FeaturedProfile from "@/components/home/FeaturedProfile";
import SelectedMattersPreview from "@/components/home/SelectedMattersPreview";
import AboutStrip from "@/components/home/AboutStrip";

// ─── LegalService JSON-LD structured data ────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Ali Almani & Partners",
  alternateName: "Ali Almani & Partners — Advocates & Legal Consultants",
  url: "https://almani.law",
  description:
    "Full service law firm in Karachi, Pakistan, specialising in tax litigation, international arbitration, constitutional law and commercial disputes. Founded by Ali Almani, Advocate of the Supreme Court of Pakistan.",
  telephone: "+92-21-351-78212",
  email: "info@almani.law",
  address: {
    "@type": "PostalAddress",
    streetAddress: "F8/3, Block 4, Old Clifton",
    addressLocality: "Karachi",
    postalCode: "75600",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.8138,
    longitude: 67.0298,
  },
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  founder: {
    "@type": "Person",
    name: "Ali Almani",
    jobTitle: "Managing Partner",
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Yale University" },
      { "@type": "EducationalOrganization", name: "University of Cambridge" },
      { "@type": "EducationalOrganization", name: "Harvard Law School" },
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Tax Litigation" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "International Commercial Arbitration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Constitutional & Public Law" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Commercial Litigation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Regulatory Disputes" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Civil Litigation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Corporate Advisory" },
      },
    ],
  },
  sameAs: ["https://www.almani.law"],
};

export default function HomePage() {
  return (
    <>
      {/* LegalService structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSlider />
      <IntroStrip />
      <PracticeGrid />
      <FeaturedProfile />
      <SelectedMattersPreview />
      <AboutStrip />
    </>
  );
}
