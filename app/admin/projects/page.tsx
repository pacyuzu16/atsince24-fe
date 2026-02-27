"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, MoreHorizontal, Eye } from "lucide-react"
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

interface Project {
  id: string
  title: string
  client: string
  description: string
  date: string
  category: string
}

export default function ProjectsPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null)

  // Mock data - in a real app, this would come from an API
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "solar-installation-residence",
      title: "Solar Water Heater Installation",
      client: "Johnson Residence",
      description: "Installation of a 200L pressurized solar water heater system for a residential property.",
      date: "2023-05-15",
      category: "Residential",
    },
    {
      id: "gate-automation-commercial",
      title: "Commercial Gate Automation",
      client: "Skyline Office Complex",
      description: "Installation of automated sliding gates with access control for a commercial office complex.",
      date: "2023-07-22",
      category: "Commercial",
    },
    {
      id: "multi-unit-solar",
      title: "Multi-Unit Solar Heating Solution",
      client: "Sunrise Apartments",
      description:
        "Design and installation of a centralized solar water heating system for a 12-unit apartment building.",
      date: "2023-09-10",
      category: "Multi-Unit Residential",
    },
  ])

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const confirmDelete = (id: string) => {
    setProjectToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDelete = () => {
    if (projectToDelete) {
      setProjects(projects.filter((project) => project.id !== projectToDelete))
      toast({
        title: "Project deleted",
        description: "The project has been successfully deleted",
        duration: 3000,
      })
      setDeleteDialogOpen(false)
      setProjectToDelete(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-light tracking-tight">Projects</h2>
          <p className="text-gray-500 mt-1">Manage your portfolio of completed projects</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
            <Link href="/admin/projects/add">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Project Portfolio</CardTitle>
              <CardDescription>
                {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} in total
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search projects..."
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
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Project</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Client</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500 hidden md:table-cell">Category</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500 hidden md:table-cell">Date</th>
                    <th className="h-12 px-4 text-right font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                      <tr key={project.id} className="border-b transition-colors hover:bg-gray-50">
                        <td className="p-4 align-middle font-medium">{project.title}</td>
                        <td className="p-4 align-middle">{project.client}</td>
                        <td className="p-4 align-middle hidden md:table-cell">{project.category}</td>
                        <td className="p-4 align-middle hidden md:table-cell">
                          {new Date(project.date).toLocaleDateString()}
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
                                <Link href={`/our-work#${project.id}`} target="_blank">
                                  <Eye className="mr-2 h-4 w-4" />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link href={`/admin/projects/edit/${project.id}`}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => confirmDelete(project.id)}>
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
                        No projects found
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
              Are you sure you want to delete this project? This action cannot be undone.
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
