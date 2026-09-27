import { CJENIK_CSV_PUTANJA, cjenikCsv } from '../../../data/cjenik'

// Prerenderira se pri buildu (vidi nitro.prerender.routes u nuxt.config.ts)
export default defineEventHandler((event) => {
  if (event.path !== CJENIK_CSV_PUTANJA && event.path !== '/cjenici/cjenik.csv')
    throw createError({ statusCode: 404 })

  setHeader(event, 'Content-Type', 'text/csv; charset=utf-8')
  return cjenikCsv()
})
