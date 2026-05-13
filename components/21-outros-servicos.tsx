"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLeadModal } from "./13-lead-modal"
import { getOtherServices, getServiceHref } from "@/lib/services"

type OutrosServicosProps = {
  currentSlug: string
}

export function OutrosServicos({ currentSlug }: OutrosServicosProps) {
  const { openModal } = useLeadModal()
  const items = getOtherServices(currentSlug)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Outros Exames e Serviços</h2>
          <p className="text-lg text-muted-foreground">
            Conheça todos os exames disponíveis na RX Digital e tire suas dúvidas com nossa equipe.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((service) => (
            <Card key={service.slug} className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href={getServiceHref(service.slug)} className="underline-offset-4 hover:text-accent hover:underline">
                    {service.name}
                  </Link>
                </CardTitle>
                <CardDescription>{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-border/70 bg-secondary/30">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={encodeURI(service.image).replace(/\+/g, "%2B")}
                      alt={`Imagem do serviço ${service.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="outline" className="w-full rounded-full border-2 sm:flex-1">
                    <Link href={getServiceHref(service.slug)}>
                      Saiba Mais
                      <ChevronRight className="size-4!" />
                    </Link>
                  </Button>
                  <Button onClick={openModal} variant="outline" className="w-full rounded-full border-2 sm:flex-1">
                    Agendar este Exame
                    <ChevronRight className="size-4!" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
