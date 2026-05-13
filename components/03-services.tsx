"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Box, Scan, FileText, Monitor, LayoutGrid, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLeadModal } from "./13-lead-modal"
import {
  getServiceHref,
  getServicesByCategory,
  serviceCategories,
  type ServiceCategoryId,
} from "@/lib/services"

const categoryIcons: Record<ServiceCategoryId, typeof Box> = {
  todos: LayoutGrid,
  "tomografia-3d": Box,
  radiografias: Scan,
  ortodontia: FileText,
  "scanner-digital": Monitor,
}

export function Services() {
  const [activeTab, setActiveTab] = useState<ServiceCategoryId>("todos")
  const { openModal } = useLeadModal()

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Exames e Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o serviço que você precisa. Se estiver em dúvida, nossa equipe orienta no WhatsApp.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ServiceCategoryId)} className="w-full">
          <TabsList className="mb-8 h-auto w-full flex-wrap justify-center gap-2 overflow-x-auto bg-transparent p-0">
            {serviceCategories.map((category) => {
              const Icon = categoryIcons[category.id]
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 rounded-full border border-border px-6 py-3 transition-all data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(" ")[0]}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2">
                {getServicesByCategory(category.id).map((service) => {
                  const Icon = categoryIcons[category.id]
                  return (
                    <Card
                      key={service.slug}
                      className="group border-border transition-shadow duration-300 hover:shadow-lg"
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="rounded-xl bg-primary/10 p-3 text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="mb-2 text-lg font-semibold text-foreground">
                              <Link
                                href={getServiceHref(service.slug)}
                                className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                              >
                                {service.name}
                              </Link>
                            </CardTitle>
                            <CardDescription className="leading-relaxed text-muted-foreground">
                              {service.shortDescription}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4 overflow-hidden rounded-xl border border-border/70 bg-secondary/30">
                          <div className="relative aspect-video w-full">
                            <Image
                              src={encodeURI(service.image).replace(/\+/g, "%2B")}
                              alt={`Imagem do serviço ${service.name}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <p className="mb-2 text-sm font-medium text-foreground">Indicado para:</p>
                          <div className="flex flex-wrap gap-2">
                            {service.indications.map((indication) => (
                              <span
                                key={indication}
                                className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                              >
                                {indication}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <Button asChild variant="outline" className="w-full rounded-full border-2 sm:flex-1">
                            <Link href={getServiceHref(service.slug)}>
                              Saiba Mais
                              <ChevronRight className="size-4!" />
                            </Link>
                          </Button>
                          <Button
                            onClick={openModal}
                            variant="outline"
                            className="w-full rounded-full border-2 transition-colors duration-200 group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#25D366]/25 sm:flex-1"
                          >
                            Agendar este Exame
                            <ChevronRight className="size-4! opacity-80 transition-transform group-hover:translate-x-0.5" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
