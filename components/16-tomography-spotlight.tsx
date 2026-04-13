"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons"
import { useLeadModal } from "./13-lead-modal"

const benefits = [
  "Imagens 3D de alta resolução para diagnósticos precisos",
  "Planejamento de implantes com visualização completa",
  "Baixa dose de radiação com tecnologia Cone Beam",
  "Laudo detalhado por especialista em radiologia",
  "Entrega digital em poucas horas",
]

export function TomographySpotlight() {
  const { openModal } = useLeadModal()

  return (
    <section id="tomografia" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              Tecnologia de ponta
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Tomografia Computadorizada Cone Beam (CBCT)
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A tomografia de feixe cônico oferece imagens tridimensionais detalhadas das estruturas
              bucais e maxilofaciais. Essencial para planejamento de implantes, avaliação de lesões,
              cirurgias ortognáticas e diagnósticos complexos.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={openModal}
              variant="whatsapp"
              size="lg"
              className="gap-2 [&_svg]:size-5!"
            >
              <WhatsAppIcon />
              Agendar tomografia
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/PHOTO-2026-04-06-18-23-11.jpg"
                alt="Exame de tomografia Cone Beam em andamento na RX Digital"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
