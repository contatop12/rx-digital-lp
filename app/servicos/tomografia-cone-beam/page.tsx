import { ServiceLandingPage } from "@/components/25-service-landing"
import { tomografiaContent, tomografiaMetadata } from "@/lib/tomografia-content"

export const metadata = tomografiaMetadata

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Tomografia Dentária Cone Beam (CBCT)",
  alternateName: ["Tomografia odontológica", "CBCT", "Tomografia 3D dental"],
  description:
    "Exame de imagem 3D de alta resolução para planejamento de implantes dentários, cirurgias bucomaxilofaciais, tratamentos de canal e avaliação da ATM. Disponível na Unidade Novo Horizonte da RX Digital em Marabá-PA.",
  url: "https://www.rxradiologiaodontologica.com.br/servicos/tomografia-cone-beam",
  procedureType: "Diagnostic",
  bodyLocation: "Cabeça e Maxilofacial",
  followup:
    "Laudo disponível em até 3 dias úteis ou em 12h com laudo expresso.",
  preparation:
    "Não é necessário preparo especial. Gestantes devem informar a equipe no agendamento.",
  howPerformed:
    "O paciente é posicionado no equipamento Cone Beam CT. O exame dura poucos minutos e as imagens ficam disponíveis online no mesmo dia.",
  provider: {
    "@type": "MedicalBusiness",
    name: "RX Digital Radiologia Odontológica",
    url: "https://www.rxradiologiaodontologica.com.br",
  },
}

export default function TomografiaConeBeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
      <ServiceLandingPage content={tomografiaContent} />
    </>
  )
}
