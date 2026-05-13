import { ServiceLandingPage } from "@/components/25-service-landing"
import { documentacaoContent, documentacaoMetadata } from "@/lib/documentacao-ortodontica-content"

export const metadata = documentacaoMetadata

export default function DocumentacaoOrtodonticaPage() {
  return <ServiceLandingPage content={documentacaoContent} />
}
