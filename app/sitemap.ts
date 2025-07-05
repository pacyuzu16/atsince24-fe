import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://atsince24.com"
    const currentDate = new Date()

    // Main pages with optimized priorities and change frequencies
    const routes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/our-work`,
            lastModified: currentDate,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
    ]

    // Product pages with high priority
    const products = [
        {
            url: `${baseUrl}/products/solar-water-heater`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/products/automatic-gate-opener`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/products/gate-barrier`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/products/air-conditioner`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/products/solar-panel`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
    ]

    // Additional important pages
    const additionalPages = [
        {
            url: `${baseUrl}/countdown`,
            lastModified: currentDate,
            changeFrequency: "daily" as const,
            priority: 0.6,
        },
    ]

    return [...routes, ...products, ...additionalPages]
}
