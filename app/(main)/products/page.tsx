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
  comingSoon?: boolean
  variants?: {
    name: string
    description: string
  }[]
}

const products: Product[] = [
  {
    id: "solar-water-heater",
    name: "Solar Water Heater",
    description: "Eco-friendly water heating solution with pressurized and non-pressurized options.",
    image: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1750194456/%40since24/mib2rxi2wgvnevhwsnry.jpg",
    link: "/products/solar-water-heater",
    variants: [
      {
        name: "Pressurized Solar Water Heater (150L)",
        description: "suitable for multi-story buildings. Provides consistent water flow and maintains pressure throughout the plumbing system.",
      },
      {
        name: "Pressurized Solar Water Heater (200L)",
        description: "ideal for larger households. Provides consistent water flow and maintains pressure throughout the plumbing system.",
      },
      {
        name: "Pressurized Solar Water Heater (300L)",
        description: "perfect for commercial use or large families. Provides consistent water flow and maintains pressure throughout the plumbing system.",
      },
      {
        name: "Non-Pressurized Solar Water Heater (150L)",
        description: "best for single-story homes. More affordable and easier to install, but requires tank to be positioned above usage points.",
      },
      {
        name: "Non-Pressurized Solar Water Heater (200L)",
        description: "suitable for medium households. More affordable and easier to install, but requires tank to be positioned above usage points.",
      },
      {
        name: "Non-Pressurized Solar Water Heater (300L)",
        description: "ideal for larger families. More affordable and easier to install, but requires tank to be positioned above usage points.",
      },
    ],
  },
  {
    id: "automatic-gate-opener",
    name: "Automatic Gate Opener",
    description: "Smart gate solutions for enhanced security and convenience.",
    image: "https://res.cloudinary.com/ddlhho2lk/image/upload/c_pad,ar_16:9/v1751200214/%40since24/mvcomqc5ife4jp6yt4eo.jpg",
    link: "/products/automatic-gate-opener",
  },
  {
    id: "gate-barrier",
    name: "Gate Barrier",
    description: "Advanced barrier systems for controlled access to your property.",
    image: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751224062/%40since24/qgpcjltuwjmhk4nrm56p.jpg",
    link: "/products/gate-barrier",
  },
  {
    id: "air-conditioner",
    name: "Air Conditioner",
    description: "Energy-efficient cooling solutions for your home or office.",
    image: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751224403/%40since24/tyhxh3xfrmurxb7rexhz.webp",
    link: "/products/air-conditioner",
  },
  {
    id: "solar-panel",
    name: "Solar Panel",
    description: "Harness solar energy to power your home or business.",
    image: "https://res.cloudinary.com/ddlhho2lk/image/upload/v1751224405/%40since24/wggpmnhx2i1d1v2cklxj.jpg",
    link: "/products/solar-panel",
    comingSoon: true,
  },

]

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4

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
          <div className="space-y-12">
            {/* First product - full width */}
            {currentProducts.length > 0 && (
              <div
                className={cn("bg-white rounded-lg overflow-hidden shadow-lg", currentProducts[0].comingSoon ? "relative" : "")}
              >
                {currentProducts[0].comingSoon && (
                  <div className="absolute top-4 right-4 z-10 bg-brand-dark text-red-500 text-xs font-medium px-2 py-1 rounded">
                    Coming Soon !
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image src={currentProducts[0].image || "/placeholder.svg"} alt={currentProducts[0].name} fill className="object-fill h-full w-full" />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-medium text-brand-dark mb-2">{currentProducts[0].name}</h2>
                    <p className="text-gray-600 mb-6">{currentProducts[0].description}</p>

                    {currentProducts[0].variants && (
                      <div className="mb-6">
                        <h3 className="text-lg font-medium text-brand-dark mb-3">Available Variants</h3>
                        <ul className="space-y-3">
                          {currentProducts[0].variants.map((variant, index) => (
                            <li key={index} className="bg-gray-50 rounded p-3">
                              <div className="flex justify-between items-center mb-1">
                                <h4 className="text-brand-dark font-medium">{variant.name}</h4>
                              </div>
                              <p className="text-gray-600 text-sm">{variant.description}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link
                      href={currentProducts[0].link}
                      className={cn(
                        "inline-flex items-center text-sm font-medium",
                        currentProducts[0].comingSoon
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-brand-blue hover:text-brand-dark transition-colors",
                      )}
                      onClick={(e) => currentProducts[0].comingSoon && e.preventDefault()}
                    >
                      {currentProducts[0].comingSoon ? "Notify Me When Available" : "View Product Details"}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining products - 2 columns */}
            {currentProducts.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentProducts.slice(1).map((product) => (
                  <div
                    key={product.id}
                    className={cn("bg-white rounded-lg overflow-hidden shadow-lg", product.comingSoon ? "relative" : "")}
                  >
                    {product.comingSoon && (
                      <div className="absolute top-4 right-4 z-10 bg-brand-dark text-red-500 text-xs font-medium px-2 py-1 rounded">
                        Coming Soon !
                      </div>
                    )}
                    <div className="relative h-48">
                      <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover h-full w-full" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-medium text-brand-dark mb-2">{product.name}</h2>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

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
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <Button
                    key={number}
                    variant={currentPage === number ? "default" : "outline"}
                    size="sm"
                    onClick={() => paginate(number)}
                    className={cn(
                      "w-10 h-10 p-0 rounded-full",
                      currentPage === number ? "bg-brand-blue text-white" : "text-gray-600"
                    )}
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
                className="flex items-center rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
