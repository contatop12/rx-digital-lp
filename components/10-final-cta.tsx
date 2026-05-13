"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLeadModal } from "./13-lead-modal"

type FinalCTAProps = {
  title?: string
  subtitle?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function FinalCTA({
  title = "Pronto para agendar?",
  subtitle = "Clique no botão abaixo e nossa equipe entrará em contato pelo WhatsApp para agendar seu exame.",
  secondaryHref,
  secondaryLabel,
}: FinalCTAProps) {
  const { openModal } = useLeadModal()

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E4E] via-[#5A7A42] to-[#4A6636]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg text-white/85 mb-8">{subtitle}</p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button
              onClick={openModal}
              variant="ctaOnGreen"
              size="xl"
              className="w-full text-lg font-bold sm:w-auto"
            >
              Agendar Agora
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button
                asChild
                variant="outline"
                size="xl"
                className="w-full rounded-full border-2 border-white/80 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
