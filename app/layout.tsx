import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://atsince24.com"),
  title: {
    default: "@Since24 - The Art of Simple Life | Premium Electronic Appliances",
    template: "%s | Since24",
  },
  description:
    "Since24 provides premium electronic appliances and professional installation services including solar water heaters, automatic gate openers, and more for homes and businesses in Rwanda.",
  keywords: [
    "electronic appliances",
    "solar water heater",
    "automatic gate opener",
    "gate barrier",
    "air conditioner",
    "Rwanda",
    "installation services",
    "home automation",
  ],
  authors: [{ name: "@Since24", url: "https://atsince24.com" }],
  creator: "@Since24",
  publisher: "@Since24",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atsince24.com",
    title: "@Since24 - The Art of Simple Life | Premium Electronic Appliances",
    description: "Premium electronic appliances and installations for a simpler life in Rwanda",
    siteName: "@Since24",
    images: [
      {
        url: "/images/since24.png",
        width: 1200,
        height: 630,
        alt: "@Since24 - Premium electronic appliances",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "@Since24 - The Art of Simple Life",
    description: "Premium electronic appliances and installations for a simpler life",
    images: ["/images/since24.png"],
    creator: "@since24",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://atsince24.com",
    languages: {
      "en-US": "https://atsince24.com",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
