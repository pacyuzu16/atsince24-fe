"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  question: z.string().min(5, {
    message: "Question must be at least 5 characters.",
  }),
  answer: z.string().min(10, {
    message: "Answer must be at least 10 characters.",
  }),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
})

// Mock data for FAQs
const faqs = [
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
]

export default function EditFAQPage({ params }: { params: { id: string } }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()
  const { id } = params

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      answer: "",
      category: "",
    },
  })

  useEffect(() => {
    // Simulate API call to fetch FAQ data
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Find the FAQ with the matching ID
        const faq = faqs.find((f) => f.id === id)

        if (faq) {
          form.reset({
            question: faq.question,
            answer: faq.answer,
            category: faq.category,
          })
        } else {
          toast({
            title: "Error",
            description: "FAQ not found.",
            variant: "destructive",
          })
          router.push("/admin/faqs")
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load FAQ data.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id, form, router, toast])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "FAQ Updated",
        description: "The FAQ has been successfully updated.",
      })

      router.push("/admin/faqs")
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error updating the FAQ. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="h-10 w-10 mr-4 bg-gray-200 rounded-md animate-pulse" />
          <div>
            <div className="h-8 w-64 bg-gray-200 rounded-md animate-pulse mb-2" />
            <div className="h-4 w-96 bg-gray-200 rounded-md animate-pulse" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse mb-4" />
          <div className="h-4 w-64 bg-gray-200 rounded-md animate-pulse mb-8" />

          <div className="space-y-8">
            <div>
              <div className="h-5 w-20 bg-gray-200 rounded-md animate-pulse mb-2" />
              <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse" />
            </div>

            <div>
              <div className="h-5 w-20 bg-gray-200 rounded-md animate-pulse mb-2" />
              <div className="h-32 w-full bg-gray-200 rounded-md animate-pulse" />
            </div>

            <div>
              <div className="h-5 w-20 bg-gray-200 rounded-md animate-pulse mb-2" />
              <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse" />
            </div>

            <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse mt-6" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Link href="/admin/faqs" className="mr-4">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Edit FAQ</h1>
          <p className="text-muted-foreground">Update the details of this FAQ.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>FAQ Details</CardTitle>
          <CardDescription>Edit the details for this FAQ.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>The question that will be displayed to users.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Answer</FormLabel>
                    <FormControl>
                      <Textarea className="min-h-32" {...field} />
                    </FormControl>
                    <FormDescription>The answer to the question.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="General">General</SelectItem>
                        <SelectItem value="Services">Services</SelectItem>
                        <SelectItem value="Pricing">Pricing</SelectItem>
                        <SelectItem value="Installation">Installation</SelectItem>
                        <SelectItem value="Support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>The category this FAQ belongs to.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="px-0 pt-6">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Updating..." : "Update FAQ"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
