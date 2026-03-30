"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  productName?: string
}

export function QuoteModal({ open, onOpenChange, productName }: QuoteModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    product: productName || "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, product: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Add form type to distinguish from contact form
      const formData = {
        ...formState,
        formType: 'Quote Request',
        subject: `Quote Request - ${formState.product || 'General Inquiry'}`
      }

      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_QUOTE || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)

        // Reset form after 3 seconds and close modal
        setTimeout(() => {
          setIsSubmitted(false)
          setFormState({
            name: "",
            email: "",
            phone: "",
            product: "",
            message: "",
          })
          onOpenChange(false)
        }, 3000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const products = [
    "Solar Water Heater - Pressurized",
    "Solar Water Heater - Non-Pressurized",
    "Automatic Gate Opener",
    "Gate Barrier",
    "Air Conditioner",
    "Other/Not Sure",
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-gray-900">Request a Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will get back to you with a personalized quote.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-3 mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Quote Request Sent!</h3>
            <p className="text-gray-600">
              Thank you for your interest. We'll get back to you with a quote as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="product">Product of Interest</Label>
              <Select value={formState.product} onValueChange={handleSelectChange}>
                <SelectTrigger className="border-gray-300 focus:border-blue-600 focus:ring-blue-600">
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product} value={product}>
                      {product}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Details</Label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your specific requirements or questions"
                className="border-gray-300 focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Request Quote"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}