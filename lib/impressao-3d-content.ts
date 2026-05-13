import { createElement } from "react"
import type { Metadata } from "next"
import type { ServiceLandingContent } from "@/components/25-service-landing"
import { getServiceHref } from "@/lib/services"

export const impressaoMetadata: Metadata = {
  title: "Impressão 3D Odontológica em Marabá | Biomodelos e Guias | RX Digital",
  description:
    "Impressão 3D odontológica em Marabá para biomodelos anatômicos e guias cirúrgicos com alta precisão. Integração com tomografia e scanner intraoral na RX Digital.",
  openGraph: {
    title: "Impressão 3D Odontológica em Marabá | Biomodelos e Guias | RX Digital",
    description:
      "Impressão 3D odontológica em Marabá para biomodelos anatômicos e guias cirúrgicos com alta precisão. Integração com tomografia e scanner intraoral na RX Digital.",
    type: "website",
    locale: "pt_BR",
  },
}

export const impressaoContent: ServiceLandingContent = {
  slug: "impressao-3d-odontologica",
  heroTitle: "Impressão 3D Odontológica em Marabá",
  heroSubtitle:
    "Biomodelos anatômicos e guias cirúrgicos impressos em 3D com alta precisão, feitos a partir de tomografia computadorizada e planejamento 3D.",
  heroImage: "/exames_e_servicos/Arquivos 3D e Impressão 3D.webp",
  heroImageAlt: "Arquivos 3D e impressão odontológica na RX Digital em Marabá",
  trustBadges: [
    { icon: "cpu", text: "Produção digital em 3D" },
    { icon: "clock", text: "Fluxo ágil para parceiros" },
    { icon: "messageCircle", text: "Avaliação 5.0 no Google" },
    { icon: "shield", text: "Alta precisão clínica" },
  ],
  aboutTitle: "O que é a Impressão 3D Odontológica?",
  aboutContent: [
    createElement(
      "p",
      { key: "impressao-about-1" },
      "A impressão 3D odontológica transforma arquivos digitais em peças físicas, como biomodelos da arcada e guias cirúrgicos para implantes e outras cirurgias guiadas.",
    ),
    createElement(
      "p",
      { key: "impressao-about-2" },
      "O serviço apoia o planejamento pré-operatório, reduz improviso no centro cirúrgico e melhora a previsibilidade de casos que exigem leitura tridimensional do osso e dos dentes.",
    ),
    createElement(
      "p",
      { key: "impressao-about-3" },
      "Na RX Digital, a impressão 3D conversa com tomografia Cone Beam, scanner intraoral e demais exames da clínica, oferecendo um fluxo digital completo para dentistas e pacientes da região.",
    ),
  ],
  comparison: {
    title: "Impressão 3D x Planejamento sem Guia Físico",
    columns: [
      { key: "semGuia", label: "Sem guia impresso", href: getServiceHref("tomografia-cone-beam") },
      { key: "impressao", label: "Impressão 3D odontológica" },
    ],
    rows: [
      {
        label: "Visualização do caso",
        values: { semGuia: "Apenas em tela", impressao: "Modelo físico para estudo" },
      },
      {
        label: "Planejamento de implantes",
        values: { semGuia: "Base digital", impressao: "Guia cirúrgico personalizado" },
      },
      {
        label: "Previsibilidade no ato cirúrgico",
        values: { semGuia: "Depende da experiência clínica", impressao: "Referência física do planejamento" },
      },
      {
        label: "Integração com exames 3D",
        values: { semGuia: "Parcial", impressao: "Fluxo completo na RX Digital" },
      },
      {
        label: "Uso em casos complexos",
        values: { semGuia: "Limitado", impressao: "Indicado para maior controle" },
      },
      {
        label: "Entrega",
        values: { semGuia: "Somente arquivo", impressao: "Peça física pronta para uso clínico" },
      },
    ],
  },
  indicationsTitle: "Quando a impressão 3D odontológica é indicada?",
  indications: [
    {
      emoji: "🧭",
      title: "Guias para implantes",
      description: "Posicionamento planejado com apoio físico durante a cirurgia",
    },
    {
      emoji: "🦴",
      title: "Biomodelos anatômicos",
      description: "Estudo da arcada em volume antes de procedimentos complexos",
    },
    {
      emoji: "🔬",
      title: "Planejamento cirúrgico",
      description: "Simulação e ensaio de etapas em casos de alta complexidade",
    },
    {
      emoji: "🦷",
      title: "Reabilitações guiadas",
      description: "Suporte a tratamentos que exigem precisão tridimensional",
    },
    {
      emoji: "📦",
      title: "Fluxo digital com laboratório",
      description: "Peças produzidas a partir de arquivos validados na clínica",
    },
    {
      emoji: "🤝",
      title: "Casos de dentistas parceiros",
      description: "Produção alinhada a tomografia, scanner e documentação digital",
    },
  ],
  examSteps: [
    { title: "Solicitação", description: "Pedido feito pelo dentista ou clínica parceira com indicação do caso" },
    {
      title: "Arquivo digital",
      description: "Envio ou integração do projeto 3D a partir de tomografia, scanner ou outro exame",
    },
    {
      title: "Validação",
      description: "Conferência do planejamento e definição da peça a ser impressa",
    },
    {
      title: "Impressão 3D",
      description: "Fabricação do biomodelo ou guia cirúrgico com controle de qualidade",
    },
  ],
  diferenciais: [
    "Impressão 3D odontológica integrada aos exames digitais da RX Digital",
    "Biomodelos e guias cirúrgicos com foco em precisão clínica",
    "Fluxo pensado para dentistas parceiros e casos de implantes",
    "Conexão com tomografia Cone Beam e scanner intraoral na mesma clínica",
    "Atendimento organizado nas unidades em Marabá",
    "Referência regional para documentação e produção digital",
    "Suporte da equipe para alinhar arquivo, planejamento e entrega da peça",
  ],
  dentistNoteTitle: "Quem pode solicitar a impressão 3D?",
  dentistNote:
    "A impressão 3D odontológica é um serviço voltado ao planejamento clínico e costuma ser solicitada pelo dentista ou pela clínica responsável pelo caso. Se você é paciente, converse com o profissional que acompanha seu tratamento para definir a necessidade do biomodelo ou do guia cirúrgico.",
  regionalDescription:
    "A RX Digital atende dentistas e pacientes de mais de 20 cidades do Pará e Maranhão com tomografia, scanner intraoral e impressão 3D odontológica. Se você vem de outra cidade, preencha o formulário e nossa equipe orienta o fluxo do caso.",
  partnerDescription:
    "Oferecemos atendimento prioritário para clínicas parceiras na produção de biomodelos e guias cirúrgicos. A impressão 3D da RX Digital complementa tomografia, scanner intraoral e demais exames digitais dos seus pacientes.",
  faqs: [
    {
      question: "O que é a impressão 3D odontológica?",
      answer:
        "É a fabricação de peças físicas a partir de arquivos digitais, como biomodelos da arcada e guias cirúrgicos usados em planejamento e procedimentos odontológicos.",
    },
    {
      question: "Quais peças podem ser produzidas?",
      answer:
        "Os casos mais comuns incluem biomodelos anatômicos e guias cirúrgicos para implantes. A peça final depende do planejamento feito a partir dos exames digitais do paciente.",
    },
    {
      question: "Preciso de tomografia ou scanner antes?",
      answer:
        "Na maioria dos casos, sim. A impressão 3D utiliza arquivos digitais gerados por exames como tomografia Cone Beam ou scanner intraoral, que também estão disponíveis na RX Digital.",
    },
    {
      question: "O paciente pode solicitar diretamente?",
      answer:
        "O serviço normalmente é solicitado pelo dentista ou pela clínica que conduz o tratamento. O profissional define se o biomodelo ou o guia cirúrgico é necessário para o caso.",
    },
    {
      question: "Quanto tempo leva a produção?",
      answer:
        "O prazo varia conforme a complexidade da peça e a validação do arquivo digital. A equipe informa o cronograma após análise do caso.",
    },
    {
      question: "A impressão 3D substitui o planejamento clínico?",
      answer:
        "Não. A peça impressa é uma ferramenta de apoio ao planejamento e à execução do tratamento, sempre com indicação e responsabilidade do dentista.",
    },
    {
      question: "O serviço está disponível em quais unidades?",
      answer:
        "A impressão 3D odontológica é oferecida pela RX Digital em Marabá, com integração aos demais exames digitais nas unidades Novo Horizonte e Nova Marabá.",
    },
  ],
  finalCtaTitle: "Solicite Impressão 3D Odontológica em Marabá",
  finalCtaSubtitle:
    "Biomodelos e guias cirúrgicos com fluxo digital integrado. Nossa equipe entra em contato assim que você preencher o formulário.",
}
