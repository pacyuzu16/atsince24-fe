"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  description: string
  image: string
  link: string
  price: string
  comingSoon?: boolean
}

const products: Product[] = [
  {
    id: "solar-water-heater",
    name: "Solar Water Heater",
    description: "Eco-friendly water heating solution with pressurized and non-pressurized options.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/solar-water-heater",
    price: "RWF 750,000",
  },
  {
    id: "automatic-gate-opener",
    name: "Automatic Gate Opener",
    description: "Smart gate solutions for enhanced security and convenience.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/automatic-gate-opener",
    price: "RWF 450,000",
  },
  {
    id: "gate-barrier",
    name: "Gate Barrier",
    description: "Advanced barrier systems for controlled access to your property.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/gate-barrier",
    price: "RWF 650,000",
    comingSoon: true,
  },
  {
    id: "air-conditioner",
    name: "Air Conditioner",
    description: "Energy-efficient cooling solutions for your home or office.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/air-conditioner",
    price: "RWF 550,000",
    comingSoon: true,
  },
]

export default function FeaturedProducts() {
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="py-20 bg-white" ref={productsRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-dark mb-4">Our Premium Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality electronic appliances designed to simplify your life while adding a touch
            of sophistication to your space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-lg animate-on-scroll",
                product.comingSoon ? "relative" : "",
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.comingSoon && (
                <div className="absolute top-4 right-4 z-10 bg-brand-coral text-white text-xs font-medium px-2 py-1 rounded">
                  Coming Soon
                </div>
              )}
              <div className="relative h-48">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-brand-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="text-brand-blue font-bold mb-4">{product.price}</p>
                <Link
                  href={product.link}
                  className={cn(
                    "inline-flex items-center text-sm font-medium",
                    product.comingSoon
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-brand-blue hover:text-brand-dark transition-colors",
                  )}
                  onClick={(e) => product.comingSoon && e.preventDefault()}
                >
                  {product.comingSoon ? "Notify Me" : "View Details"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button asChild className="bg-brand-blue text-white hover:bg-brand-blue/90">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
