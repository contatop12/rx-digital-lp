import { ServiceLandingPage } from "@/components/25-service-landing"
import { scannerContent, scannerMetadata } from "@/lib/scanner-intraoral-content"

export const metadata = scannerMetadata

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Scanner Intraoral",
  alternateName: ["Escaneamento intraoral", "Moldagem digital"],
  description:
    "Modelo digital 3D da boca sem moldagem convencional. Indicado para próteses, alinhadores e implantes. Tecnologia de ponta em Marabá-PA.",
  url: "https://www.rxradiologiaodontologica.com.br/servicos/scanner-intraoral",
  procedureType: "Diagnostic",
  bodyLocation: "Arcada Dentária",
  provider: {
    "@type": "MedicalBusiness",
    name: "RX Digital Radiologia Odontológica",
    url: "https://www.rxradiologiaodontologica.com.br",
  },
}

export default function ScannerIntraoralPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <ServiceLandingPage content={scannerContent} />
    </>
  )
}
