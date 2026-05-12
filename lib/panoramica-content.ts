import type { ExamStep } from "@/components/19-exam-stepper"

export type PanoramicaTrustIcon = "cpu" | "clock" | "messageCircle" | "shield"

export const panoramicaTrustBadges: { icon: PanoramicaTrustIcon; text: string }[] = [
  { icon: "cpu", text: "Exame 100% digital" },
  { icon: "clock", text: "Resultado no mesmo dia" },
  { icon: "messageCircle", text: "Avaliação 5.0 no Google" },
  { icon: "shield", text: "Laudo especializado" },
]

export const panoramicaIndications: { emoji: string; title: string; description: string }[] = [
  { emoji: "🦷", title: "Planejamento ortodôntico", description: "Base para aparelhos e alinhadores" },
  { emoji: "🔩", title: "Implantes dentários", description: "Avaliação do osso disponível" },
  { emoji: "🦴", title: "Cirurgias e extrações", description: "Incluindo sisos (terceiros molares)" },
  { emoji: "🔍", title: "Diagnóstico de lesões", description: "Cistos, tumores, infecções e avaliação da articulação da mandíbula (ATM)" },
  { emoji: "👶", title: "Acompanhamento infantil", description: "Desenvolvimento da dentição" },
  { emoji: "🦷", title: "Check-up geral", description: "Avaliação preventiva completa" },
]

export const panoramicaExamSteps: ExamStep[] = [
  { title: "Agendamento", description: "Pelo WhatsApp, sem burocracia" },
  { title: "Chegada", description: "Sem necessidade de preparo especial" },
  { title: "Exame", description: "Duração de apenas 3 a 5 minutos" },
  { title: "Resultado", description: "Entregue digitalmente no mesmo dia" },
  {
    title: "Laudo",
    description:
      "Assinado pela Dra. Jéssica Arcoverde Lara, especialista em Radiologia Odontológica",
  },
]

export const panoramicaDiferenciais: string[] = [
  "Equipamento digital de última geração",
  "Imagem de alta resolução para diagnóstico preciso",
  "Resultado entregue pelo WhatsApp no mesmo dia",
  "Laudo especializado pela Dra. Jéssica (CRO-PA CD-7626)",
  "Atendimento humanizado e sem filas",
  "Duas unidades em Marabá: Novo Horizonte e Shopping Verdes Mares",
  "Referência para dentistas de mais de 20 cidades da região",
]

export const panoramicaFaqs: { question: string; answer: string }[] = [
  {
    question: "Quanto tempo dura o exame?",
    answer:
      "O exame em si dura de 3 a 5 minutos. O tempo total na clínica, incluindo cadastro e posicionamento, é de aproximadamente 15 a 20 minutos.",
  },
  {
    question: "Quando fico pronto o resultado?",
    answer:
      "As imagens digitais são entregues no mesmo dia pelo WhatsApp. O laudo radiológico é emitido em até 24 horas.",
  },
  {
    question: "O exame tem radiação?",
    answer:
      "Sim, como todo exame de raio-x, há exposição à radiação. Porém, a dose é muito baixa e considerada segura. Nossos equipamentos digitais reduzem a exposição em até 70% comparado a equipamentos convencionais.",
  },
  {
    question: "Gestantes podem fazer?",
    answer:
      "Em casos de necessidade clínica, o exame pode ser realizado com proteção adequada. Informe sempre sobre a gravidez antes do exame para que nossa equipe tome os devidos cuidados.",
  },
  {
    question: "Aceita convênio?",
    answer: "Consulte nossa equipe pelo WhatsApp para verificar as formas de pagamento disponíveis.",
  },
]

export const partnerDentistMessage =
  "Olá! Sou dentista e quero ser parceiro da RX Digital para indicar meus pacientes."

export const partnerDentistWhatsappLink = `https://wa.me/5594991608181?text=${encodeURIComponent(partnerDentistMessage)}`
