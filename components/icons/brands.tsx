import { SiGoogle, SiGooglemaps, SiWhatsapp } from "react-icons/si"
import { cn } from "@/lib/utils"

export function WhatsAppIcon({ className }: { className?: string }) {
  return <SiWhatsapp className={cn("shrink-0", className)} aria-hidden />
}

export function GoogleIcon({ className }: { className?: string }) {
  return <SiGoogle className={cn("shrink-0", className)} aria-hidden />
}

export function GoogleMapsIcon({ className }: { className?: string }) {
  return <SiGooglemaps className={cn("shrink-0", className)} aria-hidden />
}
