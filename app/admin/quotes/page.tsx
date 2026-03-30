"use client"

import { useState } from "react"
import { Search, Trash2, MoreHorizontal, CheckCircle, XCircle, Eye } from "lucide-react"
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

interface Quote {
  id: string
  name: string
  email: string
  phone: string
  product: string
  message: string
  date: string
  status: "pending" | "contacted" | "completed"
}

export default function QuotesPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Mock data - in a real app, this would come from an API
  const [quotes, setQuotes] = useState<Quote[]>([
    {
      id: "quote-1",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+250 789 123 456",
      product: "Solar Water Heater - Pressurized (200L)",
      message:
        "I'm interested in getting a solar water heater installed at my home. I'd like to know more about the installation process and timeline.",
      date: "2023-11-10T10:15:00",
      status: "contacted",
    },
    {
      id: "quote-2",
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      phone: "+250 789 456 789",
      product: "Automatic Gate Opener",
      message:
        "I need an automatic gate opener for my residential property. Please provide a quote including installation.",
      date: "2023-11-15T14:30:00",
      status: "pending",
    },
    {
      id: "quote-3",
      name: "David Johnson",
      email: "david.johnson@example.com",
      phone: "+250 789 987 654",
      product: "Gate Barrier",
      message:
        "We're looking to install a gate barrier at our office entrance. We'd like to discuss options and get a quote.",
      date: "2023-11-18T09:45:00",
      status: "completed",
    },
  ])

  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.message.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this quote request?")) {
      setQuotes(quotes.filter((quote) => quote.id !== id))
      toast({
        title: "Quote request deleted",
        description: "The quote request has been successfully deleted",
        duration: 3000,
      })
    }
  }

  const handleUpdateStatus = (id: string, status: "pending" | "contacted" | "completed") => {
    setQuotes(quotes.map((quote) => (quote.id === id ? { ...quote, status } : quote)))

    const statusMessages = {
      pending: "marked as pending",
      contacted: "marked as contacted",
      completed: "marked as completed",
    }

    toast({
      title: "Status updated",
      description: `The quote request has been ${statusMessages[status]}`,
      duration: 3000,
    })
  }

  const openQuoteDialog = (quote: Quote) => {
    setSelectedQuote(quote)
    setIsDialogOpen(true)
  }

  const getStatusBadge = (status: "pending" | "contacted" | "completed") => {
    switch (status) {
      case "pending":
        return (
          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
            <XCircle className="mr-1 h-3.5 w-3.5" />
            Pending
          </span>
        )
      case "contacted":
        return (
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <CheckCircle className="mr-1 h-3.5 w-3.5" />
            Contacted
          </span>
        )
      case "completed":
        return (
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            <CheckCircle className="mr-1 h-3.5 w-3.5" />
            Completed
          </span>
        )
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-light tracking-tight">Quote Requests</h2>
        <p className="text-gray-500 mt-1">Manage quote requests from customers</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Quote Requests</CardTitle>
              <CardDescription>
                {filteredQuotes.length} request{filteredQuotes.length !== 1 ? "s" : ""} in total
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search quote requests..."
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
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Product</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500 hidden md:table-cell">Date</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Status</th>
                    <th className="h-12 px-4 text-right font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQuotes.length > 0 ? (
                    filteredQuotes.map((quote) => (
                      <tr
                        key={quote.id}
                        className={`border-b transition-colors hover:bg-gray-50 ${
                          quote.status === "pending" ? "bg-yellow-50" : ""
                        }`}
                      >
                        <td className="p-4 align-middle font-medium">
                          {quote.name}
                          <div className="text-xs text-gray-500">{quote.phone}</div>
                        </td>
                        <td className="p-4 align-middle">
                          <button
                            onClick={() => openQuoteDialog(quote)}
                            className="text-left hover:underline focus:outline-none"
                          >
                            {quote.product}
                          </button>
                        </td>
                        <td className="p-4 align-middle hidden md:table-cell">
                          {new Date(quote.date).toLocaleDateString()}
                        </td>
                        <td className="p-4 align-middle">{getStatusBadge(quote.status)}</td>
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
                              <DropdownMenuItem onClick={() => openQuoteDialog(quote)}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => handleUpdateStatus(quote.id, "pending")}>
                                <XCircle
                                  className={`mr-2 h-4 w-4 ${quote.status === "pending" ? "text-yellow-500" : ""}`}
                                />
                                <span className={quote.status === "pending" ? "font-medium" : ""}>Pending</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleUpdateStatus(quote.id, "contacted")}>
                                <CheckCircle
                                  className={`mr-2 h-4 w-4 ${quote.status === "contacted" ? "text-blue-500" : ""}`}
                                />
                                <span className={quote.status === "contacted" ? "font-medium" : ""}>Contacted</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleUpdateStatus(quote.id, "completed")}>
                                <CheckCircle
                                  className={`mr-2 h-4 w-4 ${quote.status === "completed" ? "text-green-500" : ""}`}
                                />
                                <span className={quote.status === "completed" ? "font-medium" : ""}>Completed</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(quote.id)}>
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
                        No quote requests found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quote Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedQuote && (
          <DialogContent className="sm:max-w-2xl max-w-[95vw] w-full overflow-y-auto max-h-[90vh]">
            <DialogHeader>
              <DialogTitle>Quote Request: {selectedQuote.product}</DialogTitle>
              <DialogDescription>Status: {getStatusBadge(selectedQuote.status)}</DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Customer Information</h4>
                  <div className="mt-1 p-3 bg-gray-50 rounded-md">
                    <p className="font-medium">{selectedQuote.name}</p>
                    <p className="text-sm">Email: {selectedQuote.email}</p>
                    <p className="text-sm">Phone: {selectedQuote.phone}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Request Details</h4>
                  <div className="mt-1 p-3 bg-gray-50 rounded-md">
                    <p className="font-medium">{selectedQuote.product}</p>
                    <p className="text-sm">Date: {new Date(selectedQuote.date).toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Message</h4>
                <div className="mt-1 p-3 bg-gray-50 rounded-md whitespace-pre-wrap">{selectedQuote.message}</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3 mt-4">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedQuote.status === "pending" ? "default" : "outline"}
                  onClick={() => {
                    handleUpdateStatus(selectedQuote.id, "pending")
                    setSelectedQuote({ ...selectedQuote, status: "pending" })
                  }}
                  className={`${selectedQuote.status === "pending" ? "bg-yellow-600 hover:bg-yellow-700" : ""} text-xs sm:text-sm`}
                  size="sm"
                >
                  Mark as Pending
                </Button>
                <Button
                  variant={selectedQuote.status === "contacted" ? "default" : "outline"}
                  onClick={() => {
                    handleUpdateStatus(selectedQuote.id, "contacted")
                    setSelectedQuote({ ...selectedQuote, status: "contacted" })
                  }}
                  className={`${selectedQuote.status === "contacted" ? "bg-blue-600 hover:bg-blue-700" : ""} text-xs sm:text-sm`}
                  size="sm"
                >
                  Mark as Contacted
                </Button>
                <Button
                  variant={selectedQuote.status === "completed" ? "default" : "outline"}
                  onClick={() => {
                    handleUpdateStatus(selectedQuote.id, "completed")
                    setSelectedQuote({ ...selectedQuote, status: "completed" })
                  }}
                  className={`${selectedQuote.status === "completed" ? "bg-green-600 hover:bg-green-700" : ""} text-xs sm:text-sm`}
                  size="sm"
                >
                  Mark as Completed
                </Button>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  handleDelete(selectedQuote.id)
                  setIsDialogOpen(false)
                }}
              >
                Delete
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
