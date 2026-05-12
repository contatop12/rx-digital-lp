import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { Header } from "@/components/01-header"
import { ServiceHero } from "@/components/18-service-hero"
import { ExamStepper } from "@/components/19-exam-stepper"
import { Reviews } from "@/components/06-reviews"
import { FAQ } from "@/components/09-faq"
import { FinalCTA } from "@/components/10-final-cta"
import { Footer } from "@/components/11-footer"
import { FloatingWhatsApp } from "@/components/12-floating-whatsapp"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsAppIcon } from "@/components/icons"
import {
  panoramicaDiferenciais,
  panoramicaExamSteps,
  panoramicaFaqs,
  panoramicaIndications,
  panoramicaTrustBadges,
  partnerDentistWhatsappLink,
} from "@/lib/panoramica-content"

export const metadata: Metadata = {
  title: "Radiografia Panorâmica em Marabá | RX Digital",
  description:
    "Visão completa da sua saúde bucal em um único exame. Radiografia panorâmica digital em Marabá: resultado rápido e laudo especializado. Agende pelo WhatsApp.",
  openGraph: {
    title: "Radiografia Panorâmica em Marabá | RX Digital",
    description:
      "Tecnologia digital, resultado no mesmo dia e laudo especializado. Agende agora.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RadiografiaPanoramicaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero
        title="Radiografia Panorâmica em Marabá"
        subtitle="Visão completa da sua saúde bucal em um único exame. Tecnologia digital, resultado rápido e laudo especializado."
        backgroundImage="/exames_e_servicos/radiografia-panoramica-maraba.webp"
        backgroundAlt="Equipamento e ambiente para radiografia panorâmica na RX Digital em Marabá"
        trustBadges={panoramicaTrustBadges}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              O que é a Radiografia Panorâmica?
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                A radiografia panorâmica, também conhecida como ortopantomografia, é um exame de imagem capaz de
                registrar toda a estrutura bucal em uma única chapa: dentes, ossos maxilares, articulações
                temporomandibulares (ATM) e seios maxilares.
              </p>
              <p>
                Na RX Digital, o exame é 100% digital, com imagens de alta resolução entregues no mesmo dia,
                diretamente pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Quando é indicada?</h2>
            <p className="text-lg text-muted-foreground">
              Abaixo estão as indicações mais frequentes. Se precisar de orientação, fale com nossa equipe pelo
              WhatsApp.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {panoramicaIndications.map((item) => (
              <Card
                key={item.title}
                className="border-border bg-background transition-shadow duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-3 text-2xl" aria-hidden>
                    {item.emoji}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ExamStepper
        heading="Como funciona o exame?"
        steps={panoramicaExamSteps}
        sectionClassName="py-20 bg-background"
      />

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Diferenciais da RX Digital</h2>
          </div>
          <ul className="mx-auto max-w-2xl space-y-4">
            {panoramicaDiferenciais.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="text-foreground leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-secondary/40 p-8 md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              Preciso de pedido do dentista?
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Não é obrigatório. A radiografia panorâmica pode ser solicitada diretamente pelo paciente. Porém,
              se você já tem indicação do seu dentista, traga a solicitação para otimizar o atendimento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="order-2 space-y-5 lg:order-1">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  Dentista? Indique seus pacientes para a RX Digital
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Oferecemos atendimento prioritário para clínicas parceiras, laudos precisos com entrega ágil e
                  suporte técnico direto com a Dra. Jéssica. Seja parceiro e facilite o fluxo do seu consultório.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-2 transition-colors duration-200 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-md hover:shadow-[#25D366]/25 sm:w-fit"
                >
                  <a href={partnerDentistWhatsappLink} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-4!" />
                    Quero ser parceiro
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

      <FAQ items={panoramicaFaqs} sectionId="faq-panoramica" />
      <Reviews />
      <FinalCTA
        title="Pronto para agendar sua Radiografia Panorâmica?"
        subtitle="Nossa equipe está disponível para agendar pelo WhatsApp. Rápido, fácil e sem complicação."
        secondaryHref="/#unidades"
        secondaryLabel="Ver outras unidades"
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
