import type { ExamStep } from "@/components/19-exam-stepper"
import type { ComparisonColumn, ComparisonRow } from "@/components/20-comparison-table"
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

export type PanoramicaTrustIcon = "cpu" | "clock" | "messageCircle" | "shield"

export const panoramicaTrustBadges: { icon: PanoramicaTrustIcon; text: string }[] = [
  { icon: "cpu", text: "Exame 100% digital" },
  { icon: "clock", text: imagesAvailableSameDayBadge },
  { icon: "messageCircle", text: "Avaliação 5.0 no Google" },
  { icon: "shield", text: "Sem necessidade de preparo" },
]

export const panoramicaIndications: { emoji: string; title: string; description: string }[] = [
  {
    emoji: "🦷",
    title: "Avaliação de rotina",
    description: "Visão geral da saúde bucal para acompanhamento periódico pelo dentista",
  },
  {
    emoji: "📋",
    title: "Início de tratamento ortodôntico",
    description: "Base para planejamento de aparelhos e alinhadores",
  },
  {
    emoji: "🔩",
    title: "Planejamento de implantes",
    description: "Avaliação do osso disponível antes da cirurgia de implante",
  },
  {
    emoji: "🦷",
    title: "Extração de sisos",
    description: "Verificação da posição dos dentes do siso antes da extração",
  },
  {
    emoji: "🦴",
    title: "Avaliação de seios da face",
    description: "Identificação de alterações nos seios maxilares",
  },
  {
    emoji: "🔄",
    title: "Acompanhamento de tratamentos",
    description: "Monitoramento da evolução de casos em andamento",
  },
]

export const panoramicaExamSteps: ExamStep[] = [
  { title: "Agendamento", description: "Pelo formulário no site, com ou sem pedido do dentista" },
  { title: "Chegada", description: "Sem necessidade de preparo especial" },
  {
    title: "Posicionamento",
    description: "O paciente é posicionado no equipamento de forma rápida e confortável",
  },
  {
    title: "Captura",
    description: "O aparelho realiza uma rotação ao redor da cabeça capturando a arcada completa em segundos",
  },
  {
    title: "Processamento",
    description: "A imagem digital é gerada automaticamente pelo software do equipamento",
  },
  { title: "Entrega", description: examDeliveryStep },
]

export const panoramicaDiferenciais: string[] = [
  "Equipamento digital de última geração com alta resolução",
  diferencialDeliveryWithReport,
  expressReportDiferencial,
  "Sem necessidade de preparo especial",
  "Atendimento sem filas e com hora marcada",
  "Atendimento humanizado e ágil nas duas unidades em Marabá",
  "Referência para dentistas de mais de 20 cidades da região",
  "Integração com os demais exames da RX Digital para documentação completa",
]

export const panoramicaComparisonColumns: ComparisonColumn[] = [
  { key: "periapical", label: "Raio X Periapical", href: getServiceHref("radiografia-periapical") },
  { key: "panoramica", label: "Raio X Panorâmico" },
]

export const panoramicaComparisonRows: ComparisonRow[] = [
  { label: "Área visualizada", values: { periapical: "1 a 3 dentes", panoramica: "Arcada completa" } },
  { label: "Indicação principal", values: { periapical: "Diagnóstico localizado", panoramica: "Avaliação geral" } },
  { label: "Uso em ortodontia", values: { periapical: "Não", panoramica: "Sim" } },
  { label: "Planejamento de implantes", values: { periapical: "Parcial", panoramica: "Sim" } },
  { label: "Avaliação de seios da face", values: { periapical: "Não", panoramica: "Sim" } },
  { label: "Frequência de uso", values: { periapical: "Pontual", panoramica: "Rotina anual" } },
  { label: "Resultado", values: { periapical: "Arquivo digital", panoramica: "Arquivo digital" } },
]

export const panoramicaFaqs: { question: string; answer: string }[] = [
  {
    question: "O que é o raio x panorâmico?",
    answer:
      "O raio x panorâmico, também chamado de radiografia panorâmica, é um exame de imagem que captura toda a arcada dentária em uma única chapa digital. É o exame mais solicitado na odontologia, indicado para avaliações de rotina, ortodontia, implantes e muito mais.",
  },
  {
    question: "Preciso de pedido do dentista?",
    answer:
      "Não é obrigatório. O paciente pode solicitar diretamente. Porém, se você tem indicação do seu dentista, traga a solicitação para que possamos registrar corretamente o exame.",
  },
  {
    question: "O exame tem radiação?",
    answer:
      "Sim, como todo exame radiológico. Porém, a dose de radiação do raio x panorâmico é muito baixa e considerada segura para a maioria dos pacientes, incluindo crianças e adultos.",
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
    question: "Preciso de algum preparo antes do exame?",
    answer:
      "Não. O raio x panorâmico não exige nenhum preparo especial. Basta retirar objetos metálicos da região da cabeça e pescoço antes do exame.",
  },
  {
    question: "O exame está disponível em quais unidades?",
    answer:
      "O raio x panorâmico está disponível nas duas unidades em Marabá: Unidade Novo Horizonte e Unidade Nova Marabá, no Shopping Verdes Mares.",
  },
]

export const panoramicaRegionalDescription =
  "A RX Digital é referência em raio x panorâmico para pacientes e dentistas de mais de 20 cidades do Pará e Maranhão. Se você vem de outra cidade, preencha o formulário e nossa equipe vai organizar seu atendimento com agilidade."

export const panoramicaPartnerText =
  `Oferecemos atendimento prioritário para clínicas parceiras, ${partnerDeliveryWithReport}. O raio x panorâmico da RX Digital é a base para documentações ortodônticas, planejamentos de implantes e avaliações de rotina dos seus pacientes.`

export const panoramicaHeroSubtitle =
  "Radiografia panorâmica digital com visão completa da arcada dentária, com acesso online às imagens no mesmo dia e envio por e-mail. Laudo em até 3 dias úteis, ou em até 12h com laudo expresso (taxa adicional)."

export const panoramicaAboutDelivery = `Na RX Digital, o raio x panorâmico é realizado com equipamento digital de última geração, ${examDeliveryWithReport}.`

export const panoramicaFinalCtaSubtitle = `${finalCtaDeliveryWithReport} Nossa equipe entra em contato assim que você preencher o formulário.`
