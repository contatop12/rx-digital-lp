"use client"

import Image from "next/image"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons"

const partnerMessage =
  "Olá! Sou dentista e fiquei interessado(a) em conhecer a estrutura da RX Digital. Gostaria de agendar uma visita para avaliar uma possível parceria."

const partnerWhatsappLink = `https://wa.me/5594991608181?text=${encodeURIComponent(partnerMessage)}`

const partnerTags = [
  "Clínicas parceiras",
  "Dentistas da região",
  "Casos complexos",
  "Ortodontia & Implantes",
]

export function PartnerSupport() {
  return (
    <section id="parcerias" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="order-2 space-y-5 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Suporte para Dentistas Parceiros
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seja parceiro da RX Digital e ofereça aos seus pacientes laudos precisos, tecnologia de ponta e agilidade na entrega. Atendimento prioritário para você e sua clínica.
              </p>

              <div>
                <p className="text-sm font-medium text-foreground mb-3">Indicado para:</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {partnerTags.map((tag) => (
                    <div
                      key={tag}
                      className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-2 transition-colors duration-200 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-md hover:shadow-[#25D366]/25 sm:w-fit"
              >
                <a href={partnerWhatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-4!" />
                  Conheça a nossa estrutura
                  <ChevronRight className="size-4!" />
                </a>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-secondary/30">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/exames_e_servicos/Suporte para Dentistas Parceiros.webp"
                    alt="Equipe RX Digital em atendimento a dentistas parceiros"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
