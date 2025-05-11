"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  LayoutDashboard,
  Package,
  FileText,
  Users,
  LogOut,
  Menu,
  X,
  MessageSquare,
  Quote,
  Star,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

interface AdminDashboardProps {
  children: React.ReactNode
}

function AdminDashboard({ children }: AdminDashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  const handleLogout = () => {
    // Set cookie for server-side auth check
    document.cookie = "isAuthenticated=false; path=/; max-age=0"

    // Also keep localStorage for client-side checks
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("user")

    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
      duration: 3000,
    })

    router.push("/staff-login")
  }

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <div className="min-h-screen z-99 bg-gray-100 flex flex-col">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="bg-white">
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform lg:translate-x-0 duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Link href="/admin" className="flex items-center">
              <Image src="/images/logo.png" alt="@since24 Logo" width={150} height={50} className="h-10 w-auto" />
            </Link>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/admin"
                  className={cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100",
                    isActive("/admin") &&
                      !isActive("/admin/products") &&
                      !isActive("/admin/projects") &&
                      !isActive("/admin/team") &&
                      !isActive("/admin/testimonials") &&
                      !isActive("/admin/messages") &&
                      !isActive("/admin/quotes") &&
                      !isActive("/admin/faqs") &&
                      "bg-gray-100 text-brand-blue font-medium",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <LayoutDashboard className="h-5 w-5 mr-3" />
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/products"
                  className={cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100",
                    isActive("/admin/products") && "bg-gray-100 text-brand-blue font-medium",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Package className="h-5 w-5 mr-3" />
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/projects"
                  className={cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100",
                    isActive("/admin/projects") && "bg-gray-100 text-brand-blue font-medium",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <FileText className="h-5 w-5 mr-3" />
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/team"
                  className={cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100",
                    isActive("/admin/team") && "bg-gray-100 text-brand-blue font-medium",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Users className="h-5 w-5 mr-3" />
                  Team Members
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/testimonials"
                  className={cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100",
                    isActive("/admin/testimonials") && "bg-gray-100 text-brand-blue font-medium",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Star className="h-5 w-5 mr-3" />
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/faqs"
                  className={cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100",
                    isActive("/admin/faqs") && "bg-gray-100 text-brand-blue font-medium",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <HelpCircle className="h-5 w-5 mr-3" />
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/messages"
                  className={cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100",
                    isActive("/admin/messages") && "bg-gray-100 text-brand-blue font-medium",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  Contact Messages
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/quotes"
                  className={cn(
                    "flex items-center px-4 py-3 text-gray-700 rounded-md hover:bg-gray-100",
                    isActive("/admin/quotes") && "bg-gray-100 text-brand-blue font-medium",
                  )}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Quote className="h-5 w-5 mr-3" />
                  Quote Requests
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t">
            <Button variant="outline" className="w-full flex items-center justify-center" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Admin Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-medium text-brand-dark">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Link href="/" target="_blank" className="text-sm text-gray-500 hover:text-brand-blue">
                View Website
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{children}</div>
        </main>

        {/* Admin Footer */}
        <footer className="bg-white border-t py-4 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} @since24 Admin Dashboard. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default AdminDashboard
