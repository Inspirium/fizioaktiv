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
  ],
  css: ['~/styles/main.css'],
  extends: [
    'nuxt-seo-kit',
  ],
  runtimeConfig: {
    public: {
      siteName: 'FizioAktiv',
      siteDescription: 'Dugogodišnje iskustvo i entuzijazam našeg tima, čija je misija kroz razne programe masaža, vježbi i terapija pomoći vam održati i unaprijediti zdravlje',
      titleSeparator: '|',
      siteUrl: 'https://www.fizioaktiv.hr',
      language: 'hr',
      siteImage: '/fizioaktiv_profile.jpg',
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
})
