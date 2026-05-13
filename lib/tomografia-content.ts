import { createElement, Fragment } from "react"
import type { Metadata } from "next"
import type { ServiceLandingContent } from "@/components/25-service-landing"
import type { ExamStep } from "@/components/19-exam-stepper"
import type { ComparisonColumn, ComparisonRow } from "@/components/20-comparison-table"
import type { FAQItem } from "@/components/09-faq"
import {
  diferencialDeliveryWithReport,
  examDeliveryStep,
  examDeliveryWithReport,
  expressReportDiferencial,
  faqWhenReadyAnswer,
  finalCtaDeliveryWithReport,
  imagesAvailableSameDayBadge,
} from "@/lib/delivery-policy"

export const tomografiaMetadata: Metadata = {
  title: "Tomografia Dentária em Marabá | Cone Beam e CBCT | RX Digital",
  description:
    "Faça sua tomografia dentária em Marabá com imagens online no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis. Equipamento Cone Beam nas unidades Novo Horizonte e Nova Marabá. Agende agora.",
  openGraph: {
    title: "Tomografia Dentária em Marabá | Cone Beam e CBCT | RX Digital",
    description:
      "Faça sua tomografia dentária em Marabá com imagens online no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis. Equipamento Cone Beam nas unidades Novo Horizonte e Nova Marabá. Agende agora.",
    type: "website",
    locale: "pt_BR",
  },
}

const tomografiaTrustBadges: ServiceLandingContent["trustBadges"] = [
  { icon: "cpu", text: "Imagem 3D de alta resolução" },
  { icon: "clock", text: imagesAvailableSameDayBadge },
  { icon: "messageCircle", text: "Avaliação 5.0 no Google" },
  { icon: "shield", text: "Indicado por dentistas de toda a região" },
]

const tomografiaComparisonColumns: ComparisonColumn[] = [
  { key: "convencional", label: "Radiografia Convencional" },
  { key: "tomografia", label: "Tomografia Dentária (Cone Beam)" },
]

const tomografiaComparisonRows: ComparisonRow[] = [
  { label: "Dimensão da imagem", values: { convencional: "2D", tomografia: "3D" } },
  {
    label: "Visualização de estruturas",
    values: { convencional: "Limitada", tomografia: "Completa (dentes, ossos, nervos)" },
  },
  { label: "Precisão para implantes", values: { convencional: "Não", tomografia: "Sim" } },
  { label: "Planejamento cirúrgico", values: { convencional: "Não", tomografia: "Sim" } },
  { label: "Avaliação de ATM", values: { convencional: "Parcial", tomografia: "Completa" } },
  { label: "Dose de radiação", values: { convencional: "Baixa", tomografia: "Baixa e controlada" } },
  { label: "Resultado", values: { convencional: "Impresso ou digital", tomografia: "Arquivo digital 3D" } },
]

const tomografiaIndications: ServiceLandingContent["indications"] = [
  {
    emoji: "🔩",
    title: "Implantes dentários",
    description:
      "Planejamento preciso do posicionamento dos implantes com visualização completa do osso disponível",
  },
  {
    emoji: "🦷",
    title: "Extração de sisos",
    description: "Avaliação da posição e proximidade com nervos antes da cirurgia",
  },
  {
    emoji: "🦴",
    title: "Enxertos ósseos",
    description: "Análise do volume e qualidade óssea para planejamento de enxertos",
  },
  {
    emoji: "🔄",
    title: "ATM",
    description: "Diagnóstico de disfunções e dores na articulação temporomandibular",
  },
  {
    emoji: "🦷",
    title: "Endodontia",
    description: "Visualização detalhada de canais radiculares complexos e reabsorções",
  },
  {
    emoji: "📋",
    title: "Planejamento ortodôntico e cirúrgico",
    description: "Base para cirurgias ortognáticas e casos complexos",
  },
]

const tomografiaExamSteps: ExamStep[] = [
  { title: "Agendamento", description: "Pelo formulário no site ou pelo WhatsApp, com ou sem pedido do dentista" },
  { title: "Chegada", description: "Sem necessidade de preparo especial na maioria dos casos" },
  {
    title: "Posicionamento",
    description: "O paciente é posicionado no equipamento de forma rápida e confortável",
  },
  {
    title: "Captura",
    description: "O aparelho realiza uma rotação ao redor da cabeça capturando centenas de imagens em segundos",
  },
  {
    title: "Processamento",
    description: "As imagens são reconstruídas em 3D pelo software do equipamento",
  },
  {
    title: "Entrega",
    description: examDeliveryStep,
  },
]

const tomografiaDiferenciais: string[] = [
  "Equipamento Cone Beam de última geração com alta resolução",
  "Imagens 3D com cortes milimétricos para diagnósticos precisos",
  diferencialDeliveryWithReport,
  expressReportDiferencial,
  "Atendimento humanizado e ágil nas duas unidades em Marabá",
  "Referência para dentistas de mais de 20 cidades da região",
  "Integração com os demais exames da RX Digital para documentação completa",
]

