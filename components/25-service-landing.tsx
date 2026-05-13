import type { ReactNode } from "react"
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
import type { ServiceHeroTrustIcon } from "@/components/18-service-hero"
import type { ExamStep } from "@/components/19-exam-stepper"
import type { ComparisonColumn, ComparisonRow } from "@/components/20-comparison-table"
import type { FAQItem } from "@/components/09-faq"

export type ServiceIndication = {
  emoji: string
  title: string
  description: string
}

export type ServiceLandingContent = {
  slug: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  heroImageAlt: string
  trustBadges: { icon: ServiceHeroTrustIcon; text: string }[]
  aboutTitle: string
  aboutContent: ReactNode
  comparison?: {
    title: string
    columns: ComparisonColumn[]
    rows: ComparisonRow[]
  }
  indicationsTitle?: string
  indications: ServiceIndication[]
  examSteps: ExamStep[]
  diferenciais: string[]
  dentistNoteTitle?: string
  dentistNote: string
  regionalDescription: string
  partnerDescription: string
  faqs: FAQItem[]
  finalCtaTitle: string
  finalCtaSubtitle: string
}

export function ServiceLandingPage({ content }: { content: ServiceLandingContent }) {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        backgroundImage={content.heroImage}
        backgroundAlt={content.heroImageAlt}
        trustBadges={content.trustBadges}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{content.aboutTitle}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">{content.aboutContent}</div>
          </div>
        </div>
      </section>

      {content.comparison ? (
        <ComparisonTable
          title={content.comparison.title}
          columns={content.comparison.columns}
          rows={content.comparison.rows}
        />
      ) : null}

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              {content.indicationsTitle ?? "Quando é indicado?"}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.indications.map((item) => (
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

      <ExamStepper heading="Como funciona o exame?" steps={content.examSteps} sectionClassName="py-20 bg-secondary" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Diferenciais da RX Digital</h2>
          </div>
          <ul className="mx-auto max-w-2xl space-y-4">
            {content.diferenciais.map((line) => (
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
            <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              {content.dentistNoteTitle ?? "Preciso de pedido do dentista?"}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{content.dentistNote}</p>
          </div>
        </div>
      </section>

      <RegionalHighlight description={content.regionalDescription} />
      <ServicePartnerBlock description={content.partnerDescription} />
      <FAQ items={content.faqs} sectionId={`faq-${content.slug}`} />
      <Reviews />
      <OutrosServicos currentSlug={content.slug} />
      <FinalCTA
        title={content.finalCtaTitle}
        subtitle={content.finalCtaSubtitle}
        secondaryHref="/#servicos"
        secondaryLabel="Ver todos os serviços"
      />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
