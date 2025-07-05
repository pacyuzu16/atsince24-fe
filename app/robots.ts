import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/admin/",
                    "/staff-login/",
                    "/api/",
                    "/_next/",
                    "/private/",
                    "/*.json$",
                    "/*.xml$",
                ],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: [
                    "/admin/",
                    "/staff-login/",
                    "/api/",
                    "/_next/",
                    "/private/",
                ],
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: [
                    "/admin/",
                    "/staff-login/",
                    "/api/",
                    "/_next/",
                    "/private/",
                ],
            },
        ],
        sitemap: "https://atsince24.com/sitemap.xml",
        host: "https://atsince24.com",
    }
}
