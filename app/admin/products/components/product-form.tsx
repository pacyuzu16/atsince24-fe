"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Upload, X, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"

interface WhyChooseReason {
  title: string
  description: string
}

interface ProductFormProps {
  initialData?: {
    id?: string
    name: string
    price: string
    description: string
    longDescription: string
    whyChoose: WhyChooseReason[]
    motivationalBanner: string
    comingSoon: boolean
    installationIncluded: boolean
    category: string
    specs: Record<string, string>
    useCases: string[]
  }
  isEditing?: boolean
}

export function ProductForm({ initialData, isEditing = false }: ProductFormProps) {
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    price: initialData?.price || "",
    description: initialData?.description || "",
    longDescription: initialData?.longDescription || "",
    motivationalBanner: initialData?.motivationalBanner || "",
    comingSoon: initialData?.comingSoon || false,
    installationIncluded: initialData?.installationIncluded !== false,
    category: initialData?.category || "",
  })

  const [whyChoose, setWhyChoose] = useState<WhyChooseReason[]>(
    initialData?.whyChoose || [
      { title: "", description: "" },
      { title: "", description: "" },
    ],
  )

  const [specs, setSpecs] = useState<Record<string, string>>(
    initialData?.specs || {
      "": "",
    },
  )

  const [useCases, setUseCases] = useState<string[]>(initialData?.useCases || [""])

  const [images, setImages] = useState<string[]>(
    initialData?.id ? [`/placeholder.svg?height=400&width=600&text=${initialData.name}`] : [],
  )

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
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

  // Handle "Why Choose" reasons
  const handleWhyChooseChange = (index: number, field: keyof WhyChooseReason, value: string) => {
    setWhyChoose((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const handleAddWhyChoose = () => {
    setWhyChoose((prev) => [...prev, { title: "", description: "" }])
  }

  const handleRemoveWhyChoose = (index: number) => {
    setWhyChoose((prev) => prev.filter((_, i) => i !== index))
  }

  // Handle specs
  const handleSpecChange = (oldKey: string, newKey: string, value: string) => {
    setSpecs((prev) => {
      const updated = { ...prev }
      if (oldKey !== newKey) {
        delete updated[oldKey]
      }
      updated[newKey] = value
      return updated
    })
  }

  const handleAddSpec = () => {
    setSpecs((prev) => ({ ...prev, "": "" }))
  }

  const handleRemoveSpec = (key: string) => {
    setSpecs((prev) => {
      const updated = { ...prev }
      delete updated[key]
      return updated
    })
  }

  // Handle use cases
  const handleUseCaseChange = (index: number, value: string) => {
    setUseCases((prev) => {
      const updated = [...prev]
      updated[index] = value
      return updated
    })
  }

  const handleAddUseCase = () => {
    setUseCases((prev) => [...prev, ""])
  }

  const handleRemoveUseCase = (index: number) => {
    setUseCases((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (whyChoose.some((reason) => !reason.title || !reason.description)) {
      toast({
        title: "Validation Error",
        description: "All 'Why Choose' reasons must have both a title and description",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    if (Object.entries(specs).some(([key, value]) => !key || !value)) {
      toast({
        title: "Validation Error",
        description: "All specifications must have both a name and value",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    if (useCases.some((useCase) => !useCase)) {
      toast({
        title: "Validation Error",
        description: "All use cases must have a value",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: isEditing ? "Product updated" : "Product added",
        description: isEditing
          ? "The product has been successfully updated"
          : "The product has been successfully added",
        duration: 3000,
      })
      router.push("/admin/products")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Button variant="ghost" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div>
          <h2 className="text-3xl font-light tracking-tight">{isEditing ? "Edit Product" : "Add New Product"}</h2>
          <p className="text-gray-500 mt-1">
            {isEditing ? "Update product information" : "Create a new product in your catalog"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Essential details about the product</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="RWF 0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solar">Solar Products</SelectItem>
                    <SelectItem value="gate">Gate Systems</SelectItem>
                    <SelectItem value="cooling">Cooling Systems</SelectItem>
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
                  rows={2}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="longDescription">Detailed Description</Label>
                <Textarea
                  id="longDescription"
                  name="longDescription"
                  value={formData.longDescription}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivationalBanner">Motivational Banner</Label>
                <Textarea
                  id="motivationalBanner"
                  name="motivationalBanner"
                  value={formData.motivationalBanner}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Add a motivational message to encourage customers"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose This Product</CardTitle>
              <CardDescription>Highlight the key benefits of this product</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {whyChoose.map((reason, index) => (
                <div key={index} className="border rounded-md p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Reason {index + 1}</h4>
                    {whyChoose.length > 1 && (
                      <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveWhyChoose(index)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`reason-title-${index}`}>Title</Label>
                    <Input
                      id={`reason-title-${index}`}
                      value={reason.title}
                      onChange={(e) => handleWhyChooseChange(index, "title", e.target.value)}
                      placeholder="e.g., Superior Efficiency"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`reason-description-${index}`}>Description</Label>
                    <Textarea
                      id={`reason-description-${index}`}
                      value={reason.description}
                      onChange={(e) => handleWhyChooseChange(index, "description", e.target.value)}
                      rows={2}
                      placeholder="Explain this benefit in detail"
                      required
                    />
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" className="w-full" onClick={handleAddWhyChoose}>
                <Plus className="h-4 w-4 mr-2" />
                Add Another Reason
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
              <CardDescription>Add technical details about the product</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(specs).map(([key, value], index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor={`spec-key-${index}`}>Specification</Label>
                    <Input
                      id={`spec-key-${index}`}
                      value={key}
                      onChange={(e) => handleSpecChange(key, e.target.value, value)}
                      placeholder="e.g., Energy Source"
                      required
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor={`spec-value-${index}`}>Value</Label>
                    <Input
                      id={`spec-value-${index}`}
                      value={value}
                      onChange={(e) => handleSpecChange(key, key, e.target.value)}
                      placeholder="e.g., Solar"
                      required
                    />
                  </div>
                  {Object.keys(specs).length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="mt-8"
                      onClick={() => handleRemoveSpec(key)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" className="w-full" onClick={handleAddSpec}>
                <Plus className="h-4 w-4 mr-2" />
                Add Another Specification
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use Cases</CardTitle>
              <CardDescription>Where can this product be used?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor={`use-case-${index}`}>Use Case {index + 1}</Label>
                    <Input
                      id={`use-case-${index}`}
                      value={useCase}
                      onChange={(e) => handleUseCaseChange(index, e.target.value)}
                      placeholder="e.g., Residential homes"
                      required
                    />
                  </div>
                  {useCases.length > 1 && (
                    <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveUseCase(index)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" className="w-full" onClick={handleAddUseCase}>
                <Plus className="h-4 w-4 mr-2" />
                Add Another Use Case
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
              <CardDescription>Upload images of the product</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Product image ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Remove image"
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
                Upload up to 6 images. First image will be used as the product thumbnail.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Settings</CardTitle>
              <CardDescription>Additional product configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="comingSoon">Coming Soon</Label>
                  <p className="text-sm text-gray-500">Mark this product as coming soon</p>
                </div>
                <Switch
                  id="comingSoon"
                  checked={formData.comingSoon}
                  onCheckedChange={(checked) => handleSwitchChange("comingSoon", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="installationIncluded">Installation Included</Label>
                  <p className="text-sm text-gray-500">Professional installation is included with this product</p>
                </div>
                <Switch
                  id="installationIncluded"
                  checked={formData.installationIncluded}
                  onCheckedChange={(checked) => handleSwitchChange("installationIncluded", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : isEditing ? "Save Changes" : "Save Product"}
          </Button>
        </div>
      </form>
    </div>
  )
}
