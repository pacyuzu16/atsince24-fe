"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Search, Edit, Trash2, MoreHorizontal, Eye, CheckCircle, XCircle } from "lucide-react"
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

interface Product {
  id: string
  name: string
  price: string
  description: string
  comingSoon: boolean
}

export default function ProductsPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<string | null>(null)

  // Mock data - in a real app, this would come from an API
  const [products, setProducts] = useState<Product[]>([
    {
      id: "solar-water-heater",
      name: "Solar Water Heater",
      price: "RWF 750,000",
      description: "Eco-friendly water heating solution with pressurized and non-pressurized options.",
      comingSoon: false,
    },
    {
      id: "automatic-gate-opener",
      name: "Automatic Gate Opener",
      price: "RWF 450,000",
      description: "Smart gate solutions for enhanced security and convenience.",
      comingSoon: false,
    },
    {
      id: "gate-barrier",
      name: "Gate Barrier",
      price: "RWF 650,000",
      description: "Advanced barrier systems for controlled access to your property.",
      comingSoon: true,
    },
    {
      id: "air-conditioner",
      name: "Air Conditioner",
      price: "RWF 550,000",
      description: "Energy-efficient cooling solutions for your home or office.",
      comingSoon: true,
    },
  ])

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const confirmDelete = (id: string) => {
    setProductToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleDelete = () => {
    if (productToDelete) {
      setProducts(products.filter((product) => product.id !== productToDelete))
      toast({
        title: "Product deleted",
        description: "The product has been successfully deleted",
        duration: 3000,
      })
      setDeleteDialogOpen(false)
      setProductToDelete(null)
    }
  }

  const toggleStatus = (id: string) => {
    setProducts(
      products.map((product) => (product.id === id ? { ...product, comingSoon: !product.comingSoon } : product)),
    )

    const product = products.find((p) => p.id === id)
    toast({
      title: `Product ${product?.comingSoon ? "activated" : "deactivated"}`,
      description: `${product?.name} is now ${product?.comingSoon ? "active" : "marked as coming soon"}`,
      duration: 3000,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-light tracking-tight">Products</h2>
          <p className="text-gray-500 mt-1">Manage your product catalog</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
            <Link href="/admin/products/add">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} in total
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search products..."
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
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Name</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Price</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500 hidden md:table-cell">Description</th>
                    <th className="h-12 px-4 text-left font-medium text-gray-500">Status</th>
                    <th className="h-12 px-4 text-right font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <tr key={product.id} className="border-b transition-colors hover:bg-gray-50">
                        <td className="p-4 align-middle font-medium">{product.name}</td>
                        <td className="p-4 align-middle">{product.price}</td>
                        <td className="p-4 align-middle hidden md:table-cell">
                          <span className="line-clamp-1">{product.description}</span>
                        </td>
                        <td className="p-4 align-middle">
                          {product.comingSoon ? (
                            <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                              <XCircle className="mr-1 h-3.5 w-3.5" />
                              Coming Soon
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              <CheckCircle className="mr-1 h-3.5 w-3.5" />
                              Active
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
                              <DropdownMenuItem asChild>
                                <Link href={`/products/${product.id}`} target="_blank">
                                  <Eye className="mr-2 h-4 w-4" />
                                  View
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link href={`/admin/products/edit/${product.id}`}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => toggleStatus(product.id)}>
                                {product.comingSoon ? (
                                  <>
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Mark as Active
                                  </>
                                ) : (
                                  <>
                                    <XCircle className="mr-2 h-4 w-4" />
                                    Mark as Coming Soon
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => confirmDelete(product.id)}>
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
                        No products found
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
              Are you sure you want to delete this product? This action cannot be undone.
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
