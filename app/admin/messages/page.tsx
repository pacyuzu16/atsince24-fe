"use client"

import { useState } from "react"
import { Search, Trash2, MoreHorizontal, Mail, CheckCircle, Eye } from "lucide-react"
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

interface Message {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: string
  read: boolean
}

export default function MessagesPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Mock data - in a real app, this would come from an API
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "msg-1",
      name: "John Doe",
      email: "john.doe@example.com",
      subject: "Solar Water Heater Inquiry",
      message:
        "I'm interested in installing a solar water heater for my home. Could you provide more information about the options available and the installation process? Also, I'd like to know about the maintenance requirements and warranty.",
      date: "2023-11-15T09:30:00",
      read: true,
    },
    {
      id: "msg-2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      subject: "Automatic Gate Issue",
      message:
        "I recently purchased an automatic gate from your company, but I'm having some issues with the remote control. Sometimes it doesn't respond, and I have to press the button multiple times. Could someone help me troubleshoot this issue?",
      date: "2023-11-18T14:45:00",
      read: false,
    },
    {
      id: "msg-3",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      subject: "Quote Request for Office Building",
      message:
        "I'm the facility manager for a commercial office building, and we're looking to upgrade our security systems. We're interested in gate barriers and possibly some automated doors. Could you provide a quote for this project?",
      date: "2023-11-20T11:15:00",
      read: false,
    },
  ])

  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.message.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      setMessages(messages.filter((message) => message.id !== id))
      toast({
        title: "Message deleted",
        description: "The message has been successfully deleted",
        duration: 3000,
      })
    }
  }

  const handleMarkAsRead = (id: string) => {
    setMessages(messages.map((message) => (message.id === id ? { ...message, read: true } : message)))
    toast({
      title: "Message marked as read",
      description: "The message has been marked as read",
      duration: 3000,
    })
  }

  const handleMarkAsUnread = (id: string) => {
    setMessages(messages.map((message) => (message.id === id ? { ...message, read: false } : message)))
    toast({
      title: "Message marked as unread",
      description: "The message has been marked as unread",
      duration: 3000,
    })
  }

  const openMessageDialog = (message: Message) => {
    setSelectedMessage(message)
    setIsDialogOpen(true)

    // Mark as read when opened
    if (!message.read) {
      handleMarkAsRead(message.id)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-light tracking-tight">Contact Messages</h2>
        <p className="text-gray-500 mt-1">Manage messages from the contact form</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Messages</CardTitle>
              <CardDescription>
                {filteredMessages.length} message{filteredMessages.length !== 1 ? "s" : ""} in total
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search messages..."
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
                    <th className="h-12 px-4 text-left font-medium text-gray-500">From</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Subject</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500 hidden md:table-cell">Date</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500 hidden md:table-cell">Status</th>
                    <th className="h-12 px-4 text-right font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMessages.length > 0 ? (
                    filteredMessages.map((message) => (
                      <tr
                        key={message.id}
                        className={`border-b transition-colors hover:bg-gray-50 ${!message.read ? "bg-blue-50" : ""}`}
                      >
                        <td className="p-4 align-middle font-medium">
                          {message.name}
                          <div className="text-xs text-gray-500">{message.email}</div>
                        </td>
                        <td className="p-4 align-middle">
                          <button
                            onClick={() => openMessageDialog(message)}
                            className="text-left hover:underline focus:outline-none"
                          >
                            {message.subject}
                          </button>
                        </td>
                        <td className="p-4 align-middle hidden md:table-cell">
                          {new Date(message.date).toLocaleDateString()}
                        </td>
                        <td className="p-4 align-middle hidden md:table-cell">
                          {message.read ? (
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              <CheckCircle className="mr-1 h-3.5 w-3.5" />
                              Read
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                              <Mail className="mr-1 h-3.5 w-3.5" />
                              New
                            </span>
                          )}
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
                              <DropdownMenuItem onClick={() => openMessageDialog(message)}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Message
                              </DropdownMenuItem>
                              {message.read ? (
                                <DropdownMenuItem onClick={() => handleMarkAsUnread(message.id)}>
                                  <Mail className="mr-2 h-4 w-4" />
                                  Mark as Unread
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem onClick={() => handleMarkAsRead(message.id)}>
                                  <CheckCircle className="mr-2 h-4 w-4" />
                                  Mark as Read
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => handleDelete(message.id)}>
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
                        No messages found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Message Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedMessage && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedMessage.subject}</DialogTitle>
              <DialogDescription>
                From: {selectedMessage.name} ({selectedMessage.email})
                <br />
                Date: {new Date(selectedMessage.date).toLocaleString()}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 p-4 bg-gray-50 rounded-md whitespace-pre-wrap">{selectedMessage.message}</div>
            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  handleDelete(selectedMessage.id)
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
