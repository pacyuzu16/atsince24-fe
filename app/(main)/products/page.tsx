"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  description: string
  image: string
  link: string
  price: string
  comingSoon?: boolean
  variants?: {
    name: string
    description: string
    price: string
  }[]
}

const products: Product[] = [
  {
    id: "solar-water-heater",
    name: "Solar Water Heater",
    description: "Eco-friendly water heating solution with pressurized and non-pressurized options.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/solar-water-heater",
    price: "Starting at RWF 750,000",
    variants: [
      {
        name: "Pressurized Solar Water Heater (100L)",
        description: "Ideal for regions with varying water pressure or cold climates.",
        price: "RWF 750,000",
      },
      {
        name: "Pressurized Solar Water Heater (200L)",
        description: "Ideal for regions with varying water pressure or cold climates.",
        price: "RWF 1,100,000",
      },
      {
        name: "Non-Pressurized Solar Water Heater (100L)",
        description: "Perfect for warmer regions with consistent water supply.",
        price: "RWF 600,000",
      },
      {
        name: "Non-Pressurized Solar Water Heater (200L)",
        description: "Perfect for warmer regions with consistent water supply.",
        price: "RWF 850,000",
      },
    ],
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
  {
    id: "solar-panel",
    name: "Solar Panel",
    description: "Harness solar energy to power your home or business.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/solar-panel",
    price: "RWF 850,000",
    comingSoon: true,
  },
  {
    id: "security-camera",
    name: "Security Camera System",
    description: "Advanced surveillance solutions for your property.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/products/security-camera",
    price: "RWF 350,000",
    comingSoon: true,
  },
]

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 3

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(products.length / productsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-[#08519c] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">Our Products</h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Discover our range of premium electronic appliances designed to enhance your lifestyle with innovative
            technology and elegant design.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className={cn("bg-white rounded-lg overflow-hidden shadow-lg", product.comingSoon ? "relative" : "")}
              >
                {product.comingSoon && (
                  <div className="absolute top-4 right-4 z-10 bg-brand-coral text-white text-xs font-medium px-2 py-1 rounded">
                    Coming Soon
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-medium text-brand-dark mb-2">{product.name}</h2>
                    <p className="text-brand-blue font-bold mb-4">{product.price}</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    {product.variants && (
                      <div className="mb-6">
                        <h3 className="text-lg font-medium text-brand-dark mb-3">Available Variants</h3>
                        <ul className="space-y-3">
                          {product.variants.map((variant, index) => (
                            <li key={index} className="bg-gray-50 rounded p-3">
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="text-brand-dark font-medium">{variant.name}</h4>
                                <span className="text-brand-blue font-bold">{variant.price}</span>
                              </div>
                              <p className="text-gray-600 text-sm">{variant.description}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

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
                      {product.comingSoon ? "Notify Me When Available" : "View Product Details"}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Prev
              </Button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <Button
                    key={number}
                    variant={currentPage === number ? "default" : "outline"}
                    size="sm"
                    onClick={() => paginate(number)}
                    className={cn("w-8 h-8 p-0", currentPage === number ? "bg-brand-blue text-white" : "text-gray-600")}
                  >
                    {number}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
