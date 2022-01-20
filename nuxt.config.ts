import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'FizioAktiv',
    meta: [
      { name: 'description', content: 'Dugogodišnje iskustvo i entuzijazam našeg tima, čija je misija kroz razne programe masaža, vježbi i terapija pomoći vam održati i unaprijediti zdravlje' },
      { name: 'google-site-verification', content: 'hqSsha75DDgyY5iVDWBq19dUDWK8gOAxEfAG5qggWjc' },
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
