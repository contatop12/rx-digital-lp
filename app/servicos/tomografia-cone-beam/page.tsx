import { ServiceLandingPage } from "@/components/25-service-landing"
import { tomografiaContent, tomografiaMetadata } from "@/lib/tomografia-content"

export const metadata = tomografiaMetadata

export default function TomografiaConeBeamPage() {
  return <ServiceLandingPage content={tomografiaContent} />
}
