"use client"

import type React from "react"

import { useEffect } from "react"
import { Shield, Clock, Award, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Shield className="h-10 w-10 text-brand-gold" />,
    title: "Quality Assurance",
    description:
      "All our products undergo rigorous testing to ensure they meet the highest standards of quality and durability.",
  },
  {
    icon: <Clock className="h-10 w-10 text-brand-teal" />,
    title: "Timely Service",
    description:
      "We pride ourselves on prompt installations and responsive customer service whenever you need assistance.",
  },
  {
    icon: <Award className="h-10 w-10 text-brand-coral" />,
    title: "Expert Team",
    description: "Our technicians are certified professionals with years of experience in electronic installations.",
  },
  {
    icon: <Zap className="h-10 w-10 text-brand-accent" />,
    title: "Energy Efficient",
    description:
      "Our products are designed to be energy-efficient, helping you save on utility bills while reducing your carbon footprint.",
  },
]

export default function WhyChooseUs() {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-dark mb-4">Why Choose @since24</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to excellence in every aspect of our business, from product quality to customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn("bg-white rounded-lg p-8 text-center animate-on-scroll shadow-lg")}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center rounded-full bg-gray-100 p-3 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
