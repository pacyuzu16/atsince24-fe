"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

// Mock data for testimonials
const mockTestimonials = {
  "testimonial-1": {
    id: "testimonial-1",
    name: "John Smith",
    position: "Homeowner",
    company: "",
    content:
      "The solar water heater has been a game-changer for our family. We've seen significant savings on our energy bills, and the installation team was professional and efficient.",
    rating: 5,
  },
  "testimonial-2": {
    id: "testimonial-2",
    name: "Sarah Johnson",
    position: "Property Manager",
    company: "Skyline Properties",
    content:
      "We've installed automatic gates in several of our properties, and the quality and reliability have been consistent. The after-sales service is also excellent.",
    rating: 4,
  },
  "testimonial-3": {
    id: "testimonial-3",
    name: "Michael Brown",
    position: "CEO",
    company: "Brown Enterprises",
    content:
      "The gate barrier system has significantly improved security at our office complex. The team was knowledgeable and provided excellent guidance throughout the process.",
    rating: 5,
  },
}

export default function EditTestimonialPage() {
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()
  const testimonialId = params.id as string

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    content: "",
    rating: 5,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    if (testimonialId && mockTestimonials[testimonialId]) {
      const testimonial = mockTestimonials[testimonialId]
      setFormData({
        name: testimonial.name,
        position: testimonial.position,
        company: testimonial.company || "",
        content: testimonial.content,
        rating: testimonial.rating,
      })
      setIsLoading(false)
    } else {
      toast({
        title: "Testimonial not found",
        description: "The testimonial you're trying to edit doesn't exist",
        variant: "destructive",
      })
      router.push("/admin/testimonials")
    }
  }, [testimonialId, router, toast])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Testimonial updated",
        description: "The testimonial has been successfully updated",
        duration: 3000,
      })
      router.push("/admin/testimonials")
    }, 1500)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="ghost" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h2 className="text-3xl font-light tracking-tight">Edit Testimonial</h2>
          <p className="text-gray-500 mt-1">Update testimonial information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Testimonial Information</CardTitle>
            <CardDescription>Information about the customer and their feedback</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Customer Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position/Title</Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g. Homeowner, CEO, etc."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name if applicable"
              />
            </div>

            <div className="space-y-2">
              <Label>Rating</Label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= formData.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Testimonial Content</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={5}
                placeholder="Enter the customer's testimonial here"
                required
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-end gap-4">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  )
}
