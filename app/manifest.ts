import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "@Since24 - The Art of Simple Life",
        short_name: "Since24",
        description: "Premium electronic appliances and installations for a simpler life",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#0a1f56",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/images/since24.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/images/logo.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    }
}
