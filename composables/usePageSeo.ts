import { servicesList } from '~/stores/services'

interface PageSeo {
  title: string
  description: string
  image?: string
}

export function usePageSeo({ title, description, image }: PageSeo) {
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ...(image ? { ogImage: image, twitterImage: image } : {}),
  })
}

// SEO za stranice usluga — naslov, opis i slika dolaze iz stores/services.ts
export function useServiceSeo(slug: string, title?: string) {
  const { zdravlje, ljepota } = servicesList()
  const service = [...zdravlje, ...ljepota].find(item => item.slug === slug)

  usePageSeo({
    title: title ?? service?.title ?? 'Usluge',
    description: service?.short_dec ?? '',
    image: service?.image,
  })
}
