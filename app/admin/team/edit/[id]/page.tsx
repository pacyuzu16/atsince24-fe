"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { ArrowLeft, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

// Mock data for team members
const mockTeamMembers = {
  "member-1": {
    id: "member-1",
    name: "John Doe",
    position: "Founder & CEO",
    email: "john.doe@example.com",
    phone: "+250 789 123 456",
    bio: "John has over 15 years of experience in solar energy solutions and home automation systems.",
    image: "/placeholder.svg?height=200&width=200&text=JD",
  },
  "member-2": {
    id: "member-2",
    name: "Jane Smith",
    position: "Technical Director",
    email: "jane.smith@example.com",
    phone: "+250 789 456 789",
    bio: "Jane leads our technical team and oversees all installations and technical operations.",
    image: "/placeholder.svg?height=200&width=200&text=JS",
  },
}

export default function EditTeamMemberPage() {
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()
  const memberId = params.id as string

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    bio: "",
  })

  const [image, setImage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    if (memberId && mockTeamMembers[memberId]) {
      const member = mockTeamMembers[memberId]
      setFormData({
        name: member.name,
        position: member.position,
        email: member.email || "",
        phone: member.phone || "",
        bio: member.bio,
      })
      setImage(member.image)
      setIsLoading(false)
    } else {
      toast({
        title: "Team member not found",
        description: "The team member you're trying to edit doesn't exist",
        variant: "destructive",
      })
      router.push("/admin/team")
    }
  }, [memberId, router, toast])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddImage = () => {
    // In a real app, this would handle file uploads
    // For now, we'll just add a placeholder
    const initials = formData.name
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase()

    setImage(`/placeholder.svg?height=400&width=400&text=${initials || "Photo"}`)
  }

  const handleRemoveImage = () => {
    setImage(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Team member updated",
        description: "The team member has been successfully updated",
        duration: 3000,
      })
      router.push("/admin/team")
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
          <h2 className="text-3xl font-light tracking-tight">Edit Team Member</h2>
          <p className="text-gray-500 mt-1">Update team member information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Basic information about the team member</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position/Title</Label>
                <Input id="position" name="position" value={formData.position} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio/Description</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Brief description about the team member"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile Photo</CardTitle>
              <CardDescription>Upload a profile photo of the team member</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center space-y-4">
                {image ? (
                  <div className="relative group">
                    <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100">
                      <img src={image || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="w-48 h-48 rounded-full bg-gray-100 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors"
                  >
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Upload Photo</span>
                  </button>
                )}
                <p className="text-sm text-gray-500 text-center max-w-xs">
                  Upload a professional photo of the team member. Square images work best.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

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
