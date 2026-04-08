"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso de pedido do dentista?",
    answer: "Sim, para a maioria dos exames é necessário o pedido (requisição) do seu dentista. Isso garante que o exame correto seja realizado e que o laudo seja direcionado para o profissional responsável pelo seu tratamento. Em casos de dúvida, entre em contato conosco pelo WhatsApp.",
  },
  {
    question: "Quanto tempo demora o exame?",
    answer: "Os exames são rápidos e seguros. Uma radiografia panorâmica leva cerca de 5 minutos. A tomografia (Cone Beam) leva de 10 a 15 minutos. A documentação ortodôntica completa pode levar de 20 a 30 minutos, dependendo dos itens solicitados.",
  },
  {
    question: "Quando fica pronto o laudo?",
    answer: "Na maioria dos casos, o laudo fica pronto no mesmo dia ou em até 24 horas úteis. Para exames mais complexos ou documentações completas, o prazo pode ser de até 48 horas. Casos urgentes podem ser priorizados — consulte nossa equipe.",
  },
  {
    question: "Aceita convênio?",
    answer: "Trabalhamos com diversos convênios odontológicos. Entre em contato pelo WhatsApp informando seu convênio para verificarmos a cobertura e procedimentos disponíveis. Também oferecemos condições especiais para pagamento particular.",
  },
  {
    question: "Como recebo os resultados?",
    answer: "Os resultados são entregues de forma 100% digital, através de link seguro por e-mail ou WhatsApp. Você também pode acessar pelo nosso portal online. Se preferir, disponibilizamos impressão física mediante solicitação.",
  },
  {
    question: "Atendem pacientes de outras cidades?",
    answer: "Sim! Somos referência em radiologia odontológica e atendemos pacientes de toda a região, incluindo cidades como Parauapebas, Canaã dos Carajás, Tucuruí, Redenção, Xinguara e muitas outras. Nossa localização em Marabá é estratégica para atender o sudeste do Pará.",
  },
  {
    question: "Os exames são seguros?",
    answer: "Absolutamente. Utilizamos equipamentos modernos com baixa dose de radiação e seguimos todos os protocolos de segurança radiológica. Nossos profissionais são treinados e utilizamos aventais de chumbo e outros equipamentos de proteção quando necessário.",
  },
  {
    question: "Posso fazer exame durante a gravidez?",
    answer: "Exames radiológicos durante a gestação devem ser evitados, especialmente no primeiro trimestre. Se houver necessidade urgente, converse com seu dentista e nossa equipe sobre os riscos e benefícios. Sempre informe nossa equipe se houver possibilidade de gravidez.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços. Se precisar de mais informações, fale conosco pelo WhatsApp.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
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
