import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import CountdownFinal from "@/components/countdown-final"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="bg-white text-brand-dark min-h-screen">
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
       <CountdownFinal />
      {/* <WhatsAppButton /> */}
      {/* <ScrollToTop /> */}
    </div>
  )
}
