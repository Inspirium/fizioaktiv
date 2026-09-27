# FizioAktiv

Web stranica [fizioaktiv.hr](https://www.fizioaktiv.hr) — Nuxt 4 + Tailwind, generira se kao statična stranica i hosta na Netlifyju.

## Razvoj

Potreban je Node 20+ i pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm generate   # statični build u .output/public (dist)
pnpm preview
```

## Struktura

- `pages/` — stranice; `pages/usluge/*.vue` su pojedinačne usluge
- `stores/services.ts` — popis usluga (naslovi, kratki opisi, slike)
- `data/cjenik.ts` — **cjenik**; cijene se mijenjaju ovdje (vidi niže)
- `composables/usePageSeo.ts` — naslov/opis za SEO; stranice usluga koriste `useServiceSeo('<slug>')` koji podatke čita iz storea
- `composables/useCookieConsent.ts`, `components/CookieBanner.vue`, `plugins/gtag.client.ts` — Google Analytics se učitava tek nakon privole
- `public/` — slike; za kartice usluga postoji i manja verzija s nastavkom `-m.jpg`

## Nova usluga

1. Dodaj zapis u `zdravlje` ili `ljepota` i cjenik u `stores/services.ts`
2. Napravi `pages/usluge/<slug>.vue` (kopiraj postojeću) i na vrhu pozovi `useServiceSeo('<slug>')`
3. Dodaj sliku `/<ime>.jpg` i manju `/<ime>-m.jpg` u `public/`

## Cjenik i sidrene cijene (NN 101/2026)

Od 1. 10. 2026. uz svaku cijenu mora biti istaknuta sidrena cijena (cijena na dan 10. 9. 2026.),
a na stranici objavljen strojno čitljiv cjenik. Oboje se generira iz `data/cjenik.ts`:

- prikaz na `/cjenik` i u izvodima cjenika na stranicama usluga (`components/CjenikRed.vue`)
- CSV na `/cjenici/<naziv-po-propisu>.csv` i stalni link `/cjenici/cjenik.csv` (`server/routes/cjenici/[file].ts`, prerenderira se)

Kod promjene cijene:
1. promijeni `price` (ne `sidrena`!)
2. postavi `CIJENE_AZURIRANE` na trenutak promjene — mijenja se naziv CSV datoteke
3. deploy prije 8 sati sljedećeg dana

## Deploy

Netlify pokreće `pnpm run generate` i objavljuje `dist` (vidi `netlify.toml`).
Kontakt forma šalje podatke na `frmr.inspirium.hr`.
