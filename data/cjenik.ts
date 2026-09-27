// Cjenik usluga. Cijene su u eurima.
//
// Sidrena cijena = cijena usluge na dan 10. 9. 2026. (Odluka o isticanju dodatne cijene
// kao mjeri izravne kontrole cijena, NN 101/2026). Od 1. 10. 2026. mora biti istaknuta
// uz svaku cijenu, a strojno čitljiv cjenik (CSV) objavljen na stranici.
// Kod promjene cijene mijenja se samo `price`, `sidrena` ostaje ista, a CIJENE_AZURIRANE
// se postavlja na trenutak promjene.

export interface CjenikStavka {
  name: string
  price: number
  sidrena: number
}

export interface CjenikSekcija {
  name: string
  items: CjenikStavka[]
}

export const SIDRENI_DATUM = '10. 9. 2026.'

// trenutak zadnje promjene cijena — ulazi u naziv CSV datoteke
export const CIJENE_AZURIRANE = '2026-09-10T08:00'

export const cjenik = {
  masaze: [
    {
      name: 'Medicinske masaže',
      items: [
        { name: 'Medicinska masaža-ciljana 15 min', price: 15, sidrena: 15 },
        { name: 'Medicinska masaža 30 min', price: 25, sidrena: 25 },
        { name: 'Medicinska masaža 45 min', price: 35, sidrena: 35 },
        { name: 'Medicinska masaža 60 min', price: 40, sidrena: 40 },
        { name: 'Anticelulitna masaža 30 min', price: 25, sidrena: 25 },
        { name: 'Medicinska masaža 30 min s Emmett tehnikom', price: 40, sidrena: 40 },
        { name: 'Medicinska masaža 60 min s Emmett tehnikom', price: 55, sidrena: 55 },
      ],
    },
    {
      name: 'Sportske masaže',
      items: [
        { name: 'Sportska masaža 30 min', price: 30, sidrena: 30 },
        { name: 'Sportska masaža 45 min', price: 40, sidrena: 40 },
      ],
    },
    {
      name: 'Medicinske masaže paketi',
      items: [
        { name: 'Medicinska masaža 30 min — 5 tretmana', price: 100, sidrena: 100 },
      ],
    },
  ],
  vjezbe: [
    {
      name: 'Vježbe',
      items: [
        { name: 'Individualne vježbe 30 min', price: 20, sidrena: 20 },
        { name: 'Individualne vježbe 45 min', price: 30, sidrena: 30 },
      ],
    },
  ],
  bowen: [
    {
      name: 'Bowen terapija',
      items: [
        { name: 'Bowen terapija', price: 35, sidrena: 35 },
        { name: 'Bowen terapija s Emmett tehnikom', price: 40, sidrena: 40 },
        { name: 'Bowen terapija s Emmett tehnikom - djeca', price: 25, sidrena: 25 },
        { name: 'Bowen terapija s Emmett tehnikom - bebe (kolike)', price: 15, sidrena: 15 },
      ],
    },
  ],
  emmett: [
    {
      name: 'Emmett tehnika',
      items: [
        { name: 'Emmett tehnika', price: 30, sidrena: 30 },
        { name: 'Medicinska masaža 30 min s Emmett tehnikom', price: 40, sidrena: 40 },
        { name: 'Medicinska masaža 60 min s Emmett tehnikom', price: 55, sidrena: 55 },
      ],
    },
  ],
  anf: [
    {
      name: 'ANF terapija',
      items: [
        { name: 'ANF terapija - prvi pregled', price: 30, sidrena: 30 },
        { name: 'ANF terapija - DISK', price: 5, sidrena: 5 },
      ],
    },
  ],
  elektroterapija: [
    {
      name: 'Elektroterapija',
      items: [
        { name: 'Elektroterapija - 20 min', price: 10, sidrena: 10 },
        { name: 'Elektrostimulacija - 20 min', price: 10, sidrena: 10 },
        { name: 'Elektrostimulacija - 30 min', price: 15, sidrena: 15 },
      ],
    },
    {
      name: 'Elektroterapija paketi',
      items: [
        { name: 'UZV i elektroterapija - 10 tretmana', price: 180, sidrena: 180 },
      ],
    },
  ],
  uzvterapija: [
    {
      name: 'UZV terapija',
      items: [
        { name: 'UZV 10 min', price: 10, sidrena: 10 },
      ],
    },
    {
      name: 'Elektroterapija paketi',
      items: [
        { name: 'UZV i elektroterapija - 10 tretmana', price: 180, sidrena: 180 },
      ],
    },
  ],
  dryneedling: [
    {
      name: 'Dry needling',
      items: [
        { name: 'Dry needling', price: 30, sidrena: 30 },
      ],
    },
  ],
  vacuslim: [
    {
      name: 'VacuSlim 48',
      items: [
        { name: 'Oblikovanje tijela - Vacuslim 48', price: 30, sidrena: 30 },

      ],
    },
    {
      name: 'VacuSlim 48 paketi',
      items: [
        { name: 'Vacuslim 48 i anticelulitna masaža - 60 min - 10 tretmana', price: 450, sidrena: 450 },
        { name: 'Vacuslim 48 u kombinaciji s limfnom drenažom - 60 min - 10 tretmana', price: 400, sidrena: 400 },
      ],
    },
  ],

  anticelulitna: [
    {
      name: 'Anticelulitna masaža',
      items: [
        { name: 'Anticelulitna masaža - 30 min', price: 25, sidrena: 25 },
      ],
    },
    {
      name: 'Anticelulitna masaža paketi',
      items: [
        { name: 'Anticelulitna masaža - 10 tretmana', price: 225, sidrena: 225 },
      ],
    },

  ],
  limfna: [
    {
      name: 'Limfna drenaža',
      items: [
        { name: 'Aparaturna limfna drenaža - 30 min', price: 20, sidrena: 20 },
      ],
    },
  ],
} satisfies Record<string, CjenikSekcija[]>

