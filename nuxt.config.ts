import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Vitesse Nuxt 3',
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
