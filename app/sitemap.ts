import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://atsince24.com"

    // Main pages
    const routes = ["", "/products", "/our-work", "/about", "/contact", "/staff-login"].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }))

    // Product pages
    const products = ["solar-water-heater", "automatic-gate-opener", "gate-barrier", "air-conditioner"].map(
        (product) => ({
            url: `${baseUrl}/products/${product}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        }),
    )

    return [...routes, ...products]
}
