import { ServiceLandingPage } from "@/components/25-service-landing"
import { impressaoContent, impressaoMetadata } from "@/lib/impressao-3d-content"

export const metadata = impressaoMetadata

export default function Impressao3DOdontologicaPage() {
  return <ServiceLandingPage content={impressaoContent} />
}
