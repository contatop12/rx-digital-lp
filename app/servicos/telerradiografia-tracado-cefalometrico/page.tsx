import { ServiceLandingPage } from "@/components/25-service-landing"
import { telerradiografiaContent, telerradiografiaMetadata } from "@/lib/telerradiografia-content"

export const metadata = telerradiografiaMetadata

export default function TelerradiografiaTracadoCefalometricoPage() {
  return <ServiceLandingPage content={telerradiografiaContent} />
}
