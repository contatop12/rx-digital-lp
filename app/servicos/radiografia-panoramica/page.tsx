import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"
import { Header } from "@/components/01-header"
import { ServiceHero } from "@/components/18-service-hero"
import { ExamStepper } from "@/components/19-exam-stepper"
import { ComparisonTable } from "@/components/20-comparison-table"
import { OutrosServicos } from "@/components/21-outros-servicos"
import { RegionalHighlight } from "@/components/22-regional-highlight"
import { ServicePartnerBlock } from "@/components/24-service-partner-block"
import { Reviews } from "@/components/06-reviews"
import { FAQ } from "@/components/09-faq"
import { FinalCTA } from "@/components/10-final-cta"
import { Footer } from "@/components/11-footer"
import { FloatingWhatsApp } from "@/components/12-floating-whatsapp"
import { Card, CardContent } from "@/components/ui/card"
import {
  panoramicaComparisonColumns,
  panoramicaComparisonRows,
  panoramicaDiferenciais,
  panoramicaExamSteps,
  panoramicaFaqs,
  panoramicaIndications,
  panoramicaAboutDelivery,
  panoramicaFinalCtaSubtitle,
  panoramicaHeroSubtitle,
  panoramicaPartnerText,
  panoramicaRegionalDescription,
  panoramicaTrustBadges,
} from "@/lib/panoramica-content"

export const metadata: Metadata = {
  title: "Raio X Panorâmico em Marabá | Radiografia Panorâmica | RX Digital",
  description:
    "Faça seu raio x panorâmico em Marabá com imagens online no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis. Equipamento digital nas unidades Novo Horizonte e Nova Marabá. Agende agora.",
  openGraph: {
    title: "Raio X Panorâmico em Marabá | Radiografia Panorâmica | RX Digital",
    description:
      "Faça seu raio x panorâmico em Marabá com imagens online no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis. Equipamento digital nas unidades Novo Horizonte e Nova Marabá. Agende agora.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RadiografiaPanoramicaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero
        title="Raio X Panorâmico em Marabá"
        subtitle={panoramicaHeroSubtitle}
        backgroundImage="/exames_e_servicos/radiografia-panoramica-maraba.webp"
        backgroundAlt="Equipamento e ambiente para radiografia panorâmica na RX Digital em Marabá"
        trustBadges={panoramicaTrustBadges}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">O que é o Raio X Panorâmico?</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                O raio x panorâmico, também chamado de radiografia panorâmica ou panorâmica dental, é um exame de imagem
                que captura toda a arcada dentária em uma única chapa digital, incluindo dentes, ossos, articulações e
                seios da face.
              </p>
              <p>
                É o exame mais solicitado na odontologia, indicado para avaliações de rotina, planejamento de
                tratamentos, acompanhamento ortodôntico e muito mais.
              </p>
              <p>{panoramicaAboutDelivery}</p>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable
        title="Raio X Panorâmico x Raio X Periapical"
        columns={panoramicaComparisonColumns}
        rows={panoramicaComparisonRows}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Quando é indicado?</h2>
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

      <ExamStepper heading="Como funciona o exame?" steps={panoramicaExamSteps} sectionClassName="py-20 bg-secondary" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Diferenciais da RX Digital</h2>
          </div>
          <ul className="mx-auto max-w-2xl space-y-4">
            {panoramicaDiferenciais.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span className="leading-relaxed text-foreground">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background/40 p-8 md:p-10">
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">Preciso de pedido do dentista?</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Não é obrigatório. O paciente pode solicitar o raio x panorâmico diretamente, sem necessidade de
              encaminhamento. Porém, se você já tem indicação do seu dentista, traga a solicitação para que possamos
              registrar corretamente o exame.
            </p>
          </div>
        </div>
      </section>

      <RegionalHighlight description={panoramicaRegionalDescription} />
      <ServicePartnerBlock description={panoramicaPartnerText} />
      <FAQ items={panoramicaFaqs} sectionId="faq-panoramica" />
      <Reviews />
      <OutrosServicos currentSlug="radiografia-panoramica" />
      <FinalCTA
        title="Agende seu Raio X Panorâmico em Marabá"
        subtitle={panoramicaFinalCtaSubtitle}
        secondaryHref="/#servicos"
        secondaryLabel="Ver todos os serviços"
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
