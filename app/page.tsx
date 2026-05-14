import { Header } from "@/components/01-header"
import { Hero } from "@/components/02-hero"
import { Services } from "@/components/03-services"
import { FeedCarousel } from "@/components/04-feed-carousel"
import { WhyRxDigital } from "@/components/05-why-rx-digital"
import { Reviews } from "@/components/06-reviews"
import { About } from "@/components/07-about"
import { Units } from "@/components/08-units"
import { FAQ } from "@/components/09-faq"
import { FinalCTA } from "@/components/10-final-cta"
import { Footer } from "@/components/11-footer"
import { FloatingWhatsApp } from "@/components/12-floating-whatsapp"
import { PartnerSupport } from "@/components/17-partner-support"
import { LocalBusinessSchema } from "@/components/23-local-business-schema"

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Preciso de pedido do dentista para fazer o exame?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. Qualquer pessoa pode agendar diretamente na RX Digital, sem necessidade de encaminhamento médico ou odontológico.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo demora o exame?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A maioria dos exames é rápida. O raio x panorâmico, por exemplo, leva poucos minutos. O tempo total varia conforme o tipo de exame solicitado.",
      },
    },
    {
      "@type": "Question",
      name: "Quando fica pronto o laudo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O laudo padrão fica pronto em até 3 dias úteis. Para casos urgentes, a RX Digital oferece laudo expresso em até 12 horas, com taxa adicional.",
      },
    },
    {
      "@type": "Question",
      name: "A RX Digital aceita convênio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consulte as condições de convênio diretamente com a unidade pelo WhatsApp: (94) 99160-8181 (Novo Horizonte) ou (94) 99155-8181 (Nova Marabá).",
      },
    },
    {
      "@type": "Question",
      name: "Como recebo os resultados do exame?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As imagens ficam disponíveis online no mesmo dia do exame e são enviadas por e-mail. O laudo segue o prazo informado no momento do agendamento.",
      },
    },
    {
      "@type": "Question",
      name: "Atendem pacientes de outras cidades?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A RX Digital recebe pacientes de mais de 20 cidades do Pará e Maranhão. O atendimento é sempre presencial em uma das unidades em Marabá-PA.",
      },
    },
    {
      "@type": "Question",
      name: "Os exames de raio x são seguros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Os equipamentos da RX Digital são de última geração e seguem todos os protocolos de radiopreteção exigidos pelos órgãos reguladores.",
      },
    },
    {
      "@type": "Question",
      name: "Posso fazer exame durante a gravidez?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gestantes devem informar a equipe no momento do agendamento para avaliação do caso e adoção dos cuidados necessários de radiopreteção.",
      },
    },
    {
      "@type": "Question",
      name: "O arquivo de tomografia é compatível com qual software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os arquivos são entregues no formato DICOM, compatível com os principais softwares odontológicos do mercado, como Dolphin, Nemoceph, OnDemand3D e outros.",
      },
    },
    {
      "@type": "Question",
      name: "O que é o raio x panorâmico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É um exame que captura uma imagem completa da arcada dentária, maxilar e mandíbula em uma única radiografia digital. Indicado para rotina odontológica, planejamento ortodôntico e avaliação pré-operatória.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre tomografia dentária e radiografia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A radiografia gera imagens 2D, enquanto a tomografia Cone Beam produz imagens 3D de alta resolução. A tomografia permite visualizar estruturas ósseas, raízes e tecidos com muito mais detalhamento, sendo essencial para implantes, cirurgias e casos complexos.",
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <LocalBusinessSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Header />
      <Hero />
      <Services />
      <FeedCarousel />
      <WhyRxDigital />
      <Reviews />
      <About />
      <Units />
      <PartnerSupport />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
