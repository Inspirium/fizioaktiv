export default defineNuxtConfig({
  app: {
    head: {
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
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
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
    },
  },
  compatibilityDate: '2026-02-20'
})
