import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Electronic Appliances & Products | Solar Water Heaters, Gate Openers, Air Conditioners",
    description: "Explore our premium range of electronic appliances including solar water heaters, automatic gate openers, gate barriers, air conditioners, and solar panels. Professional installation services available in Rwanda.",
    keywords: [
        "solar water heater Rwanda",
        "automatic gate opener Rwanda",
        "gate barrier Rwanda",
        "air conditioner Rwanda",
        "solar panel Rwanda",
        "electronic appliances Rwanda",
        "premium electronics Rwanda",
        "energy efficient appliances Rwanda",
        "sustainable technology Rwanda",
        "smart home solutions Rwanda",
        "commercial electronics Rwanda",
        "residential appliances Rwanda",
        "installation services Rwanda",
        "maintenance services Rwanda",
        "Kigali electronics",
        "Rwanda technology products"
    ],
    openGraph: {
        title: "Electronic Appliances & Products | @Since24",
        description: "Explore our premium range of electronic appliances including solar water heaters, automatic gate openers, gate barriers, air conditioners, and solar panels. Professional installation services available in Rwanda.",
        url: "https://atsince24.com/products",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "@Since24 - Electronic Appliances & Products",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Electronic Appliances & Products | @Since24",
        description: "Explore our premium range of electronic appliances including solar water heaters, automatic gate openers, gate barriers, air conditioners, and solar panels.",
        images: ["/images/og-image.jpg"],
    },
    alternates: {
        canonical: "https://atsince24.com/products",
    },
}

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}

            {/* Structured Data for Products Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Electronic Appliances & Products",
                        "description": "Premium electronic appliances and products available in Rwanda",
                        "url": "https://atsince24.com/products",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "item": {
                                    "@type": "Product",
                                    "name": "Solar Water Heater",
                                    "description": "Eco-friendly water heating solution with pressurized and non-pressurized options",
                                    "url": "https://atsince24.com/products/solar-water-heater",
                                    "category": "Water Heating",
                                    "brand": {
                                        "@type": "Brand",
                                        "name": "@Since24"
                                    }
                                }
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "item": {
                                    "@type": "Product",
                                    "name": "Automatic Gate Opener",
                                    "description": "Smart gate solutions for enhanced security and convenience",
                                    "url": "https://atsince24.com/products/automatic-gate-opener",
                                    "category": "Security & Access Control",
                                    "brand": {
                                        "@type": "Brand",
                                        "name": "@Since24"
                                    }
                                }
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "item": {
                                    "@type": "Product",
                                    "name": "Gate Barrier",
                                    "description": "Advanced barrier systems for controlled access to your property",
                                    "url": "https://atsince24.com/products/gate-barrier",
                                    "category": "Security & Access Control",
                                    "brand": {
                                        "@type": "Brand",
                                        "name": "@Since24"
                                    }
                                }
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "item": {
                                    "@type": "Product",
                                    "name": "Air Conditioner",
                                    "description": "Energy-efficient cooling solutions for your home or office",
                                    "url": "https://atsince24.com/products/air-conditioner",
                                    "category": "Climate Control",
                                    "brand": {
                                        "@type": "Brand",
                                        "name": "@Since24"
                                    }
                                }
                            },
                            {
                                "@type": "ListItem",
                                "position": 5,
                                "item": {
                                    "@type": "Product",
                                    "name": "Solar Panel",
                                    "description": "Harness solar energy to power your home or business",
                                    "url": "https://atsince24.com/products/solar-panel",
                                    "category": "Solar Energy",
                                    "brand": {
                                        "@type": "Brand",
                                        "name": "@Since24"
                                    }
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    )
} 