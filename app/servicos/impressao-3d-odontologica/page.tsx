import { ServiceLandingPage } from "@/components/25-service-landing"
import { impressaoContent, impressaoMetadata } from "@/lib/impressao-3d-content"

export const metadata = impressaoMetadata

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Impressão 3D Odontológica",
  alternateName: ["Impressão 3D dental", "Biomodelo 3D", "Guia cirúrgico 3D"],
  description:
    "Biomodelos anatômicos e guias cirúrgicos impressos em 3D com alta precisão. Solução completa para cirurgiões e implantodontistas em Marabá-PA.",
  url: "https://www.rxradiologiaodontologica.com.br/servicos/impressao-3d-odontologica",
  procedureType: "Therapeutic",
  bodyLocation: "Maxilofacial",
  provider: {
    "@type": "MedicalBusiness",
    name: "RX Digital Radiologia Odontológica",
    url: "https://www.rxradiologiaodontologica.com.br",
  },
}

export default function Impressao3DOdontologicaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <ServiceLandingPage content={impressaoContent} />
    </>
  )
}
