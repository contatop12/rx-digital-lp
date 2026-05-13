"use client"

import { faqHowReceiveAnswer, faqWhenReadyAnswer } from "@/lib/delivery-policy"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type FAQItem = {
  question: string
  answer: string
}

const defaultFaqs: FAQItem[] = [
  {
    question: "Preciso de pedido do dentista?",
    answer:
      "Depende do exame. A tomografia dentária e a documentação ortodôntica geralmente exigem pedido do dentista. O raio x panorâmico e a radiografia periapical podem ser solicitados diretamente pelo paciente. Se tiver dúvidas, preencha o formulário e nossa equipe vai orientar você.",
  },
  {
    question: "Quanto tempo demora o exame?",
    answer:
      "A maioria dos exames dura entre 10 e 30 minutos, dependendo do tipo. O atendimento é com hora marcada, sem filas.",
  },
  {
    question: "Quando fica pronto o laudo?",
    answer: faqWhenReadyAnswer,
  },
  {
    question: "Aceita convênio?",
    answer:
      "No momento, não trabalhamos com convênios. Atendemos de forma particular. Entre em contato para saber os valores.",
  },
  {
    question: "Como recebo os resultados?",
    answer: faqHowReceiveAnswer,
  },
  {
    question: "Atendem pacientes de outras cidades?",
    answer:
      "Sim. A RX Digital é referência para pacientes e dentistas de mais de 20 cidades do Pará e Maranhão. Se você vem de outra cidade, preencha o formulário e nossa equipe vai organizar seu atendimento.",
  },
  {
    question: "Os exames são seguros?",
    answer:
      "Sim. Todos os exames seguem os protocolos de segurança estabelecidos pelo Conselho Federal de Odontologia, com equipamentos calibrados e equipe treinada.",
  },
  {
    question: "Posso fazer exame durante a gravidez?",
    answer:
      "Gestantes devem informar a equipe antes do exame. Em alguns casos, o exame pode ser realizado com proteção adequada. A decisão é sempre feita com segurança e orientação da responsável técnica.",
  },
]

type FAQProps = {
  items?: FAQItem[]
  sectionId?: string
}

export function FAQ({ items, sectionId = "faq" }: FAQProps) {
  const data = items ?? defaultFaqs

  return (
    <section id={sectionId} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços. Se precisar de mais informações, fale conosco pelo WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {data.map((faq, index) => (
              <AccordionItem
                key={`${faq.question}-${index}`}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
