"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { QuoteModal } from "./quote-modal"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Our Work", href: "/our-work" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
        )}
      >
        <div className="container px-8 mx-auto flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <Image src="/images/logo.png" alt="@since24 Logo" width={150} height={50} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-black tracking-tight transition-colors",
                  isScrolled
                    ? pathname === link.href
                      ? "text-brand-blue"
                      : "text-brand-dark/80 hover:text-brand-blue"
                    : pathname === link.href
                      ? "text-white font-bold"
                      : "text-white hover:text-white/80",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="default"
              className="ml-4 bg-brand-blue text-white hover:bg-brand-blue/90"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-brand-dark" />
            ) : (
              <Menu className="h-6 w-6 text-brand-dark" />
            )}
          </button>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white p-6 shadow-xl transform transition-transform ease-in-out duration-300 flex flex-col justify-start",
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="mt-16 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium tracking-tight transition-colors hover:text-brand-blue",
                    pathname === link.href ? "text-brand-blue" : "text-brand-dark/80",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="default"
                className="mt-4 w-full bg-brand-blue text-white hover:bg-brand-blue/90"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsQuoteModalOpen(true)
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </header>

      <QuoteModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </>
  )
}
