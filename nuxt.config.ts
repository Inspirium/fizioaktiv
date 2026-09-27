import { CJENIK_CSV_PUTANJA } from './data/cjenik'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'hr' },
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
  ],
  css: ['~/styles/main.css'],
  site: {
    name: 'FizioAktiv',
    description: 'Dugogodišnje iskustvo i entuzijazam našeg tima, čija je misija kroz razne programe masaža, vježbi i terapija pomoći vam održati i unaprijediti zdravlje',
    titleSeparator: '|',
    url: 'https://www.fizioaktiv.hr',
    defaultLocale: 'hr',
    image: '/fizioaktiv_profile.jpg',
  },
  // naziv CSV cjenika propisan je Odlukom (velika slova, podvlake) — ne provjeravati
  linkChecker: {
    excludeLinks: ['/cjenici/**'],
  },
  // Statična stranica — dinamičko generiranje OG slika nije potrebno
  ogImage: {
    enabled: false,
  },
  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'FizioAktiv',
      url: 'https://www.fizioaktiv.hr',
      logo: '/android-chrome-512x512.png',
      image: '/fizioaktiv_profile.jpg',
      telephone: '+385915133721',
      email: 'info@fizioaktiv.hr',
      address: {
        streetAddress: 'Zagrebačka avenija 106',
        addressLocality: 'Zagreb',
        postalCode: '10000',
        addressCountry: 'HR',
      },
      sameAs: ['https://www.facebook.com/FizioAktivZagreb'],
    },
  },
  googleFonts: {
    families: {
      'Barlow': true,
      'Open+Sans': true,
      'Poppins': true,
    },
    display: 'swap',
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      // strojno čitljiv cjenik (sidrene cijene, NN 101/2026) + stalni link na najnoviji
      routes: [CJENIK_CSV_PUTANJA, '/cjenici/cjenik.csv'],
    },
  },
  compatibilityDate: '2026-02-20',
})
