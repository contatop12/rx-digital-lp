import { createElement } from "react"
import type { Metadata } from "next"
import type { ServiceLandingContent } from "@/components/25-service-landing"
import { getServiceHref } from "@/lib/services"

export const scannerMetadata: Metadata = {
  title: "Scanner Intraoral em Marabá | Modelo Digital 3D | RX Digital",
  description:
    "Scanner intraoral em Marabá com modelo digital 3D da boca, sem moldagem convencional. Alta precisão para próteses, alinhadores e implantes. Agende na RX Digital.",
  openGraph: {
    title: "Scanner Intraoral em Marabá | Modelo Digital 3D | RX Digital",
    description:
      "Scanner intraoral em Marabá com modelo digital 3D da boca, sem moldagem convencional. Alta precisão para próteses, alinhadores e implantes. Agende na RX Digital.",
    type: "website",
    locale: "pt_BR",
  },
}

export const scannerContent: ServiceLandingContent = {
  slug: "scanner-intraoral",
  heroTitle: "Scanner Intraoral em Marabá",
  heroSubtitle:
    "Modelo digital 3D da boca com alta precisão, sem moldagem convencional, com entrega do arquivo no mesmo dia pelo WhatsApp.",
  heroImage: "/exames_e_servicos/Scanner e Entrega Digital.webp",
  heroImageAlt: "Scanner intraoral e entrega digital de modelos 3D na RX Digital em Marabá",
  trustBadges: [
    { icon: "cpu", text: "Captura 100% digital" },
    { icon: "clock", text: "Arquivo no mesmo dia" },
    { icon: "messageCircle", text: "Avaliação 5.0 no Google" },
    { icon: "shield", text: "Sem moldagem convencional" },
  ],
  aboutTitle: "O que é o Scanner Intraoral?",
  aboutContent: [
    createElement(
      "p",
      { key: "scanner-about-1" },
      "O scanner intraoral registra a forma dos dentes e das gengivas com uma câmera óptica de alta resolução, gerando um modelo digital 3D em poucos minutos.",
    ),
    createElement(
      "p",
      { key: "scanner-about-2" },
      "O exame substitui a moldagem com massa, reduz desconforto, evita distorções do material e facilita o planejamento de próteses, coroas, facetas, alinhadores e implantes.",
    ),
    createElement(
      "p",
      { key: "scanner-about-3" },
      "Na RX Digital, o scanner intraoral integra tomografia, radiografias e impressão 3D odontológica para que dentistas e pacientes da região avancem com documentação digital completa.",
    ),
  ],
  comparison: {
    title: "Scanner Intraoral x Moldagem Convencional",
    columns: [
      { key: "convencional", label: "Moldagem convencional" },
      { key: "scanner", label: "Scanner intraoral" },
    ],
    rows: [
      {
        label: "Conforto do paciente",
        values: { convencional: "Massa na boca", scanner: "Captura sem massa" },
      },
      {
        label: "Precisão do modelo",
        values: { convencional: "Sujeita a distorções", scanner: "Alta fidelidade digital" },
      },
      {
        label: "Tempo na cadeira",
        values: { convencional: "Mais longo", scanner: "Captura em minutos" },
      },
      {
        label: "Uso em alinhadores",
        values: { convencional: "Sim", scanner: "Sim, com mais precisão" },
      },
      {
        label: "Integração com CAD/CAM",
        values: { convencional: "Depende de digitalização", scanner: "Arquivo pronto para uso" },
      },
      {
        label: "Entrega do resultado",
        values: { convencional: "Modelo físico", scanner: "Arquivo digital no mesmo dia" },
      },
    ],
  },
  indicationsTitle: "Quando o scanner intraoral é indicado?",
  indications: [
    {
      emoji: "🦷",
      title: "Próteses e coroas",
      description: "Base digital precisa para laboratório e confecção de restaurações",
    },
    {
      emoji: "✨",
      title: "Facetas e estética",
      description: "Planejamento visual do sorriso com medidas confiáveis",
    },
    {
      emoji: "📐",
      title: "Alinhadores invisíveis",
      description: "Registro inicial e acompanhamento do tratamento ortodôntico",
    },
    {
      emoji: "🔩",
      title: "Planejamento de implantes",
      description: "Modelo digital para estudo da arcada antes da cirurgia",
    },
    {
      emoji: "🔄",
      title: "Reabilitações complexas",
      description: "Documentação completa em casos com múltiplas restaurações",
    },
    {
      emoji: "🤝",
      title: "Fluxo digital com o dentista",
      description: "Arquivo compartilhável para clínicas parceiras e laboratórios",
    },
  ],
  examSteps: [
    { title: "Agendamento", description: "Pelo formulário no site, com indicação do dentista ou solicitação direta" },
    { title: "Chegada", description: "Sem necessidade de jejum ou preparo especial" },
    {
      title: "Captura intraoral",
      description: "A ponteira do scanner percorre os dentes e registra a arcada em tempo real",
    },
    {
      title: "Processamento",
      description: "O software monta o modelo 3D e valida a qualidade da digitalização",
    },
    { title: "Entrega", description: "Arquivo digital enviado pelo WhatsApp no mesmo dia" },
  ],
  diferenciais: [
    "Scanner intraoral com captura digital de alta resolução",
    "Modelo 3D entregue no mesmo dia pelo WhatsApp",
    "Experiência mais confortável, sem moldagem com massa",
    "Integração com tomografia, radiografias e impressão 3D na RX Digital",
    "Atendimento com hora marcada nas unidades em Marabá",
    "Referência para dentistas de mais de 20 cidades da região",
    "Suporte a clínicas parceiras com fluxo digital completo",
  ],
  dentistNoteTitle: "Preciso de pedido do dentista?",
  dentistNote:
    "Na maioria dos casos, o scanner intraoral é solicitado pelo dentista para confecção de próteses, alinhadores ou planejamento de tratamento. Se você já tem indicação, traga a solicitação. Pacientes em tratamento ativo também podem agendar com orientação da clínica responsável.",
  regionalDescription:
    "A RX Digital é referência em scanner intraoral para pacientes e dentistas de mais de 20 cidades do Pará e Maranhão. Se você vem de outra cidade, preencha o formulário e nossa equipe organiza o atendimento com agilidade.",
  partnerDescription:
    "Oferecemos atendimento prioritário para clínicas parceiras, com entrega do arquivo digital pelo WhatsApp no mesmo dia. O scanner intraoral da RX Digital acelera próteses, alinhadores e planejamentos que dependem de modelo 3D confiável.",
  faqs: [
    {
      question: "O que é o scanner intraoral?",
      answer:
        "É um exame que captura a forma dos dentes e das gengivas com uma câmera intraoral, gerando um modelo digital 3D sem moldagem convencional com massa.",
    },
    {
      question: "O scanner intraoral dói ou incomoda?",
      answer:
        "O procedimento é confortável para a maioria dos pacientes. A ponteira percorre os dentes sem a sensação de massa na boca, o que costuma ser mais agradável que a moldagem tradicional.",
    },
    {
      question: "Preciso de pedido do dentista?",
      answer:
        "Na maioria dos casos, sim. O scanner costuma fazer parte de um tratamento odontológico planejado pelo dentista. Traga a solicitação quando já houver indicação clínica.",
    },
    {
      question: "Quanto tempo dura a captura?",
      answer:
        "A digitalização costuma levar poucos minutos, dependendo da extensão da arcada e da complexidade do caso. O tempo total na clínica inclui posicionamento e validação do arquivo.",
    },
    {
      question: "Quando fica pronto o arquivo digital?",
      answer: "O modelo 3D é entregue no mesmo dia pelo WhatsApp, após processamento e validação da captura.",
    },
    {
      question: "Para que serve o arquivo gerado?",
      answer:
        "O arquivo digital pode ser usado em próteses, coroas, facetas, alinhadores, planejamento de implantes e integração com outros exames da RX Digital, como tomografia e impressão 3D.",
    },
    {
      question: "O exame está disponível em quais unidades?",
      answer:
        "O scanner intraoral está disponível nas duas unidades em Marabá: Unidade Novo Horizonte e Unidade Nova Marabá, no Shopping Verdes Mares.",
    },
  ],
  finalCtaTitle: "Agende seu Scanner Intraoral em Marabá",
  finalCtaSubtitle:
    "Modelo digital 3D com entrega no mesmo dia pelo WhatsApp. Nossa equipe entra em contato assim que você preencher o formulário.",
}
