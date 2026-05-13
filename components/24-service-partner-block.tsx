"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLeadModal } from "./13-lead-modal"

type ServicePartnerBlockProps = {
  title?: string
  description: string
}

export function ServicePartnerBlock({
  title = "Dentista? Indique seus pacientes para a RX Digital",
  description,
}: ServicePartnerBlockProps) {
  const { openModal } = useLeadModal()

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="order-2 space-y-5 lg:order-1">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
              <Button
                onClick={openModal}
                variant="outline"
                className="w-full rounded-full border-2 transition-colors duration-200 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-md hover:shadow-[#25D366]/25 sm:w-fit"
              >
                Quero ser parceiro
                <ChevronRight className="size-4!" />
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
