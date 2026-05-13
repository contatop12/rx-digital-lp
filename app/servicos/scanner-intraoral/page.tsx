import { ServiceLandingPage } from "@/components/25-service-landing"
import { scannerContent, scannerMetadata } from "@/lib/scanner-intraoral-content"

export const metadata = scannerMetadata

export default function ScannerIntraoralPage() {
  return <ServiceLandingPage content={scannerContent} />
}
