"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons"
import { useLeadModal } from "./13-lead-modal"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const { openModal } = useLeadModal()

  useEffect(() => {
    // Show button after scrolling a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    
    // Initial check
    handleScroll()

    // Show tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 5000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const handleClick = () => {
    // Open modal to capture lead first
    openModal()
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="relative bg-foreground text-background text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 p-1 bg-foreground rounded-full hover:bg-muted-foreground transition-colors"
              aria-label="Fechar tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            Agende pelo WhatsApp!
            {/* Arrow */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-foreground" />
          </div>
        </div>
      )}

      <div className="relative">
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none motion-reduce:animate-none"
          aria-hidden
        />
        <Button
          type="button"
          variant="whatsapp"
          size="fab"
          onClick={handleClick}
          className="relative shadow-2xl shadow-[#25D366]/40 hover:scale-105 motion-reduce:hover:scale-100"
          aria-label="Agendar pelo WhatsApp"
        >
          <WhatsAppIcon />
        </Button>
      </div>
    </div>
  )
}
