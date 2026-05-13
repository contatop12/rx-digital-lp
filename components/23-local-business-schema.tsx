const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.rxradiologiaodontologica.com.br/#novo-horizonte",
      name: "RX Digital Radiologia Odontológica",
      telephone: "+55-94-99160-8181",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Tocantins, 611 - B - Novo Horizonte",
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
        reviewCount: "100",
      },
    },
    {
      "@type": "Dentist",
      "@id": "https://www.rxradiologiaodontologica.com.br/#nova-maraba",
      name: "RX Digital Radiologia Odontológica",
      telephone: "+55-94-99155-8181",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Folha 27 quadra especial - Nova Marabá",
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
        reviewCount: "100",
      },
    },
    {
      "@type": "MedicalBusiness",
      name: "RX Digital Radiologia Odontológica",
      medicalSpecialty: "Radiologia Odontológica",
      url: "https://www.rxradiologiaodontologica.com.br/",
    },
  ],
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
