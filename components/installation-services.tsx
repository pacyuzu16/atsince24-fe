"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, PenToolIcon as Tool, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Tool className="h-10 w-10 text-brand-blue" />,
    title: "Professional Installation",
    description: "Our certified technicians ensure proper setup and configuration of all our products.",
  },
  {
    icon: <Shield className="h-10 w-10 text-brand-blue" />,
    title: "Warranty Coverage",
    description: "All installations are covered by our comprehensive warranty for your peace of mind.",
  },
  {
    icon: <Clock className="h-10 w-10 text-brand-blue" />,
    title: "Timely Service",
    description: "We schedule installations at your convenience and complete them efficiently.",
  },
  {
    icon: <Award className="h-10 w-10 text-brand-blue" />,
    title: "After-Sales Support",
    description: "Our team provides ongoing support and maintenance services after installation.",
  },
]

export default function InstallationServices() {
  const servicesRef = useRef<HTMLDivElement>(null)

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
    <section className="py-20 bg-gray-50" ref={servicesRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-dark mb-4">
            Professional Installation Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All our products come with professional installation by our certified technicians, ensuring optimal
            performance and longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="animate-on-scroll">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/ddlhho2lk/image/upload/v1750194472/%40since24/sijmu9pbbv16icl1xe7e.png"
                alt="Professional Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center animate-on-scroll">
            <h3 className="text-2xl font-medium text-brand-dark mb-4">Expert Installation Included</h3>
            <p className="text-gray-600 mb-6">
              At @since24, we believe that proper installation is crucial for the optimal performance of our products.
              That's why we include professional installation with every purchase, performed by our team of certified
              technicians.
            </p>
            <p className="text-gray-600 mb-6">
              Our installation service covers everything from initial assessment to final testing, ensuring that your
              new product works perfectly from day one. We also provide a thorough demonstration of how to use and
              maintain your product.
            </p>
            <Button asChild className="self-start bg-brand-blue text-white hover:bg-brand-blue/90">
              <Link href="/contact" className="flex items-center">
                Schedule an Installation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn("bg-white rounded-lg p-6 text-center animate-on-scroll shadow-lg")}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center rounded-full bg-gray-100 p-3 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
