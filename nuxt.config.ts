import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'FizioAktiv',
    meta: [
      { name: 'description', content: 'Dugogodišnje iskustvo i entuzijazam našeg tima, čija je misija kroz razne programe masaža, vježbi i terapija pomoći vam održati i unaprijediti zdravlje' },
      { name: 'google-site-verification', content: 'hqSsha75DDgyY5iVDWBq19dUDWK8gOAxEfAG5qggWjc' },
      { property: 'og:site_name', content: 'FizioAktiv, za pružanja usluga u službi zdravlja i ljepote' },
      { property: 'og:image', content: '/fizioaktiv_profile.jpg' },
      { property: 'og:description', content: 'Dugogodišnje iskustvo i entuzijazam našeg tima, čija je misija kroz razne programe masaža, u službi vježbi i terapija kako bi vam pomogli održati i unaprijediti zdravlje' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href:'/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes:'16x16', href:'/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes:'32x32', href:'/favicon-32x32.png' },
      { rel: 'manifest', href:'/site.webmanifest' },
    ],
  },
  buildModules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  vueuse: {
    ssrHandlers: true,
  },
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
})
