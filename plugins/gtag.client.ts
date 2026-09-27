const GTAG_ID = 'G-4XGGTXLTB4'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    [key: `ga-disable-${string}`]: boolean
  }
}

// Google Analytics se učitava tek nakon što posjetitelj prihvati kolačiće (GDPR).
// GA4 enhanced measurement sam bilježi promjene stranica u SPA navigaciji.
export default defineNuxtPlugin(() => {
  const { consent } = useCookieConsent()
  let loaded = false

  function load() {
    window[`ga-disable-${GTAG_ID}`] = false
    if (loaded)
      return
    loaded = true
    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GTAG_ID, { anonymize_ip: true })

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`
    document.head.appendChild(script)
  }

  watch(consent, (value) => {
    if (value === 'granted')
      load()
    else if (loaded)
      window[`ga-disable-${GTAG_ID}`] = true
  }, { immediate: true })
})
