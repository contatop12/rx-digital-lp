"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Instagram } from "lucide-react"

const units = [
  {
    name: "Unidade Novo Horizonte (disponível Tomografia)",
    address: "Av. Tocantins, 611 - B - Novo Horizonte, Marabá - PA",
    mapLink:
      "https://www.google.com/search?q=rx+digital+maraba&oq=rx+di&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MggIAhBFGCcYOzIJCAMQRRg7GIAEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHOTM5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&lqi=ChFyeCBkaWdpdGFsIG1hcmFiYUix7f_cubeAgAhaHRAAEAEYABgBGAIiEXJ4IGRpZ2l0YWwgbWFyYWJhkgEQZGVudGFsX3JhZGlvbG9neQ#rlimm=6611756993345909540",
  },
  {
    name: "Unidade Nova Marabá - Shopping Verdes Mares",
    address: "Folha 27 quadra especial - Nova - Nova Marabá, Marabá - PA",
    mapLink:
      "https://www.google.com/search?q=rx+digital+maraba&oq=rx+di&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MggIAhBFGCcYOzIJCAMQRRg7GIAEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHOTM5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&lqi=ChFyeCBkaWdpdGFsIG1hcmFiYUiu14Pzl72AgAhaHRAAEAEYABgBGAIiEXJ4IGRpZ2l0YWwgbWFyYWJhkgENZGVudGFsX2NsaW5pYw#rlimm=13355660969448100370",
  },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/_rxdigital/", label: "Instagram" },
]

const mapUnits = [
  {
    name: "Unidade Novo Horizonte",
    query:
      "RX Digital Unidade Novo Horizonte, Av. Tocantins, 611 - B - Novo Horizonte, Marabá - PA, 68503-660",
  },
  {
    name: "Unidade Nova Marabá - Shopping Verdes Mares",
    query:
      "RX Digital Unidade Nova Marabá - Shopping Verdes Mares, Folha 27 quadra especial - Nova Marabá, Marabá - PA, 68509-100",
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rx-digital-branca-fundo-transparente-Ry0EQzmB8xDsCkmq3MLCWXxFWVu2Ux.png"
              alt="RX Digital"
              width={140}
              height={45}
              className="h-10 w-auto mb-4"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Radiologia odontológica com tecnologia de ponta e atendimento humanizado em Marabá e região.
            </p>
          </div>

          {/* Units */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-background mb-4">Unidades</h3>
            <div className="space-y-4">
              {units.map((unit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <a
                      href={unit.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-background hover:text-accent transition-colors"
                    >
                      {unit.name}
                    </a>
                    <p className="text-xs text-background/70">{unit.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-background mb-4">Contato</h3>
            <div className="space-y-3">
              <div>
                <p className="mb-1 flex items-center gap-2 text-xs text-background/50">
                  <span>Novo Horizonte</span>
                  <span>Disponivel Turmografia</span>
                </p>
                <a 
                  href="tel:+5594991608181" 
                  className="flex items-center gap-2 text-background/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(94) 99160-8181</span>
                </a>
              </div>
              <div>
                <p className="text-xs text-background/50 mb-1">Nova Marabá</p>
                <a 
                  href="tel:+5594991558181" 
                  className="flex items-center gap-2 text-background/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">(94) 99155-8181</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-accent hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-background mb-4">Links Rápidos</h3>
            <nav className="space-y-2">
              <Link href="#servicos" className="block text-sm text-background/70 hover:text-white transition-colors">
                Serviços
              </Link>
              <Link href="#avaliacoes" className="block text-sm text-background/70 hover:text-white transition-colors">
                Avaliações
              </Link>
              <Link href="#unidades" className="block text-sm text-background/70 hover:text-white transition-colors">
                Unidades
              </Link>
              <Link href="#dra-jessica" className="block text-sm text-background/70 hover:text-white transition-colors">
                Dra. Jéssica
              </Link>
              <Link href="#faq" className="block text-sm text-background/70 hover:text-white transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-background mb-4">Horários</h3>
            <div className="space-y-2 text-sm">
              <p className="text-background/70">Segunda-feira: 08:00-19:00</p>
              <p className="text-background/70">Terça-feira: 08:00-19:00</p>
              <p className="text-background/70">Quarta-feira: 08:00-19:00</p>
              <p className="text-background/70">Quinta-feira: 08:00-19:00</p>
              <p className="text-background/70">Sexta-feira: 08:00-19:00</p>
              <p className="text-background/70">Sábado: 08:00-12:00</p>
              <p className="text-background/70">Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {mapUnits.map((unit) => {
            const embedUrl = `https://www.google.com/maps?output=embed&q=${encodeURIComponent(unit.query)}`
            const openUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              unit.query,
            )}`

            return (
              <div
                key={unit.name}
                className="overflow-hidden rounded-2xl border border-background/15 bg-background"
              >
                <iframe
                  title={`Mapa da ${unit.name}`}
                  src={embedUrl}
                  className="h-64 w-full sm:h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3 text-foreground">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {unit.name}
                  </p>
                  <a
                    href={openUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm font-medium text-primary hover:opacity-90 transition-opacity"
                  >
                    Abrir no Maps
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2 sm:gap-3">
            <span className="text-sm text-background/60">Site desenvolvido por:</span>
            <a
              href="https://sites.p12digital.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm ring-offset-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="P12 Digital — abrir site"
            >
              <Image
                src="/logotipo_p12.png"
                alt="P12 Digital"
                width={120}
                height={40}
                className="h-9 w-auto sm:h-10"
              />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} RX Digital - Radiologia Odontológica. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-sm text-background/50">
              <Link href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
