import type { Metadata } from "next"
import { createElement, Fragment } from "react"
import Link from "next/link"
import type { ServiceLandingContent } from "@/components/25-service-landing"
import type { ComparisonColumn, ComparisonRow } from "@/components/20-comparison-table"
import type { ExamStep } from "@/components/19-exam-stepper"
import { getServiceHref, services } from "@/lib/services"
import {
  diferencialDeliveryWithReport,
  examDeliveryStep,
  examDeliveryWithReport,
  expressReportDiferencial,
  faqWhenReadyAnswer,
  finalCtaDeliveryWithReport,
  imagesAvailableSameDayBadge,
  partnerDeliveryWithReport,
} from "@/lib/delivery-policy"

const service = services.find((item) => item.slug === "telerradiografia-tracado-cefalometrico")!

export const telerradiografiaMetadata: Metadata = {
  title: "Telerradiografia e Traçado Cefalométrico em Marabá | RX Digital",
  description:
    "Análise do perfil facial para planejamento ortodôntico e cirúrgico. Exame digital com traçado cefalométrico incluso. RX Digital, Marabá-PA.",
  openGraph: {
    title: "Telerradiografia e Traçado Cefalométrico em Marabá | RX Digital",
    description:
      "Análise do perfil facial para planejamento ortodôntico e cirúrgico. Exame digital com traçado cefalométrico incluso. RX Digital, Marabá-PA.",
    type: "website",
    locale: "pt_BR",
  },
}

const telerradiografiaTrustBadges: ServiceLandingContent["trustBadges"] = [
  { icon: "cpu", text: "Exame 100% digital" },
  { icon: "clock", text: imagesAvailableSameDayBadge },
  { icon: "messageCircle", text: "Avaliação 5.0 no Google" },
  { icon: "shield", text: "Indicado por ortodontistas de toda a região" },
]

const telerradiografiaComparisonColumns: ComparisonColumn[] = [
  { key: "panoramica", label: "Raio X Panorâmico", href: getServiceHref("radiografia-panoramica") },
  { key: "teleradiografia", label: "Telerradiografia + Cefalometria" },
]

const telerradiografiaComparisonRows: ComparisonRow[] = [
  {
    label: "Área visualizada",
    values: { panoramica: "Arcada completa (frontal)", teleradiografia: "Perfil lateral da face" },
  },
  {
    label: "Indicação principal",
    values: { panoramica: "Avaliação geral da arcada", teleradiografia: "Análise do perfil facial" },
  },
  { label: "Uso em ortodontia", values: { panoramica: "Base inicial", teleradiografia: "Planejamento detalhado" } },
  { label: "Cirurgia ortognática", values: { panoramica: "Não", teleradiografia: "Sim" } },
  { label: "Traçado cefalométrico", values: { panoramica: "Não", teleradiografia: "Sim" } },
  { label: "Análise de crescimento facial", values: { panoramica: "Não", teleradiografia: "Sim" } },
  { label: "Resultado", values: { panoramica: "Arquivo digital", teleradiografia: "Arquivo digital + traçado" } },
]

const telerradiografiaIndications: ServiceLandingContent["indications"] = [
  {
    emoji: "📋",
    title: "Início de tratamento ortodôntico",
    description: "Análise do perfil facial antes do planejamento com aparelho ou alinhador",
  },
  {
    emoji: "🔄",
    title: "Acompanhamento ortodôntico",
    description: "Monitoramento da evolução do tratamento e do crescimento facial",
  },
  {
    emoji: "✂️",
    title: "Cirurgia ortognática",
    description: "Base para planejamento de cirurgias de correção da mandíbula e maxila",
  },
  {
    emoji: "🦷",
    title: "Documentação ortodôntica completa",
    description: "Componente essencial do conjunto de exames solicitados pelo ortodontista",
  },
  {
    emoji: "👶",
    title: "Avaliação de crescimento facial",
    description: "Análise do desenvolvimento ósseo em crianças e adolescentes",
  },
  {
    emoji: "📐",
    title: "Planejamento de casos complexos",
    description: "Suporte para casos que envolvem discrepâncias esqueléticas e faciais",
  },
]

const telerradiografiaExamSteps: ExamStep[] = [
  {
    title: "Agendamento",
    description: "Pelo formulário no site, com pedido do ortodontista ou cirurgião",
  },
  { title: "Chegada", description: "Sem necessidade de preparo especial" },
  {
    title: "Posicionamento",
    description: "O paciente é posicionado de perfil no equipamento, com apoios para manter a cabeça estável",
  },
  {
    title: "Captura",
    description: "A imagem lateral da face é capturada em segundos com baixa dose de radiação",
  },
  {
    title: "Processamento",
    description: "A imagem digital e o traçado cefalométrico são gerados pelo software do equipamento",
  },
  {
    title: "Entrega",
    description:
      "Acesso online à imagem e ao traçado disponível no mesmo dia, com envio por e-mail. Laudo em até 3 dias úteis, ou em até 12h com laudo expresso (taxa adicional).",
  },
]

const telerradiografiaDiferenciais: string[] = [
  "Equipamento digital de última geração com alta resolução",
  "Traçado cefalométrico entregue junto com a imagem",
  diferencialDeliveryWithReport,
  expressReportDiferencial,
  "Sem necessidade de preparo especial",
  "Atendimento sem filas e com hora marcada",
  "Atendimento humanizado e ágil nas duas unidades em Marabá",
  "Referência para ortodontistas e cirurgiões de mais de 20 cidades da região",
]

