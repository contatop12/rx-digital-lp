export type ServiceCategoryId =
  | "todos"
  | "tomografia-3d"
  | "radiografias"
  | "ortodontia"
  | "scanner-digital"

export type ServiceItem = {
  slug: string
  name: string
  shortDescription: string
  indications: string[]
  image: string
  categories: Exclude<ServiceCategoryId, "todos">[]
}

export const serviceCategories: {
  id: ServiceCategoryId
  label: string
}[] = [
  { id: "todos", label: "Todos" },
  { id: "tomografia-3d", label: "Tomografia / 3D" },
  { id: "radiografias", label: "Radiografias" },
  { id: "ortodontia", label: "Ortodontia" },
  { id: "scanner-digital", label: "Scanner / Digital" },
]

export const services: ServiceItem[] = [
  {
    slug: "tomografia-cone-beam",
    name: "Tomografia Dentária (Cone Beam / CBCT)",
    shortDescription:
      "Imagens 3D de alta resolução para diagnósticos precisos e planejamento de tratamentos complexos.",
    indications: ["Planejamento de implantes", "Avaliação de lesões", "Cirurgias bucomaxilofaciais"],
    image: "/exames_e_servicos/Tomografia Computadorizada (Cone Beam  CBCT).webp",
    categories: ["tomografia-3d"],
  },
  {
    slug: "radiografia-panoramica",
    name: "Raio X Panorâmico (Radiografia Panorâmica)",
    shortDescription:
      "Visão completa da arcada dentária em um único exame digital, rápido e sem desconforto.",
    indications: ["Avaliação geral da saúde bucal", "Planejamento ortodôntico", "Pré-operatório"],
    image: "/exames_e_servicos/radiografia-panoramica-maraba.webp",
    categories: ["radiografias"],
  },
  {
    slug: "radiografia-periapical",
    name: "Radiografia Periapical",
    shortDescription:
      "Imagem detalhada de dentes e raízes para diagnósticos localizados com alta precisão.",
    indications: ["Diagnóstico de cáries e lesões", "Avaliação de raízes", "Acompanhamento de tratamentos"],
    image: "/exames_e_servicos/Radiografia Panorâmica (Raio x).webp",
    categories: ["radiografias"],
  },
  {
    slug: "documentacao-ortodontica",
    name: "Documentação Ortodôntica Completa",
    shortDescription:
      "Conjunto completo de imagens e registros para planejamento ortodôntico em um único atendimento.",
    indications: ["Início de tratamento ortodôntico", "Troca de aparelho", "Pré-cirurgia ortognática"],
    image: "/exames_e_servicos/Documentação Ortodôntica Completa.webp",
    categories: ["ortodontia"],
  },
  {
    slug: "telerradiografia-tracado-cefalometrico",
    name: "Telerradiografia + Traçado Cefalométrico",
    shortDescription:
      "Análise precisa do perfil facial para planejamento ortodôntico e cirúrgico.",
    indications: ["Planejamento ortodôntico", "Cirurgia ortognática", "Análise de crescimento facial"],
    image: "/exames_e_servicos/Telerradiografia + Traçado Cefalométrico.webp",
    categories: ["ortodontia"],
  },
  {
    slug: "scanner-intraoral",
    name: "Scanner Intraoral",
    shortDescription:
      "Modelo digital 3D da boca com alta precisão e sem moldagem convencional.",
    indications: ["Próteses e coroas", "Alinhadores invisíveis", "Planejamento de implantes"],
    image: "/exames_e_servicos/Scanner e Entrega Digital.webp",
    categories: ["scanner-digital"],
  },
  {
    slug: "impressao-3d-odontologica",
    name: "Impressão 3D Odontológica",
    shortDescription:
      "Biomodelos anatômicos e guias cirúrgicos impressos em 3D com alta precisão.",
    indications: ["Planejamento cirúrgico", "Guias para implantes", "Estudo anatômico"],
    image: "/exames_e_servicos/Arquivos 3D e Impressão 3D.webp",
    categories: ["tomografia-3d", "scanner-digital"],
  },
]

export function getServiceHref(slug: string): string {
  return `/servicos/${slug}`
}

export function getServicesByCategory(categoryId: ServiceCategoryId): ServiceItem[] {
  if (categoryId === "todos") {
    return services
  }

  return services.filter((service) => service.categories.includes(categoryId))
}

export function getOtherServices(currentSlug: string): ServiceItem[] {
  return services.filter((service) => service.slug !== currentSlug)
}
