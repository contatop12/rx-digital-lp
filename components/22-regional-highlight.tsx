"use client"

import { Button } from "@/components/ui/button"
import { useLeadModal } from "./13-lead-modal"

type RegionalHighlightProps = {
  title?: string
  description: string
}

export function RegionalHighlight({
  title = "Atendemos pacientes de toda a região",
  description,
}: RegionalHighlightProps) {
  const { openModal } = useLeadModal()

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-8 text-center md:p-10">
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{description}</p>
          <Button onClick={openModal} variant="whatsapp" size="lg">
            Agendar Agora
          </Button>
        </div>
      </div>
    </section>
  )
}
