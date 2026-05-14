const medicalBusinessSchema = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.rxradiologiaodontologica.com.br/#unidade-novo-horizonte",
    name: "RX Digital Radiologia Odontológica - Unidade Novo Horizonte",
    description:
      "Clínica especializada em radiologia odontológica em Marabá-PA. Tomografia Cone Beam, raio x panorâmico, radiografia periapical, documentação ortodôntica, scanner intraoral e impressão 3D. Processo 100% digital com acesso online no mesmo dia.",
    url: "https://www.rxradiologiaodontologica.com.br",
    telephone: "+559491608181",
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Tocantins, 611-B",
      addressLocality: "Marabá",
      addressRegion: "PA",
      postalCode: "68503-660",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "77",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.instagram.com/_rxdigital/",
      "https://share.google/0KyCcG24pWaGw8euF",
    ],
    medicalSpecialty: "Radiology",
    employee: {
      "@type": "Person",
      name: "Dra. Jéssica Arcoverde Lara",
      jobTitle: "Responsável Técnica - Radiologia Odontológica",
      identifier: "CRO-PA CD-7626",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.rxradiologiaodontologica.com.br/#unidade-nova-maraba",
    name: "RX Digital Radiologia Odontológica - Unidade Nova Marabá",
    description:
      "Clínica de radiologia odontológica no Shopping Verdes Mares em Marabá-PA.",
    url: "https://www.rxradiologiaodontologica.com.br",
    telephone: "+559491558181",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Folha 27, Quadra Especial, Shopping Verdes Mares",
      addressLocality: "Marabá",
      addressRegion: "PA",
      postalCode: "68509-100",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "43",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.instagram.com/_rxdigital/",
      "https://share.google/uSFwQdrSTOaGJuP1l",
    ],
    medicalSpecialty: "Radiology",
  },
]

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
    />
  )
}
