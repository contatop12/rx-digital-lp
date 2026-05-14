import type { Metadata } from "next"
import { createElement, Fragment } from "react"
import Link from "next/link"
import type { ServiceLandingContent } from "@/components/25-service-landing"
import type { ExamStep } from "@/components/19-exam-stepper"
import { getServiceHref, services } from "@/lib/services"
import {
  diferencialDeliveryWithReport,
  examDeliveryStep,
  examDeliveryWithReport,
  expressReportDiferencial,
  finalCtaDeliveryWithReport,
  imagesAvailableSameDayBadge,
  partnerDeliveryWithReport,
} from "@/lib/delivery-policy"

const service = services.find((item) => item.slug === "documentacao-ortodontica")!

export const documentacaoMetadata: Metadata = {
  title: "Documentação Ortodôntica Completa em Marabá | RX Digital",
  description:
    "Conjunto completo de imagens para início ou troca de tratamento ortodôntico. Processo digital, rápido e com laudo especializado. Marabá-PA.",
  openGraph: {
    title: "Documentação Ortodôntica Completa em Marabá | RX Digital",
    description:
      "Conjunto completo de imagens para início ou troca de tratamento ortodôntico. Processo digital, rápido e com laudo especializado. Marabá-PA.",
    type: "website",
    locale: "pt_BR",
  },
}

const documentacaoTrustBadges: ServiceLandingContent["trustBadges"] = [
  { icon: "cpu", text: "Exame 100% digital" },
  { icon: "clock", text: imagesAvailableSameDayBadge },
  { icon: "messageCircle", text: "Avaliação 5.0 no Google" },
  { icon: "shield", text: "Todos os exames em um único lugar" },
]

const documentacaoIndications: ServiceLandingContent["indications"] = [
  {
    emoji: "📋",
    title: "Início de tratamento ortodôntico",
    description: "Base para planejamento com aparelho fixo ou alinhador invisível",
  },
  {
    emoji: "🔄",
    title: "Troca de aparelho ou mudança de plano",
    description: "Atualização dos registros para novo planejamento",
  },
  {
    emoji: "✂️",
    title: "Pré-cirurgia ortognática",
    description: "Documentação completa para planejamento de cirurgia de correção facial",
  },
  {
    emoji: "👶",
    title: "Avaliação de crescimento",
    description: "Acompanhamento do desenvolvimento ósseo em crianças e adolescentes",
  },
  {
    emoji: "📁",
    title: "Atualização de documentação",
    description: "Renovação dos registros após período de tratamento",
  },
]

const documentacaoExamSteps: ExamStep[] = [
  { title: "Agendamento", description: "Pelo formulário no site, com a solicitação do ortodontista" },
  { title: "Chegada", description: "Sem necessidade de preparo especial" },
  {
    title: "Exames de imagem",
    description: "Realização do raio x panorâmico e da telerradiografia em sequência, no mesmo atendimento",
  },
  {
    title: "Fotografias clínicas",
    description: "Registro fotográfico do rosto e da arcada dentária",
  },
  {
    title: "Processamento",
    description: "Geração das imagens digitais e do traçado cefalométrico",
  },
  { title: "Entrega", description: examDeliveryStep },
]

const documentacaoDiferenciais: string[] = [
  "Todos os exames da documentação em um único atendimento",
  diferencialDeliveryWithReport,
  expressReportDiferencial,
  "Equipamento digital de última geração com alta resolução",
  "Sem necessidade de preparo especial",
  "Atendimento sem filas e com hora marcada",
  "Atendimento humanizado e ágil nas duas unidades em Marabá",
  "Referência para ortodontistas de mais de 20 cidades da região",
]

const documentacaoFaqs: ServiceLandingContent["faqs"] = [
  {
    question: "O que é a documentação ortodôntica completa?",
    answer:
      "É o conjunto de exames de imagem solicitados pelo ortodontista antes de iniciar um tratamento. Inclui o raio x panorâmico, a telerradiografia com traçado cefalométrico e as fotografias clínicas.",
  },
  {
    question: "Preciso trazer o pedido do ortodontista?",
    answer:
      "Sim. A documentação ortodôntica é solicitada pelo ortodontista. Traga a solicitação para que possamos registrar corretamente todos os exames.",
  },
  {
    question: "Consigo fazer todos os exames no mesmo dia?",
    answer:
      "Sim. Na RX Digital, todos os exames da documentação ortodôntica são realizados no mesmo atendimento, com acesso online às imagens no mesmo dia, envio por e-mail e laudo em até 3 dias úteis, ou em até 12h com laudo expresso (taxa adicional).",
  },
  {
    question: "Quanto tempo dura o atendimento?",
    answer: "O atendimento completo, incluindo todos os exames e fotografias, dura em média 20 a 30 minutos.",
  },
  {
    question: "Os arquivos são compatíveis com o software do meu ortodontista?",
    answer:
      "Sim. Os arquivos são entregues em formato digital compatível com os principais softwares de planejamento ortodôntico utilizados no mercado.",
  },
  {
    question: "Preciso de algum preparo antes do atendimento?",
    answer: "Não. Não é necessário nenhum preparo especial. Basta trazer a solicitação do ortodontista.",
  },
  {
    question: "O atendimento está disponível em quais unidades?",
    answer:
      "A documentação ortodôntica completa está disponível nas duas unidades em Marabá: Unidade Novo Horizonte e Unidade Nova Marabá, no Shopping Verdes Mares.",
  },
]

