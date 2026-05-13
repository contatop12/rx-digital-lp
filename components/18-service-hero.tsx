"use client"

import Image from "next/image"
import type { StaticImageData } from "next/image"
import { Cpu, Clock, MessageCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLeadModal } from "./13-lead-modal"
import { cn } from "@/lib/utils"

const trustIconMap = {
  cpu: Cpu,
  clock: Clock,
  messageCircle: MessageCircle,
  shield: Shield,
} as const

export type ServiceHeroTrustIcon = keyof typeof trustIconMap

type TrustBadge = { icon: ServiceHeroTrustIcon; text: string }

type ServiceHeroProps = {
  title: string
  subtitle: string
  backgroundImage: string | StaticImageData
  backgroundAlt: string
  trustBadges?: TrustBadge[]
}

export function ServiceHero({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt,
  trustBadges,
}: ServiceHeroProps) {
  const { openModal } = useLeadModal()

  return (
    <section className="relative flex min-h-[min(820px,90vh)] items-center overflow-hidden pt-20 pb-24 md:pb-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3d2e]/60 via-[#1a5240]/65 to-[#2d6a4f]/60" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="flex flex-col items-center justify-start space-y-6 text-white">
            <h1 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              {title}
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
              {subtitle}
            </p>

            <div className="pt-4">
              <Button
                onClick={openModal}
                variant="whatsapp"
                size="xl"
                className="text-lg font-semibold shadow-xl"
              >
                Agendar Agora
              </Button>
            </div>

            {trustBadges && trustBadges.length > 0 ? (
              <div className="mx-auto w-full max-w-4xl pt-10 align-middle xl:max-w-5xl">
                <div
                  className={cn(
                    "mx-auto grid max-w-full gap-3 sm:gap-4 md:gap-3 lg:gap-4",
                    trustBadges.length <= 2 && "max-w-lg grid-cols-1 sm:grid-cols-2",
                    trustBadges.length === 3 && "grid-cols-1 sm:grid-cols-3",
                    trustBadges.length >= 4 && "grid-cols-2 md:grid-cols-4",
                  )}
                >
                  {trustBadges.map((badge) => {
                    const Icon = trustIconMap[badge.icon]
                    return (
                      <div
                        key={badge.text}
                        className="group rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 backdrop-blur-sm transition-colors duration-200 hover:bg-white/15 sm:px-5 sm:py-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/12 ring-1 ring-white/20 transition-colors duration-200 group-hover:bg-white/18 sm:h-11 sm:w-11">
                            <Icon className="h-5 w-5 text-white/90" />
                          </div>
                          <span className="min-w-0 text-left text-xs font-medium leading-tight text-white sm:text-sm">
                            {badge.text}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V60C240 20 480 0 720 20C960 40 1200 80 1440 60V100H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
