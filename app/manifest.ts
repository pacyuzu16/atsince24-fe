import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "@Since24 - Premium Electronic Appliances & Installation Services",
        short_name: "@Since24",
        description: "Leading provider of premium electronic appliances and professional installation services in Rwanda. Solar water heaters, automatic gate openers, gate barriers, air conditioners, and more.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0a1f56",
        orientation: "portrait-primary",
        scope: "/",
        lang: "en",
        dir: "ltr",
        categories: ["business", "productivity", "utilities"],
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
                purpose: "any",
            },
            {
                src: "/images/since24.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/images/logo.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/images/logo.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
        screenshots: [
            {
                src: "/images/og-image.jpg",
                sizes: "1200x630",
                type: "image/jpeg",
                form_factor: "wide",
                label: "Homepage of @Since24 - Premium Electronic Appliances",
            },
            {
                src: "/images/og-image.jpg",
                sizes: "1200x630",
                type: "image/jpeg",
                form_factor: "narrow",
                label: "Homepage of @Since24 - Premium Electronic Appliances",
            },
        ],
        shortcuts: [
            {
                name: "Products",
                short_name: "Products",
                description: "View our range of electronic appliances",
                url: "/products",
                icons: [
                    {
                        src: "/images/since24.png",
                        sizes: "192x192",
                    },
                ],
            },
            {
                name: "Contact",
                short_name: "Contact",
                description: "Get in touch with us",
                url: "/contact",
                icons: [
                    {
                        src: "/images/since24.png",
                        sizes: "192x192",
                    },
                ],
            },
            {
                name: "About",
                short_name: "About",
                description: "Learn about @Since24",
                url: "/about",
                icons: [
                    {
                        src: "/images/since24.png",
                        sizes: "192x192",
                    },
                ],
            },
        ],
        related_applications: [],
        prefer_related_applications: false,
    }
}
