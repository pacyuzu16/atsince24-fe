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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

// Mock data for projects
const mockProjects = {
  "solar-installation-residence": {
    id: "solar-installation-residence",
    title: "Solar Water Heater Installation",
    client: "Johnson Residence",
    date: "2023-05-15",
    category: "residential",
    description: "Installation of a 200L pressurized solar water heater system for a residential property.",
    challenge:
      "The client needed a reliable hot water solution that would reduce energy costs and be environmentally friendly.",
    solution: "We installed a 200L pressurized solar water heater system with backup electric heating for cloudy days.",
    result: "The client now enjoys consistent hot water with a 70% reduction in water heating costs.",
  },
  "gate-automation-commercial": {
    id: "gate-automation-commercial",
    title: "Commercial Gate Automation",
    client: "Skyline Office Complex",
    date: "2023-07-22",
    category: "commercial",
    description: "Installation of automated sliding gates with access control for a commercial office complex.",
    challenge:
      "The office complex needed to improve security and manage access for employees and visitors efficiently.",
    solution: "We installed automated sliding gates with card readers, intercom, and remote control access.",
    result: "Improved security and streamlined access management for the office complex.",
  },
  "multi-unit-solar": {
    id: "multi-unit-solar",
    title: "Multi-Unit Solar Heating Solution",
    client: "Sunrise Apartments",
    date: "2023-09-10",
    category: "multi-unit",
    description:
      "Design and installation of a centralized solar water heating system for a 12-unit apartment building.",
    challenge: "The apartment building needed a cost-effective hot water solution for all units.",
    solution: "We designed and installed a centralized solar water heating system with individual unit controls.",
    result: "Reduced utility costs for all tenants and increased property value for the owner.",
  },
}

export default function EditProjectPage() {
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()
  const projectId = params.id as keyof typeof mockProjects

  const [formData, setFormData] = useState({
    title: "",
    client: "",
    date: "",
    category: "",
    description: "",
    challenge: "",
    solution: "",
    result: "",
  })

  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    if (projectId && mockProjects[projectId]) {
      const project = mockProjects[projectId]
      setFormData({
        title: project.title,
        client: project.client,
        date: project.date,
        category: project.category,
        description: project.description,
        challenge: project.challenge || "",
        solution: project.solution || "",
        result: project.result || "",
      })

      // Mock images
      setImages([`/placeholder.svg?height=400&width=600&text=${project.title} 1`])
      setIsLoading(false)
    } else {
      toast({
        title: "Project not found",
        description: "The project you're trying to edit doesn't exist",
        variant: "destructive",
      })
      router.push("/admin/projects")
    }
  }, [projectId, router, toast])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddImage = () => {
    // In a real app, this would handle file uploads
    // For now, we'll just add a placeholder
    setImages((prev) => [...prev, `/placeholder.svg?height=400&width=600&text=Image ${prev.length + 1}`])
  }

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Project updated",
        description: "The project has been successfully updated",
        duration: 3000,
      })
      router.push("/admin/projects")
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
          <h2 className="text-3xl font-light tracking-tight">Edit Project</h2>
          <p className="text-gray-500 mt-1">Update project information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
              <CardDescription>Basic information about the project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title</Label>
                <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="client">Client Name</Label>
                <Input id="client" name="client" value={formData.client} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Completion Date</Label>
                <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="multi-unit">Multi-Unit Residential</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Images</CardTitle>
                <CardDescription>Upload images of the project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Project image ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <button
                        type="button"
                        title="Remove Image"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="aspect-square bg-gray-100 rounded-md flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors"
                  >
                    <Upload className="h-6 w-6 text-gray-400 mb-1" />
                    <span className="text-sm text-gray-500">Add Image</span>
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  Upload up to 6 images. First image will be used as the project thumbnail.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Detailed information about the project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="challenge">Challenge</Label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe the challenge or problem that needed to be solved"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solution">Solution</Label>
                  <Textarea
                    id="solution"
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe the solution implemented"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="result">Result</Label>
                  <Textarea
                    id="result"
                    name="result"
                    value={formData.result}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe the outcome and benefits"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
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
