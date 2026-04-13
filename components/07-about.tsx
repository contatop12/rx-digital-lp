"use client"

import Image from "next/image"
import { Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WhatsAppIcon } from "@/components/icons"
import { useLeadModal } from "./13-lead-modal"

export function About() {
  const { openModal } = useLeadModal()

  return (
    <section id="dra-jessica" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 items-center lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-primary/10 rounded-3xl -rotate-3" />
              
              {/* Main image */}
              <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/carrossel/jessica_arcoverde_dentista.webp"
                  alt="Dra. Jéssica Arcoverde Lara - Cirurgiã-Dentista Radiologista"
                  width={400}
                  height={500}
                  className="w-full max-w-sm object-cover"
                />
              </div>

              {/* CRO Badge */}
              <div className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Registro CRO</p>
                    <p className="font-semibold text-foreground">CRO-PA CD-7626</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                Responsável Técnica
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Referência em radiologia odontológica na região
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A clínica é conduzida pela <strong className="text-foreground">Dra. Jéssica Arcoverde Lara</strong>, 
                Cirurgiã-Dentista Radiologista registrada sob o <strong className="text-foreground">CRO-PA CD-7626</strong>, 
                com foco em excelência diagnóstica, segurança e suporte técnico aos dentistas de Marabá e de toda a região.
              </p>
              <p>
                Com anos de experiência e formação especializada, a Dra. Jéssica lidera uma equipe comprometida 
                em oferecer laudos precisos e atendimento humanizado, tornando a RX Digital referência em 
                radiologia odontológica no sudeste do Pará.
              </p>
              <p>
                Nosso compromisso vai além dos exames: buscamos ser parceiros dos dentistas da região, 
                oferecendo suporte técnico, agilidade na entrega de resultados e a segurança que cada 
                paciente merece.
              </p>
            </div>

            <div className="pt-4">
              <Button
                onClick={openModal}
                variant="whatsapp"
                size="lg"
                className="gap-2 [&_svg]:size-5!"
              >
                <WhatsAppIcon />
                Falar com a equipe e agendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
