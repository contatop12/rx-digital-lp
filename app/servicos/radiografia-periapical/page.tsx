import { ServiceLandingPage } from "@/components/25-service-landing"
import { periapicalContent, periapicalMetadata } from "@/lib/periapical-content"

export const metadata = periapicalMetadata

export default function RadiografiaPeriapicalPage() {
  return <ServiceLandingPage content={periapicalContent} />
}
