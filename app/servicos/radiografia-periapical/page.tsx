import { ServiceLandingPage } from "@/components/25-service-landing"
import { periapicalContent, periapicalMetadata } from "@/lib/periapical-content"

export const metadata = periapicalMetadata

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Radiografia Periapical",
  alternateName: ["Raio x periapical", "Rx periapical"],
  description:
    "Imagem detalhada de dentes e raízes para diagnósticos localizados. Exame rápido, 100% digital, com resultado disponível no mesmo dia. RX Digital, Marabá-PA.",
  url: "https://www.rxradiologiaodontologica.com.br/servicos/radiografia-periapical",
  procedureType: "Diagnostic",
  bodyLocation: "Dentes e Raízes",
  provider: {
    "@type": "MedicalBusiness",
    name: "RX Digital Radiologia Odontológica",
    url: "https://www.rxradiologiaodontologica.com.br",
  },
}

export default function RadiografiaPeriapicalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <ServiceLandingPage content={periapicalContent} />
    </>
  )
}
