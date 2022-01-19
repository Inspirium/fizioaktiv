import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: [
    {
      title: 'FizioAktiv',
    }
  ],
  head: {
    titleTemplate: '%s - Nuxt',
    meta: [
      { title: 'FizioAktiv' },
      { name: 'google-site-verification', content: 'hqSsha75DDgyY5iVDWBq19dUDWK8gOAxEfAG5qggWjc' },
    ]
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
