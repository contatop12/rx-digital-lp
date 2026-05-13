import { createElement, Fragment } from "react"
import type { Metadata } from "next"
import Link from "next/link"
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
  partnerDeliveryWithReport,
} from "@/lib/delivery-policy"
import { getServiceHref } from "@/lib/services"

export const periapicalMetadata: Metadata = {
  title: "Raio X Periapical em Marabá | Radiografia Periapical | RX Digital",
  description:
    "Faça seu raio x periapical em Marabá com imagens online no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis. Equipamento digital nas unidades Novo Horizonte e Nova Marabá. Agende agora.",
  openGraph: {
    title: "Raio X Periapical em Marabá | Radiografia Periapical | RX Digital",
    description:
      "Faça seu raio x periapical em Marabá com imagens online no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis. Equipamento digital nas unidades Novo Horizonte e Nova Marabá. Agende agora.",
    type: "website",
    locale: "pt_BR",
  },
}

const periapicalTrustBadges: ServiceLandingContent["trustBadges"] = [
  { icon: "cpu", text: "Exame 100% digital" },
  { icon: "clock", text: imagesAvailableSameDayBadge },
  { icon: "messageCircle", text: "Avaliação 5.0 no Google" },
  { icon: "shield", text: "Sem necessidade de preparo" },
]

const periapicalComparisonColumns: ComparisonColumn[] = [
  { key: "periapical", label: "Raio X Periapical" },
  { key: "panoramica", label: "Raio X Panorâmico", href: getServiceHref("radiografia-panoramica") },
]

const periapicalComparisonRows: ComparisonRow[] = [
  { label: "Área visualizada", values: { periapical: "1 a 3 dentes", panoramica: "Arcada completa" } },
  { label: "Indicação principal", values: { periapical: "Diagnóstico localizado", panoramica: "Avaliação geral" } },
  { label: "Detalhamento de raiz", values: { periapical: "Alta precisão", panoramica: "Parcial" } },
  { label: "Identificação de cáries", values: { periapical: "Sim", panoramica: "Parcial" } },
  { label: "Diagnóstico de infecções", values: { periapical: "Sim", panoramica: "Parcial" } },
  { label: "Uso em ortodontia", values: { periapical: "Não", panoramica: "Sim" } },
  { label: "Frequência de uso", values: { periapical: "Pontual", panoramica: "Rotina anual" } },
  { label: "Resultado", values: { periapical: "Arquivo digital", panoramica: "Arquivo digital" } },
]

const periapicalIndications: ServiceLandingContent["indications"] = [
  {
    emoji: "🦷",
    title: "Tratamento de canal",
    description: "Visualização detalhada dos canais radiculares para planejamento e acompanhamento do tratamento",
  },
  {
    emoji: "🔍",
    title: "Diagnóstico de cáries",
    description: "Identificação de cáries profundas que não são visíveis a olho nu",
  },
  {
    emoji: "🦴",
    title: "Lesões periapicais",
    description: "Detecção de infecções e lesões na ponta da raiz do dente",
  },
  {
    emoji: "🔩",
    title: "Avaliação de implantes",
    description: "Acompanhamento da osseointegração e verificação de implantes já instalados",
  },
  {
    emoji: "🦷",
    title: "Avaliação pré e pós-cirúrgica",
    description: "Controle antes e após extrações e cirurgias localizadas",
  },
  {
    emoji: "📋",
    title: "Acompanhamento de tratamentos",
    description: "Monitoramento da evolução de casos em andamento",
  },
]

const periapicalExamSteps: ExamStep[] = [
  { title: "Agendamento", description: "Pelo formulário no site, com ou sem pedido do dentista" },
  { title: "Chegada", description: "Sem necessidade de preparo especial" },
  {
    title: "Posicionamento",
    description: "O paciente é posicionado com o sensor digital na região a ser examinada",
  },
  {
    title: "Captura",
    description: "A imagem é capturada em segundos com baixa dose de radiação",
  },
  {
    title: "Processamento",
    description: "A imagem digital é gerada automaticamente pelo software do equipamento",
  },
  { title: "Entrega", description: examDeliveryStep },
]

const periapicalDiferenciais: string[] = [
  "Equipamento digital de última geração com alta resolução",
  diferencialDeliveryWithReport,
  expressReportDiferencial,
  "Sem necessidade de preparo especial",
  "Atendimento sem filas e com hora marcada",
  "Atendimento humanizado e ágil nas duas unidades em Marabá",
  "Referência para dentistas de mais de 20 cidades da região",
  "Integração com os demais exames da RX Digital para diagnósticos completos",
]

