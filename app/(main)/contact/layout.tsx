import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact @Since24 - Get in Touch | Electronic Appliances Rwanda",
    description: "Contact @Since24 for premium electronic appliances and professional installation services in Rwanda. Call +250 788 825 011 or email atsince24@gmail.com. Located in Kigali, Muhima.",
    keywords: [
        "contact @Since24",
        "@Since24 contact",
        "@Since24 Rwanda contact",
        "electronic appliances contact Rwanda",
        "solar water heater contact Rwanda",
        "gate opener contact Rwanda",
        "air conditioner contact Rwanda",
        "installation services contact Rwanda",
        "premium electronics contact Rwanda",
        "sustainable technology contact Rwanda",
        "smart home solutions contact Rwanda",
        "professional installation contact Rwanda",
        "Kigali electronics contact",
        "Rwanda technology contact",
        "eco-friendly appliances contact Rwanda",
        "energy saving solutions contact Rwanda",
        "@Since24 phone number",
        "@Since24 email",
        "@Since24 address",
        "@Since24 location"
    ],
    openGraph: {
        title: "Contact @Since24 - Get in Touch",
        description: "Contact @Since24 for premium electronic appliances and professional installation services in Rwanda. Call +250 788 825 011 or email atsince24@gmail.com. Located in Kigali, Muhima.",
        url: "https://atsince24.com/contact",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "@Since24 - Contact Us",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact @Since24 - Get in Touch",
        description: "Contact @Since24 for premium electronic appliances and professional installation services in Rwanda. Call +250 788 825 011 or email atsince24@gmail.com.",
        images: ["/images/og-image.jpg"],
    },
    alternates: {
        canonical: "https://atsince24.com/contact",
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}

            {/* Structured Data for Contact Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact @Since24",
                        "description": "Contact @Since24 for premium electronic appliances and professional installation services in Rwanda",
                        "url": "https://atsince24.com/contact",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "@Since24",
                            "url": "https://atsince24.com",
                            "logo": "https://atsince24.com/images/logo.png",
                            "contactPoint": [
                                {
                                    "@type": "ContactPoint",
                                    "contactType": "customer service",
                                    "telephone": "+250 788 825 011",
                                    "email": "atsince24@gmail.com",
                                    "availableLanguage": "English",
                                    "areaServed": "RW"
                                },
                                {
                                    "@type": "ContactPoint",
                                    "contactType": "sales",
                                    "telephone": "+250 788 825 011",
                                    "email": "atsince24@gmail.com",
                                    "availableLanguage": "English",
                                    "areaServed": "RW"
                                }
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "KN 8 Ave, Kigali - Muhima",
                                "addressLocality": "Kigali",
                                "addressRegion": "Kigali",
                                "addressCountry": "RW"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": -1.9441,
                                "longitude": 30.0619
                            },
                            "openingHours": "Mo-Sa 08:00-19:00",
                            "openingHoursSpecification": [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "08:00",
                                    "closes": "19:00"
                                }
                            ]
                        }
                    })
                }}
            />
        </>
    )
} 