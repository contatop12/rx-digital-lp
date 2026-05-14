import { ServiceLandingPage } from "@/components/25-service-landing"
import { telerradiografiaContent, telerradiografiaMetadata } from "@/lib/telerradiografia-content"

export const metadata = telerradiografiaMetadata

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Telerradiografia e Traçado Cefalométrico",
  alternateName: ["Telerradiografia", "Cefalometria"],
  description:
    "Análise do perfil facial para planejamento ortodôntico e cirúrgico. Exame digital com traçado cefalométrico incluso. RX Digital, Marabá-PA.",
  url: "https://www.rxradiologiaodontologica.com.br/servicos/telerradiografia-tracado-cefalometrico",
  procedureType: "Diagnostic",
  bodyLocation: "Perfil Facial e Crânio",
  provider: {
    "@type": "MedicalBusiness",
    name: "RX Digital Radiologia Odontológica",
    url: "https://www.rxradiologiaodontologica.com.br",
  },
}

export default function TelerradiografiaTracadoCefalometricoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <ServiceLandingPage content={telerradiografiaContent} />
    </>
  )
}
