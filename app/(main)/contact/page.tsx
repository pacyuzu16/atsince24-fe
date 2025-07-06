"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { log } from "console"

interface FAQ {
  id: string
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: "installation-included",
    question: "Is installation included with your products?",
    answer:
      "Yes, professional installation is included with most of our products. Our certified technicians ensure proper setup and configuration for optimal performance.",
  },
  {
    id: "warranty",
    question: "What warranty do your products come with?",
    answer:
      "Our products typically come with a 3 year warranty, depending on the specific item. Extended warranty options are also available for purchase.",
  },
  {
    id: "service-areas",
    question: "Do you service areas outside of your main location?",
    answer:
      "Yes, we provide installation and service all over the country and outside the country in surrounding countries.",
  },
  {
    id: "solar-water-heater-maintenance",
    question: "How often does a solar water heater need maintenance?",
    answer:
      "We recommend an annual inspection of your solar water heater to ensure optimal performance. This includes checking the collector, storage tank, and all connections. Regular maintenance extends the lifespan of your system and maintains efficiency.",
  },
  {
    id: "gate-opener-power-outage",
    question: "Will my automatic gate opener work during a power outage?",
    answer:
      "Our automatic gate openers come with battery backup systems that allow continued operation during power outages. The backup typically provides enough power for several days of normal use.",
  },
  {
    id: "payment-options",
    question: "What payment options do you offer?",
    answer:
      "We accept all major credit cards, bank transfers, and cash payments. We also offer financing options for qualifying customers, allowing you to spread the cost over several months.",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFAQs, setExpandedFAQs] = useState<string[]>([])

  const toggleFAQ = (id: string) => {
    setExpandedFAQs((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_CONTACT || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-[#08519c] text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Have questions about our products or services? Reach out to our team and we'll be happy to assist you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-blue-600 text-white p-8 md:p-10">
                <h2 className="text-2xl font-medium mb-6 border-b border-white/20 pb-4">Contact Information</h2>

                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-white/80 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium mb-1">Our Location</h3>
                      <a
                        rel="noopener noreferrer" target="_blank"
                        href="https://maps.app.goo.gl/hEsZGnZxR8vy25if6"
                        className="text-white/70"
                      >
                        KN 8 Ave, Kigali - Muhima
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-white/80 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium mb-1">Phone</h3>
                      <p className="text-white/70">+250 788 825 011</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-white/80 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <p className="text-white/70">atsince24@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-white/80 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-medium mb-1">Business Hours</h3>
                      <p className="text-white/70">Monday - Saturday: 8:00 AM - 7:00 PM</p>
                      <p className="text-white/70">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2 p-8 md:p-10">
                <h2 className="text-2xl font-medium text-gray-900 mb-6 border-b border-gray-200 pb-4">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-4 mb-6">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-600 text-lg mb-8">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button
                      className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 text-lg"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-900 font-medium">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                          placeholder="Karangwa"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-900 font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                          placeholder="karangwa@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-900 font-medium">
                          Phone Number (Optional)
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                          placeholder="+250 788 123 456"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-900 font-medium">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                          placeholder="Product Inquiry"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-900 font-medium">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className={cn(
                        "w-full bg-blue-600 text-white hover:bg-blue-700 py-2.5 text-lg font-medium rounded-md",
                        isSubmitting && "opacity-70 cursor-not-allowed",
                      )}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    {expandedFAQs.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    )}
                  </button>

                  <div
                    className={cn(
                      "px-6 overflow-hidden transition-all duration-300",
                      expandedFAQs.includes(faq.id) ? "max-h-96 pb-6" : "max-h-0",
                    )}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}