"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    company: "Residential Client",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The solar water heater from @since24 has been a game-changer for our household. The installation was quick and professional, and we've seen a significant reduction in our energy bills.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Manager",
    company: "Skyline Properties",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "We've installed @since24's automatic gate systems across multiple properties. The reliability and quality of their products, combined with their excellent after-sales service, make them our go-to provider.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Director",
    company: "Green Living Spaces",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "As a company focused on eco-friendly living solutions, we're impressed with @since24's commitment to energy efficiency. Their products align perfectly with our sustainability goals.",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

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
    <section className="py-20 bg-white animate-on-scroll">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-dark mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with @since24.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto bg-white rounded-lg p-8 md:p-12 shadow-lg">
          <Quote className="absolute top-8 left-8 h-12 w-12 text-brand-blue opacity-20" />

          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-opacity duration-500",
                  index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0",
                )}
              >
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-brand-dark font-medium">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 right-8 flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-brand-dark" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-brand-dark" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentTestimonial ? "bg-brand-blue w-6" : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