const tomografiaFaqs: FAQItem[] = [
  {
    question: "O que é tomografia dentária?",
    answer:
      "A tomografia dentária, também chamada de tomografia odontológica ou Cone Beam (CBCT), é um exame de imagem 3D que permite visualizar com alta precisão os dentes, ossos, raízes e nervos da face. É indicada para planejamento de implantes, cirurgias, endodontia e avaliação de ATM.",
  },
  {
    question: "Qual a diferença entre tomografia dentária e radiografia?",
    answer:
      "A radiografia gera imagens em 2D, com visão limitada das estruturas. A tomografia dentária gera imagens em 3D, com cortes detalhados que permitem ao dentista planejar tratamentos com muito mais precisão e segurança.",
  },
  {
    question: "Preciso de pedido do dentista?",
    answer:
      "Na maioria dos casos, sim. A tomografia dentária é solicitada pelo dentista com uma indicação clínica específica. Se você tem dúvidas, preencha o formulário e nossa equipe vai orientar você.",
  },
  {
    question: "O exame tem radiação?",
    answer:
      "Sim, como todo exame de imagem radiológica. Porém, o equipamento Cone Beam utiliza uma dose de radiação baixa e controlada, muito inferior à tomografia médica convencional.",
  },
  {
    question: "Quanto tempo dura o exame?",
    answer:
      "O exame em si dura apenas alguns segundos. O tempo total na clínica, incluindo posicionamento e orientações, é de aproximadamente 15 a 20 minutos.",
  },
  {
    question: "Quando fica pronto o resultado?",
    answer: faqWhenReadyAnswer,
  },
  {
    question: "O arquivo é compatível com qual software?",
    answer:
      "O arquivo é entregue em formato DICOM, compatível com os principais softwares de planejamento odontológico, como Implant Studio, Blue Sky Plan, exocad e similares.",
  },
  {
    question: "O exame está disponível em quais unidades?",
    answer:
      "A tomografia dentária está disponível nas duas unidades em Marabá: Unidade Novo Horizonte e Unidade Nova Marabá, no Shopping Verdes Mares.",
  },
]

const tomografiaRegionalDescription =
  "A RX Digital é referência em tomografia dentária para pacientes e dentistas de mais de 20 cidades do Pará e Maranhão. Se você vem de outra cidade, preencha o formulário e nossa equipe vai organizar seu atendimento com agilidade para que você não precise esperar."

const tomografiaPartnerDescription =
  "Oferecemos atendimento prioritário para clínicas parceiras, com entrega de arquivos DICOM e laudos compatíveis com os principais softwares de planejamento. Seja para implantes, cirurgias ou casos ortodônticos complexos, a tomografia dentária da RX Digital é a base para um planejamento seguro e preciso."

const tomografiaAboutContent = createElement(
  Fragment,
  null,
  createElement(
    "p",
    null,
    "A tomografia dentária, também chamada de tomografia odontológica ou Cone Beam (CBCT), é um exame de imagem tridimensional que permite visualizar com alta precisão os dentes, ossos, raízes, nervos e estruturas da face.",
  ),
  createElement(
    "p",
    null,
    "Diferente da radiografia convencional, que gera imagens em 2D, a tomografia dentária produz cortes detalhados em três dimensões, permitindo ao dentista planejar tratamentos com muito mais segurança e precisão.",
  ),
  createElement(
    "p",
    null,
    `Na RX Digital, o exame é realizado com equipamento Cone Beam de última geração, ${examDeliveryWithReport}.`,
  ),
)

export const tomografiaContent: ServiceLandingContent = {
  slug: "tomografia-cone-beam",
  heroTitle: "Tomografia Dentária em Marabá",
  heroSubtitle:
    "Exame de imagem 3D em alta resolução (Cone Beam / CBCT) para diagnósticos precisos e tratamentos odontológicos complexos.",
  heroImage: "/exames_e_servicos/Tomografia Computadorizada (Cone Beam  CBCT).webp",
  heroImageAlt: "Equipamento de tomografia Cone Beam na RX Digital em Marabá",
  trustBadges: tomografiaTrustBadges,
  aboutTitle: "O que é a Tomografia Dentária?",
  aboutContent: tomografiaAboutContent,
  comparison: {
    title: "Tomografia Dentária x Radiografia Convencional",
    columns: tomografiaComparisonColumns,
    rows: tomografiaComparisonRows,
  },
  indications: tomografiaIndications,
  examSteps: tomografiaExamSteps,
  diferenciais: tomografiaDiferenciais,
  dentistNote:
    "Na maioria dos casos, sim. A tomografia dentária é um exame de maior complexidade e costuma ser solicitada pelo dentista com uma indicação clínica específica. Porém, se você tem uma necessidade clara, preencha o formulário e nossa equipe vai orientar você.",
  regionalDescription: tomografiaRegionalDescription,
  partnerDescription: tomografiaPartnerDescription,
  faqs: tomografiaFaqs,
  finalCtaTitle: "Agende sua Tomografia Dentária em Marabá",
  finalCtaSubtitle:
    `Imagens 3D de alta resolução com acesso online no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis, ou em até 12h com laudo expresso (taxa adicional). Nossa equipe entra em contato assim que você preencher o formulário.`,
}
