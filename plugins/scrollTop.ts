export default defineNuxtPlugin((nuxtApp) => {
  // "natrag" u pregledniku vraća na zadnju poziciju, inače na vrh stranice
  nuxtApp.$router.options.scrollBehavior = (_to, _from, savedPosition) => {
    return savedPosition ?? { left: 0, top: 0, behavior: 'smooth' }
  }
})
