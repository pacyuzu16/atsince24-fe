"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, MoreHorizontal } from "lucide-react"
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

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export default function FAQsPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [faqToDelete, setFaqToDelete] = useState<string | null>(null)

  // Mock data for FAQs
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: "1",
      question: "What services do you offer?",
      answer:
        "We offer a wide range of security and surveillance solutions including CCTV installation, access control systems, alarm systems, and more.",
      category: "Services",
    },
    {
      id: "2",
      question: "How much does a typical CCTV installation cost?",
      answer:
        "The cost varies depending on the number of cameras, type of system, and complexity of installation. Contact us for a free quote.",
      category: "Pricing",
    },
    {
      id: "3",
      question: "Do you offer maintenance services?",
      answer:
        "Yes, we offer regular maintenance and support services for all our installations to ensure your systems are always functioning optimally.",
      category: "Services",
    },
    {
      id: "4",
      question: "What areas do you service?",
      answer: "We currently service the greater Johannesburg area, including Pretoria and surrounding suburbs.",
      category: "General",
    },
    {
      id: "5",
      question: "How long does installation take?",
      answer:
        "Installation time varies based on the complexity of the project. A basic home system might take a day, while larger commercial projects can take several days.",
      category: "Installation",
    },
  ])

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const confirmDelete = (id: string) => {
    setFaqToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDelete = () => {
    if (faqToDelete) {
      setFaqs(faqs.filter((faq) => faq.id !== faqToDelete))
      toast({
        title: "FAQ deleted",
        description: "The FAQ has been successfully deleted",
        duration: 3000,
      })
      setDeleteDialogOpen(false)
      setFaqToDelete(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-light tracking-tight">FAQs</h2>
          <p className="text-gray-500 mt-1">Manage frequently asked questions</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
            <Link href="/admin/faqs/add">
              <Plus className="mr-2 h-4 w-4" />
              Add FAQ
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                {filteredFaqs.length} FAQ{filteredFaqs.length !== 1 ? "s" : ""} in total
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search FAQs..."
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
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Question</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500 hidden md:table-cell">Answer</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Category</th>
                    <th className="h-12 px-4 text-right font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq) => (
                      <tr key={faq.id} className="border-b transition-colors hover:bg-gray-50">
                        <td className="p-4 align-middle font-medium">{faq.question}</td>
                        <td className="p-4 align-middle hidden md:table-cell">
                          <span className="line-clamp-2">{faq.answer}</span>
                        </td>
                        <td className="p-4 align-middle">{faq.category}</td>
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
                                <Link href={`/admin/faqs/edit/${faq.id}`}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => confirmDelete(faq.id)}>
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
                      <td colSpan={4} className="p-4 text-center text-gray-500">
                        No FAQs found
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
              Are you sure you want to delete this FAQ? This action cannot be undone.
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
