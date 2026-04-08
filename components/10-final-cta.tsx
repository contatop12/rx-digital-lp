"use client"

import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons"
import { useLeadModal } from "./13-lead-modal"

export function FinalCTA() {
  const { openModal } = useLeadModal()

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E4E] via-[#5A7A42] to-[#4A6636]" />
      {/* Subtle noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` 
        }} 
      />
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pronto para agendar?
          </h2>
          <p className="text-lg text-white/85 mb-8">
            Clique no botão abaixo e nossa equipe entrará em contato pelo WhatsApp para agendar seu exame.
          </p>

          {/* CTA Button */}
          <Button
            onClick={openModal}
            variant="ctaOnGreen"
            size="xl"
            className="gap-3 text-lg font-bold [&_svg]:!size-6"
          >
            <WhatsAppIcon className="text-[#25D366]" />
            Agendar pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
