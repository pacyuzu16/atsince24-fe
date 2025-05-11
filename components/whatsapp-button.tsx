"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const message = "Hello! I'm interested in your products. Can you provide more information?"
  const phoneNumber = "+250788825011"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isExpanded && (
        <div className="mb-3 max-w-xs bg-white rounded-lg shadow-lg p-4 transform transition-all duration-300 animate-fade-in">
          <p className="text-sm text-gray-700 mb-3">
            Have questions? Chat with us directly on WhatsApp for quick assistance!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-md transition-colors duration-200"
          >
            Start Chat
          </a>
        </div>
      )}

      <button
        onClick={toggleExpand}
        className={cn(
          "flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105",
          isExpanded ? "bg-gray-200 text-gray-700" : "bg-green-500 text-white pulse-animation",
        )}
        style={{ width: "50px", height: "50px" }}
        aria-label={isExpanded ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {isExpanded ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>
    </div>
  )
}
