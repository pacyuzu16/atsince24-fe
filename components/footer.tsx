import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-blue pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src="/images/logo.png" alt="@since24 Logo" width={180} height={60} className="h-12 w-auto" />
            <p className="text-white/70 text-sm leading-relaxed">
              The art of Simple Life. Premium electronic appliances and installations designed to simplify your everyday
              living.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/70 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-white/70 hover:text-white transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="/staff-login" className="text-white/70 hover:text-white transition-colors text-sm">
                  Admin
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/solar-water-heater"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Solar Water Heater
                </Link>
              </li>
              <li>
                <Link
                  href="/products/automatic-gate-opener"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Automatic Gate Opener
                </Link>
              </li>
              <li>
                <Link
                  href="/products/gate-barrier"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Gate Barrier
                </Link>
              </li>
              <li>
                <Link
                  href="/products/air-conditioner"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Air Conditioner
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center md:justify-start">
                <MapPin size={18} className="text-white/70 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm"> Kigali , RWANDA </span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="text-white/70 mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors text-sm">
                  +250 788 825 011
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail size={18} className="text-white/70 mr-2 flex-shrink-0" />
                <a href="mailto:info@since24.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  info@since24.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/50 text-xs">© {new Date().getFullYear()} @since24. All rights reserved.</p>
          <p className="text-white/40 text-xs mt-2">
            Website designed & developed by{" "}
            <a
              href="https://www.michelvainqueur.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-white/70 transition-colors"
            >
              Vainqueur
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