export type CjenikDio = keyof typeof cjenik

export function formatCijena(value: number) {
  return `${value.toFixed(2).replace('.', ',')} €`
}

// Naziv CSV datoteke: oblik objekta, adresa, oznaka objekta, broj pohrane i vremenska oznaka.
// TODO: oznaku objekta i broj pohrane provjeriti s knjigovođom (podaci iz fiskalizacije).
const CSV_OBJEKT = {
  oblik: 'Obrt',
  adresa: 'Zagrebacka-avenija-106-Zagreb',
  oznaka: 'FA1',
  brojPohrane: '1',
}

function csvNaziv() {
  const stamp = CIJENE_AZURIRANE.replace(/-/g, '').replace('T', '_').replace(':', '')
  const { oblik, adresa, oznaka, brojPohrane } = CSV_OBJEKT
  return `${oblik}_${adresa}_${oznaka}_${brojPohrane}_${stamp}.csv`
}

export const CJENIK_CSV_PUTANJA = `/cjenici/${csvNaziv()}`

// Strojno čitljiv cjenik — UTF-8, separator ";", decimalni zarez.
// Usluga koja se pojavljuje u više sekcija navodi se samo jednom.
export function cjenikCsv() {
  const broj = (value: number) => value.toFixed(2).replace('.', ',')
  const polje = (value: string) => /[";\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value

  const rows = [['Naziv usluge', 'Maloprodajna cijena (EUR)', 'Oznaka posebnog oblika prodaje', `Sidrena cijena ${SIDRENI_DATUM.replace(/ /g, '')} (EUR)`]]
  const seen = new Set<string>()
  for (const sections of Object.values(cjenik)) {
    for (const section of sections) {
      for (const item of section.items) {
        if (seen.has(item.name))
          continue
        seen.add(item.name)
        rows.push([item.name, broj(item.price), '', broj(item.sidrena)])
      }
    }
  }
  return `﻿${rows.map(row => row.map(polje).join(';')).join('\r\n')}\r\n`
}
