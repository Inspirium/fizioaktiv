export type ConsentState = 'granted' | 'denied' | null

export function useCookieConsent() {
  const cookie = useCookie<ConsentState>('fa_consent', {
    maxAge: 60 * 60 * 24 * 180,
    sameSite: 'lax',
    default: () => null,
  })
  // stranica je prerenderirana bez kolačića (payload nosi null) — na klijentu pročitaj stvarni izbor
  const consent = useState<ConsentState>('cookie-consent', () => null)
  if (import.meta.client && consent.value === null && cookie.value)
    consent.value = cookie.value
  const settingsOpen = useState('cookie-settings-open', () => false)

  const bannerVisible = computed(() => consent.value === null || settingsOpen.value)

  function set(value: Exclude<ConsentState, null>) {
    consent.value = value
    cookie.value = value
    settingsOpen.value = false
  }

  return {
    consent,
    bannerVisible,
    accept: () => set('granted'),
    decline: () => set('denied'),
    openSettings: () => { settingsOpen.value = true },
  }
}
