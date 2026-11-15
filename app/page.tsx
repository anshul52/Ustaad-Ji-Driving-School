import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyUs from "@/components/WhyUs";
import { isPlaceholder, site } from "@/lib/site";
import { cleanIndianNumber } from "@/lib/whatsapp";

function structuredData() {
  const sameAs = [site.links.instagram, site.links.facebook].filter((l) => !isPlaceholder(l));
  const prices = site.courses.map((c) => c.price);

  return {
    "@context": "https://schema.org",
    "@type": ["DrivingSchool", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    slogan: site.tagline,
    description: site.seo.description,
    url: site.url,
    image: `${site.url}${site.seo.ogImage}`,
    logo: `${site.url}${site.logo.large}`,
    telephone: `+91${cleanIndianNumber(site.phone)}`,
    priceRange: site.priceRange,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: { "@type": "City", name: site.city },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: site.timings.opens,
        closes: site.timings.closes,
      },
    ],
    makesOffer: site.courses.map((c) => ({
      "@type": "Offer",
      name: `${c.name} Car Driving Course (${c.days})`,
      price: c.price,
      priceCurrency: "INR",
    })),
    offers: {
      "@type": "AggregateOffer",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      priceCurrency: "INR",
      offerCount: prices.length,
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:font-semibold focus:text-navy"
      >
        Seedha content par jaayein
      </a>
      <Header />
      <main id="main">
        <Hero />
        <WhyUs />
        <Courses />
        <HowItWorks />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData()).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
