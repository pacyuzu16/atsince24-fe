"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Package,
  FileText,
  Users,
  Quote,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  MessageSquare,
  Star,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null)

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="space-y-8 z-99">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-light tracking-tight">Welcome back, {user?.username || "Admin"}</h2>
          <p className="text-gray-500 mt-1">Here's what's happening with your business today.</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="/admin/products/add">
              <Package className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
            <Link href="/admin/projects/add">
              <FileText className="mr-2 h-4 w-4" />
              Add Project
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <Card className="xl:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">4</div>
              <div className="p-2 bg-green-100 rounded-full">
                <Package className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">25%</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link href="/admin/products">
                <span>View Products</span>
                <ArrowRight className="ml-auto h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">3</div>
              <div className="p-2 bg-blue-100 rounded-full">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">10%</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link href="/admin/projects">
                <span>View Projects</span>
                <ArrowRight className="ml-auto h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">2</div>
              <div className="p-2 bg-purple-100 rounded-full">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-gray-500">No change</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link href="/admin/team">
                <span>View Team</span>
                <ArrowRight className="ml-auto h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Testimonials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">3</div>
              <div className="p-2 bg-yellow-100 rounded-full">
                <Star className="h-5 w-5 text-yellow-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">33%</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link href="/admin/testimonials">
                <span>View Testimonials</span>
                <ArrowRight className="ml-auto h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">3</div>
              <div className="p-2 bg-indigo-100 rounded-full">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">15%</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link href="/admin/messages">
                <span>View Messages</span>
                <ArrowRight className="ml-auto h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Quote Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">3</div>
              <div className="p-2 bg-amber-100 rounded-full">
                <Quote className="h-5 w-5 text-amber-600" />
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-500 font-medium">5%</span>
              <span className="text-gray-500 ml-1">from last month</span>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" asChild className="w-full justify-start">
              <Link href="/admin/quotes">
                <span>View Quote Requests</span>
                <ArrowRight className="ml-auto h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>Latest messages from the contact form</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm text-gray-500 line-clamp-1">Solar Water Heater Inquiry</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/admin/messages">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Jane Smith</h4>
                    <p className="text-sm text-gray-500 line-clamp-1">Automatic Gate Issue</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/admin/messages">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/admin/messages">View All Messages</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Quote Requests</CardTitle>
            <CardDescription>Latest quote requests from customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                    <Quote className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Brown</h4>
                    <p className="text-sm text-gray-500 line-clamp-1">Solar Water Heater - Pressurized (200L)</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/admin/quotes">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                    <Quote className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Emily Wilson</h4>
                    <p className="text-sm text-gray-500 line-clamp-1">Automatic Gate Opener</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/admin/quotes">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/admin/quotes">View All Quote Requests</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
