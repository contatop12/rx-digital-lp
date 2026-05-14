import { ServiceLandingPage } from "@/components/25-service-landing"
import { documentacaoContent, documentacaoMetadata } from "@/lib/documentacao-ortodontica-content"

export const metadata = documentacaoMetadata

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Documentação Ortodôntica Completa",
  alternateName: ["Documentação ortodôntica", "Doc ortodôntica"],
  description:
    "Conjunto completo de imagens para início ou troca de tratamento ortodôntico. Processo digital, rápido e com laudo especializado. RX Digital, Marabá-PA.",
  url: "https://www.rxradiologiaodontologica.com.br/servicos/documentacao-ortodontica",
  procedureType: "Diagnostic",
  bodyLocation: "Arcada Dentária e Perfil Facial",
  provider: {
    "@type": "MedicalBusiness",
    name: "RX Digital Radiologia Odontológica",
    url: "https://www.rxradiologiaodontologica.com.br",
  },
}

export default function DocumentacaoOrtodonticaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <ServiceLandingPage content={documentacaoContent} />
    </>
  )
}
