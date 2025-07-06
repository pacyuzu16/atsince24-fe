import HeroCarousel from "@/components/hero-carousel"
import FeaturedProducts from "@/components/featured-products"
import WhyChooseUs from "@/components/why-choose-us"
import Cta from "@/components/cta"
import Testimonials from "@/components/testimonials"
import InstallationServices from "@/components/installation-services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Electronic Appliances & Installation Services in Rwanda",
  description: "Leading provider of premium electronic appliances and professional installation services in Rwanda. Solar water heaters, automatic gate openers, gate barriers, air conditioners, and more. Expert installation and maintenance services.",
  keywords: [
    "electronic appliances Rwanda",
    "solar water heater Rwanda",
    "automatic gate opener Rwanda",
    "gate barrier Rwanda",
    "air conditioner Rwanda",
    "installation services Rwanda",
    "home automation Rwanda",
    "energy efficient appliances",
    "professional installation",
    "maintenance services",
    "premium electronics Rwanda",
    "sustainable technology Rwanda",
    "smart home solutions Rwanda",
    "commercial electronics Rwanda",
    "residential appliances Rwanda",
    "Kigali electronics",
    "Rwanda technology",
    "eco-friendly appliances Rwanda",
    "energy saving solutions Rwanda"
  ],
  openGraph: {
    title: "Premium Electronic Appliances & Installation Services in Rwanda | @Since24",
    description: "Leading provider of premium electronic appliances and professional installation services in Rwanda. Solar water heaters, automatic gate openers, gate barriers, air conditioners, and more.",
    url: "https://atsince24.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "@Since24 - Premium Electronic Appliances & Installation Services in Rwanda",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Electronic Appliances & Installation Services in Rwanda | @Since24",
    description: "Leading provider of premium electronic appliances and professional installation services in Rwanda. Expert installation and maintenance services.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://atsince24.com",
  },
}

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Cta />
      <FeaturedProducts />
      <InstallationServices />
      <WhyChooseUs />
      <Testimonials />

      {/* Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "@Since24",
            "url": "https://atsince24.com",
            "description": "Premium electronic appliances and professional installation services in Rwanda",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://atsince24.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "@Since24",
            "description": "Premium electronic appliances and professional installation services in Rwanda",
            "url": "https://atsince24.com",
            "telephone": "+250-788-825-011",
            "email": "atsince24@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "RW",
              "addressRegion": "Kigali"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -1.9441,
              "longitude": 30.0619
            },
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
            "priceRange": "rwfrs",
            "serviceArea": {
              "@type": "Country",
              "name": "Rwanda"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Electronic Appliances & Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Solar Water Heater",
                    "description": "Eco-friendly water heating solution with pressurized and non-pressurized options"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Automatic Gate Opener",
                    "description": "Smart gate solutions for enhanced security and convenience"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Gate Barrier",
                    "description": "Advanced barrier systems for controlled access to your property"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Air Conditioner",
                    "description": "Energy-efficient cooling solutions for your home or office"
                  }
                }
              ]
            }
          })
        }}
      />
    </>
  )
}
