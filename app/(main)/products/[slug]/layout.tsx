import type { Metadata } from "next"

interface ProductMetadata {
    [key: string]: {
        title: string
        description: string
        keywords: string[]
        images: string[]

    }
}

const productMetadata: ProductMetadata = {
    "solar-water-heater": {
        title: "Solar Water Heater Rwanda | Eco-Friendly Water Heating Solutions | @Since24",
        description: "Premium solar water heaters in Rwanda with pressurized and non-pressurized options. Save up to 50% on energy bills with eco-friendly water heating solutions. Professional installation included.",
        keywords: [
            "solar water heater Rwanda",
            "solar water heater Kigali",
            "pressurized solar water heater",
            "non-pressurized solar water heater",
            "eco-friendly water heating Rwanda",
            "energy saving water heater Rwanda",
            "solar water heater installation Rwanda",
            "solar water heater price Rwanda",
            "solar water heater maintenance Rwanda",
            "sustainable water heating Rwanda",
            "green energy Rwanda",
            "solar technology Rwanda"
        ],
        images: [
            "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751191716/%40since24/ln7pbfnsqzlnz1kvxhyp.jpg"
        ]
    },
    "automatic-gate-opener": {
        title: "Automatic Gate Opener Rwanda | Smart Gate Solutions | @Since24",
        description: "Professional automatic gate openers in Rwanda with remote control and smartphone integration. Enhanced security and convenience for residential and commercial properties. Expert installation included.",
        keywords: [
            "automatic gate opener Rwanda",
            "automatic gate opener Kigali",
            "smart gate opener Rwanda",
            "remote control gate opener",
            "gate automation Rwanda",
            "security gate opener Rwanda",
            "commercial gate opener Rwanda",
            "residential gate opener Rwanda",
            "gate opener installation Rwanda",
            "gate opener maintenance Rwanda",
            "smart home gate control Rwanda",
            "gate security systems Rwanda"
        ],
        images: [
            "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751200214/%40since24/mvcomqc5ife4jp6yt4eo.jpg"
        ]
    },
    "gate-barrier": {
        title: "Gate Barrier Rwanda | Advanced Access Control Systems | @Since24",
        description: "Professional gate barriers and access control systems in Rwanda. Efficient traffic control for commercial and residential properties with durable construction and reliable operation.",
        keywords: [
            "gate barrier Rwanda",
            "gate barrier Kigali",
            "access control system Rwanda",
            "traffic barrier Rwanda",
            "commercial gate barrier Rwanda",
            "residential gate barrier Rwanda",
            "automatic barrier system Rwanda",
            "parking barrier Rwanda",
            "security barrier Rwanda",
            "barrier installation Rwanda",
            "barrier maintenance Rwanda",
            "access control Rwanda"
        ],
        images: [
            "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751224062/%40since24/qgpcjltuwjmhk4nrm56p.jpg"
        ]
    },
    "air-conditioner": {
        title: "Air Conditioner Rwanda | Energy-Efficient Cooling Solutions | @Since24",
        description: "Premium air conditioners in Rwanda with energy-efficient cooling solutions for homes and offices. Smart features, air purification, and professional installation services included.",
        keywords: [
            "air conditioner Rwanda",
            "air conditioner Kigali",
            "energy efficient air conditioner Rwanda",
            "smart air conditioner Rwanda",
            "residential air conditioner Rwanda",
            "commercial air conditioner Rwanda",
            "air conditioner installation Rwanda",
            "air conditioner maintenance Rwanda",
            "cooling solutions Rwanda",
            "climate control Rwanda",
            "air purification Rwanda",
            "smart home cooling Rwanda"
        ],
        images: [
            "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751224403/%40since24/tyhxh3xfrmurxb7rexhz.webp"
        ]
    },
    "solar-panel": {
        title: "Solar Panel Rwanda | Solar Energy Solutions | @Since24",
        description: "High-quality solar panels in Rwanda for residential and commercial use. Harness solar energy to power your home or business with professional installation and maintenance services.",
        keywords: [
            "solar panel Rwanda",
            "solar panel Kigali",
            "solar energy Rwanda",
            "solar power Rwanda",
            "residential solar panel Rwanda",
            "commercial solar panel Rwanda",
            "solar panel installation Rwanda",
            "solar panel maintenance Rwanda",
            "renewable energy Rwanda",
            "green energy Rwanda",
            "solar technology Rwanda",
            "sustainable energy Rwanda"
        ],
        images: [
            "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751224405/%40since24/wggpmnhx2i1d1v2cklxj.jpg"
        ]
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const product = productMetadata[params.slug]

    if (!product) {
        return {
            title: "Product Not Found | @Since24",
            description: "The requested product could not be found.",
        }
    }

    return {
        title: product.title,
        description: product.description,
        keywords: product.keywords,
        openGraph: {
            title: product.title,
            description: product.description,
            url: `https://atsince24.com/products/${params.slug}`,
            images: [
                {
                    url: product.images[0],
                    width: 1200,
                    height: 630,
                    alt: product.title,
                }
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: product.title,
            description: product.description,
            images: product.images,
        },
        alternates: {
            canonical: `https://atsince24.com/products/${params.slug}`,
        },
    }
}

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}

            {/* Structured Data for Product Pages */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Product Name", // This will be dynamically replaced
                        "description": "Product description", // This will be dynamically replaced
                        "url": "https://atsince24.com/products/product-slug", // This will be dynamically replaced
                        "brand": {
                            "@type": "Brand",
                            "name": "@Since24"
                        },
                        "manufacturer": {
                            "@type": "Organization",
                            "name": "@Since24"
                        },
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock",
                            "priceCurrency": "RWF",
                            "seller": {
                                "@type": "Organization",
                                "name": "@Since24"
                            }
                        },
                        "serviceType": "Installation Service",
                        "areaServed": {
                            "@type": "Country",
                            "name": "Rwanda"
                        }
                    })
                }}
            />
        </>
    )
} 