const periapicalFaqs: FAQItem[] = [
  {
    question: "O que é o raio x periapical?",
    answer:
      "O raio x periapical, também chamado de radiografia periapical, é um exame de imagem que captura com alta precisão a imagem completa de um ou mais dentes, incluindo a coroa, a raiz e o osso ao redor. É indicado para diagnósticos localizados como cáries, infecções e lesões na raiz.",
  },
  {
    question: "Qual a diferença entre raio x periapical e panorâmico?",
    answer:
      "O raio x panorâmico oferece uma visão geral de toda a arcada dentária. Já o raio x periapical foca em um ou mais dentes específicos, com muito mais detalhamento da raiz e do osso ao redor. Os dois exames se complementam.",
  },
  {
    question: "Preciso de pedido do dentista?",
    answer:
      "Na maioria dos casos, sim. O raio x periapical costuma ser solicitado pelo dentista durante a consulta. Se você tem dúvidas, preencha o formulário e nossa equipe vai orientar você.",
  },
  {
    question: "O exame tem radiação?",
    answer:
      "Sim, como todo exame radiológico. Porém, a dose de radiação do raio x periapical é muito baixa e considerada segura para a maioria dos pacientes.",
  },
  {
    question: "Quanto tempo dura o exame?",
    answer:
      "O exame em si dura apenas alguns segundos. O tempo total na clínica, incluindo posicionamento e orientações, é de aproximadamente 10 minutos.",
  },
  {
    question: "Quando fica pronto o resultado?",
    answer: faqWhenReadyAnswer,
  },
  {
    question: "Preciso de algum preparo antes do exame?",
    answer: "Não. O raio x periapical não exige nenhum preparo especial.",
  },
  {
    question: "O exame está disponível em quais unidades?",
    answer:
      "O raio x periapical está disponível nas duas unidades em Marabá: Unidade Novo Horizonte e Unidade Nova Marabá, no Shopping Verdes Mares.",
  },
]

const periapicalRegionalDescription =
  "A RX Digital atende pacientes e clínicas parceiras de mais de 20 cidades do Pará e Maranhão. Se você vem de outra cidade, preencha o formulário e nossa equipe vai organizar seu atendimento com agilidade."

const periapicalPartnerDescription =
  `Oferecemos atendimento prioritário para clínicas parceiras, ${partnerDeliveryWithReport}. O raio x periapical da RX Digital é ideal para acompanhamento de tratamentos de canal, diagnósticos localizados e controle pós-cirúrgico dos seus pacientes.`

const periapicalAboutContent = createElement(
  Fragment,
  null,
  createElement(
    "p",
    null,
    "O raio x periapical, também chamado de radiografia periapical, é um exame de imagem que captura com alta precisão a imagem completa de um ou mais dentes, incluindo a coroa, a raiz e o osso ao redor.",
  ),
  createElement(
    "p",
    null,
    "Diferente do ",
    createElement(
      Link,
      {
        href: getServiceHref("radiografia-panoramica"),
        className: "text-primary underline-offset-4 hover:underline",
      },
      "raio x panorâmico",
    ),
    ", que oferece uma visão geral de toda a arcada, o raio x periapical é indicado para diagnósticos localizados, permitindo ao dentista identificar cáries profundas, infecções, lesões na raiz e alterações no osso ao redor do dente.",
  ),
  createElement(
    "p",
    null,
    `Na RX Digital, o exame é realizado com equipamento digital de última geração, ${examDeliveryWithReport}.`,
  ),
)

export const periapicalContent: ServiceLandingContent = {
  slug: "radiografia-periapical",
  heroTitle: "Raio X Periapical em Marabá",
  heroSubtitle:
    "Radiografia periapical digital com imagem detalhada de dentes e raízes para diagnósticos precisos e localizados. Imagens disponíveis online no mesmo dia.",
  heroImage: "/exames_e_servicos/Radiografia Panorâmica (Raio x).webp",
  heroImageAlt: "Equipamento para radiografia periapical na RX Digital em Marabá",
  trustBadges: periapicalTrustBadges,
  aboutTitle: "O que é o Raio X Periapical?",
  aboutContent: periapicalAboutContent,
  comparison: {
    title: "Raio X Periapical x Raio X Panorâmico",
    columns: periapicalComparisonColumns,
    rows: periapicalComparisonRows,
  },
  indications: periapicalIndications,
  examSteps: periapicalExamSteps,
  diferenciais: periapicalDiferenciais,
  dentistNote:
    "Na maioria dos casos, o raio x periapical é solicitado pelo dentista durante a consulta. Porém, se você já sabe qual exame precisa, preencha o formulário e nossa equipe vai orientar você sobre os próximos passos.",
  regionalDescription: periapicalRegionalDescription,
  partnerDescription: periapicalPartnerDescription,
  faqs: periapicalFaqs,
  finalCtaTitle: "Agende seu Raio X Periapical em Marabá",
  finalCtaSubtitle: `${finalCtaDeliveryWithReport} Nossa equipe entra em contato assim que você preencher o formulário.`,
}
