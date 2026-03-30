import type React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import AdminDashboard from "./AdminLayoutClient"

export const metadata = {
  title: "@since24 Admin Dashboard",
  description: "Admin dashboard for @since24 website",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Server-side authentication check
  const cookieStore = cookies()
  const isAuthenticated = cookieStore.get("isAuthenticated")?.value === "true"

  if (!isAuthenticated) {
    redirect("/staff-login")
  }

  return <AdminDashboard>{children}</AdminDashboard>
}