const telerradiografiaFaqs: ServiceLandingContent["faqs"] = [
  {
    question: "O que é cefalometria?",
    answer:
      "A cefalometria é uma análise realizada a partir da telerradiografia, um exame que captura o perfil lateral da face. O traçado cefalométrico identifica as relações entre os ossos da face, a posição dos dentes e o perfil do paciente, sendo essencial para o planejamento ortodôntico e cirúrgico.",
  },
  {
    question: "Qual a diferença entre telerradiografia e cefalometria?",
    answer:
      "A telerradiografia é o exame de imagem que captura o perfil lateral da face. A cefalometria é a análise feita sobre essa imagem, com o traçado dos pontos e medidas do rosto. Na RX Digital, entregamos os dois juntos no mesmo dia.",
  },
  {
    question: "Preciso de pedido do ortodontista?",
    answer:
      "Sim. A telerradiografia com traçado cefalométrico é um exame técnico solicitado pelo ortodontista ou cirurgião bucomaxilofacial. Se você tem dúvidas, preencha o formulário e nossa equipe vai orientar você.",
  },
  {
    question: "O exame tem radiação?",
    answer:
      "Sim, como todo exame radiológico. Porém, a dose de radiação da telerradiografia é muito baixa e considerada segura para a maioria dos pacientes.",
  },
  {
    question: "Quanto tempo dura o exame?",
    answer:
      "O exame em si dura apenas alguns segundos. O tempo total na clínica, incluindo posicionamento e orientações, é de aproximadamente 10 a 15 minutos.",
  },
  {
    question: "Quando fica pronto o resultado?",
    answer: faqWhenReadyAnswer,
  },
  {
    question: "O arquivo é compatível com qual software?",
    answer:
      "O arquivo é entregue em formato digital compatível com os principais softwares de planejamento ortodôntico e cirúrgico utilizados no mercado.",
  },
  {
    question: "O exame está disponível em quais unidades?",
    answer:
      "A cefalometria está disponível nas duas unidades em Marabá: Unidade Novo Horizonte e Unidade Nova Marabá, no Shopping Verdes Mares.",
  },
]

const telerradiografiaAboutContent = createElement(
  Fragment,
  null,
  createElement(
    "p",
    null,
    "A cefalometria é uma análise realizada a partir da telerradiografia, um exame de imagem que captura o perfil lateral da face e do crânio em uma única chapa digital.",
  ),
  createElement(
    "p",
    null,
    "A partir dessa imagem, o ortodontista ou cirurgião bucomaxilofacial realiza o traçado cefalométrico, identificando as relações entre os ossos da face, a posição dos dentes e o perfil do paciente.",
  ),
  createElement(
    "p",
    null,
    "É um exame essencial para o planejamento de tratamentos ortodônticos, cirurgias ortognáticas e acompanhamento da evolução de casos complexos.",
  ),
  createElement(
    "p",
    null,
    `Na RX Digital, a telerradiografia é realizada com equipamento digital de última geração. O traçado cefalométrico é entregue junto com a imagem, ${examDeliveryWithReport}.`,
  ),
  createElement(
    "p",
    null,
    "A telerradiografia com traçado cefalométrico também faz parte da ",
    createElement(
      Link,
      {
        href: getServiceHref("documentacao-ortodontica"),
        className: "text-primary underline-offset-4 hover:underline",
      },
      "documentação ortodôntica completa",
    ),
    `. Na RX Digital, você realiza todos os exames da documentação em um único lugar, ${examDeliveryWithReport}.`,
  ),
)

export const telerradiografiaContent: ServiceLandingContent = {
  slug: service.slug,
  heroTitle: "Cefalometria em Marabá",
  heroSubtitle:
    "Telerradiografia digital com traçado cefalométrico para análise precisa do perfil facial e planejamento ortodôntico e cirúrgico. Imagens disponíveis para acesso online no mesmo dia.",
  heroImage: service.image,
  heroImageAlt: "Telerradiografia com traçado cefalométrico na RX Digital em Marabá",
  trustBadges: telerradiografiaTrustBadges,
  aboutTitle: "O que é a Cefalometria?",
  aboutContent: telerradiografiaAboutContent,
  comparison: {
    title: "Telerradiografia x Radiografia Panorâmica",
    columns: telerradiografiaComparisonColumns,
    rows: telerradiografiaComparisonRows,
  },
  indications: telerradiografiaIndications,
  examSteps: telerradiografiaExamSteps,
  diferenciais: telerradiografiaDiferenciais,
  dentistNoteTitle: "Preciso de pedido do ortodontista?",
  dentistNote:
    "Sim. A telerradiografia com traçado cefalométrico é um exame técnico solicitado pelo ortodontista ou cirurgião bucomaxilofacial. Se você já tem a solicitação, preencha o formulário e nossa equipe vai agendar seu atendimento com agilidade.",
  regionalDescription:
    "A RX Digital atende pacientes e clínicas parceiras de mais de 20 cidades do Pará e Maranhão. Se você vem de outra cidade para realizar sua cefalometria, preencha o formulário e nossa equipe vai organizar seu atendimento com agilidade.",
  partnerDescription:
    `Oferecemos atendimento prioritário para clínicas parceiras, com acesso online à telerradiografia e ao traçado cefalométrico no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis, ou em até 12h com laudo expresso (taxa adicional). Compatível com os principais softwares de planejamento ortodôntico e cirúrgico.`,
  faqs: telerradiografiaFaqs,
  finalCtaTitle: "Agende sua Cefalometria em Marabá",
  finalCtaSubtitle:
    `Telerradiografia com traçado cefalométrico, com acesso online às imagens no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis, ou em até 12h com laudo expresso (taxa adicional). Nossa equipe entra em contato assim que você preencher o formulário.`,
}
