"use client"

import Link from "next/link"
import { 
  Cpu, 
  Zap, 
  Heart, 
  MapPin, 
  Handshake,
  Shield
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { digitalProcessDescription } from "@/lib/delivery-policy"
import { getServiceHref } from "@/lib/services"

const reasons = [
  {
    icon: Cpu,
    title: "Tecnologia de ponta",
    description: "Equipamentos de última geração com alta resolução para diagnósticos precisos e confiáveis.",
  },
  {
    icon: Zap,
    title: "Processo 100% digital",
    description: digitalProcessDescription,
  },
  {
    icon: Heart,
    title: "Atendimento humanizado",
    description: "Equipe treinada para proporcionar conforto e cuidado em cada etapa do atendimento.",
  },
  {
    icon: MapPin,
    title: "Referência regional",
    description: "Atendemos pacientes de Marabá e de mais de 20 cidades da região, com confiança consolidada.",
  },
  {
    icon: Handshake,
    title: "Suporte a dentistas",
    description: "Parceria com dentistas da região oferecendo laudos especializados e atendimento prioritário.",
  },
  {
    icon: Shield,
    title: "Segurança e precisão",
    description: "Protocolos rigorosos de segurança e controle de qualidade em todos os procedimentos.",
  },
]

export function WhyRxDigital() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Por que a RX Digital?
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos{" "}
            <Link href={getServiceHref("tomografia-cone-beam")} className="text-primary underline-offset-4 hover:underline">
              tomografia dentária
            </Link>
            ,{" "}
            <Link href={getServiceHref("radiografia-panoramica")} className="text-primary underline-offset-4 hover:underline">
              raio x panorâmico
            </Link>{" "}
            e{" "}
            <Link href={getServiceHref("documentacao-ortodontica")} className="text-primary underline-offset-4 hover:underline">
              documentação ortodôntica
            </Link>{" "}
            com atendimento humanizado para oferecer a melhor experiência em radiologia odontológica.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group bg-background border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
