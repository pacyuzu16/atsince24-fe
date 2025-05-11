"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, MoreHorizontal, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  rating: number
}

export default function TestimonialsPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [testimonialToDelete, setTestimonialToDelete] = useState<string | null>(null)

  // Mock data - in a real app, this would come from an API
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: "testimonial-1",
      name: "John Smith",
      position: "Homeowner",
      company: "",
      content:
        "The solar water heater has been a game-changer for our family. We've seen significant savings on our energy bills, and the installation team was professional and efficient.",
      rating: 5,
    },
    {
      id: "testimonial-2",
      name: "Sarah Johnson",
      position: "Property Manager",
      company: "Skyline Properties",
      content:
        "We've installed automatic gates in several of our properties, and the quality and reliability have been consistent. The after-sales service is also excellent.",
      rating: 4,
    },
    {
      id: "testimonial-3",
      name: "Michael Brown",
      position: "CEO",
      company: "Brown Enterprises",
      content:
        "The gate barrier system has significantly improved security at our office complex. The team was knowledgeable and provided excellent guidance throughout the process.",
      rating: 5,
    },
  ])

  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const confirmDelete = (id: string) => {
    setTestimonialToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDelete = () => {
    if (testimonialToDelete) {
      setTestimonials(testimonials.filter((testimonial) => testimonial.id !== testimonialToDelete))
      toast({
        title: "Testimonial deleted",
        description: "The testimonial has been successfully deleted",
        duration: 3000,
      })
      setDeleteDialogOpen(false)
      setTestimonialToDelete(null)
    }
  }

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-light tracking-tight">Testimonials</h2>
          <p className="text-gray-500 mt-1">Manage customer testimonials and reviews</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
            <Link href="/admin/testimonials/add">
              <Plus className="mr-2 h-4 w-4" />
              Add Testimonial
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Customer Testimonials</CardTitle>
              <CardDescription>
                {filteredTestimonials.length} testimonial{filteredTestimonials.length !== 1 ? "s" : ""} in total
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search testimonials..."
                className="pl-8 w-full md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Customer</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500 hidden md:table-cell">Position</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500 hidden md:table-cell">Rating</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Testimonial</th>
                    <th className="h-12 px-4 text-right font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTestimonials.length > 0 ? (
                    filteredTestimonials.map((testimonial) => (
                      <tr key={testimonial.id} className="border-b transition-colors hover:bg-gray-50">
                        <td className="p-4 align-middle font-medium">
                          {testimonial.name}
                          {testimonial.company && <div className="text-xs text-gray-500">{testimonial.company}</div>}
                        </td>
                        <td className="p-4 align-middle hidden md:table-cell">{testimonial.position}</td>
                        <td className="p-4 align-middle hidden md:table-cell">
                          <div className="flex">{renderStars(testimonial.rating)}</div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="line-clamp-2 max-w-xs">{testimonial.content}</div>
                        </td>
                        <td className="p-4 align-middle text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild>
                                <Link href={`/admin/testimonials/edit/${testimonial.id}`}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => confirmDelete(testimonial.id)}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-4 text-center text-gray-500">
                        No testimonials found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this testimonial? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