const documentacaoAboutContent = createElement(
  Fragment,
  null,
  createElement(
    "p",
    null,
    "A documentação ortodôntica completa é o conjunto de exames de imagem solicitados pelo ortodontista antes de iniciar um tratamento com aparelho ou alinhador.",
  ),
  createElement(
    "p",
    null,
    "Ela reúne em um único atendimento todos os registros necessários para o diagnóstico e planejamento do tratamento, incluindo o ",
    createElement(
      Link,
      {
        href: getServiceHref("radiografia-panoramica"),
        className: "text-primary underline-offset-4 hover:underline",
      },
      "raio x panorâmico",
    ),
    ", a ",
    createElement(
      Link,
      {
        href: getServiceHref("telerradiografia-tracado-cefalometrico"),
        className: "text-primary underline-offset-4 hover:underline",
      },
      "telerradiografia com traçado cefalométrico",
    ),
    " e as fotografias clínicas.",
  ),
  createElement(
    "p",
    null,
    `Na RX Digital, você realiza toda a documentação ortodôntica em um único lugar, ${examDeliveryWithReport}.`,
  ),
  createElement("p", { className: "font-semibold text-foreground" }, "O que está incluído na documentação:"),
  createElement(
    "ul",
    { className: "list-disc space-y-2 pl-5 text-left" },
    createElement(
      "li",
      null,
      createElement(
        Link,
        {
          href: getServiceHref("radiografia-panoramica"),
          className: "text-primary underline-offset-4 hover:underline",
        },
        "Raio X Panorâmico",
      ),
      ": visão completa da arcada dentária, dentes, ossos e articulações",
    ),
    createElement(
      "li",
      null,
      createElement(
        Link,
        {
          href: getServiceHref("telerradiografia-tracado-cefalometrico"),
          className: "text-primary underline-offset-4 hover:underline",
        },
        "Telerradiografia",
      ),
      ": imagem lateral da face para análise do perfil ósseo e facial",
    ),
    createElement("li", null, "Traçado Cefalométrico: análise das medidas e relações entre os ossos da face"),
    createElement(
      "li",
      null,
      "Fotografias Clínicas: registro fotográfico do rosto e da arcada dentária para documentação completa",
    ),
  ),
)

export const documentacaoContent: ServiceLandingContent = {
  slug: service.slug,
  heroTitle: "Documentação Ortodôntica Completa em Marabá",
  heroSubtitle:
    "Todos os exames de imagem para o planejamento ortodôntico em um único lugar. Imagens disponíveis para acesso online no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis, ou em até 12h com laudo expresso (taxa adicional).",
  heroImage: service.image,
  heroImageAlt: "Documentação ortodôntica completa na RX Digital em Marabá",
  trustBadges: documentacaoTrustBadges,
  aboutTitle: "O que é a Documentação Ortodôntica?",
  aboutContent: documentacaoAboutContent,
  indicationsTitle: "Quando é indicada?",
  indications: documentacaoIndications,
  examSteps: documentacaoExamSteps,
  diferenciais: documentacaoDiferenciais,
  dentistNoteTitle: "Preciso trazer o pedido do ortodontista?",
  dentistNote:
    "Sim. A documentação ortodôntica completa é solicitada pelo ortodontista antes do início do tratamento. Traga a solicitação para que possamos registrar corretamente todos os exames e garantir que o arquivo entregue esteja no formato esperado pelo seu profissional.",
  regionalDescription:
    "A RX Digital é referência em documentação ortodôntica para pacientes e ortodontistas de mais de 20 cidades do Pará e Maranhão. Se você vem de outra cidade, preencha o formulário e nossa equipe vai organizar seu atendimento com agilidade.",
  partnerDescription:
    `Oferecemos atendimento prioritário para clínicas parceiras, ${partnerDeliveryWithReport}. Arquivos compatíveis com os principais softwares de planejamento ortodôntico.`,
  faqs: documentacaoFaqs,
  finalCtaTitle: "Agende sua Documentação Ortodôntica em Marabá",
  finalCtaSubtitle:
    `Todos os exames em um único atendimento, com acesso online às imagens no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis, ou em até 12h com laudo expresso (taxa adicional). Nossa equipe entra em contato assim que você preencher o formulário.`,
}
