"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface NotifyButtonProps {
  productName: string
}

export function NotifyButton({ productName }: NotifyButtonProps) {
  const { toast } = useToast()

  const handleNotify = () => {
    toast({
      title: "Notification Set!",
      description: `We'll notify you when ${productName} becomes available.`,
      duration: 5000,
    })
  }

  return (
    <Button className="bg-brand-blue text-white hover:bg-brand-blue/90" onClick={handleNotify}>
      Notify Me When Available
    </Button>
  )
}
