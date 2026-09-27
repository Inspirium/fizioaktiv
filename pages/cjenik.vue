<script setup lang="ts">
import { CJENIK_CSV_PUTANJA, cjenik, SIDRENI_DATUM } from '~/data/cjenik'

usePageSeo({
  title: 'Cjenik usluga',
  description: 'Cijene masaža, vježbi, Bowen i Emmett terapije, ANF terapije, elektroterapije, UZV-a, dry needlinga i tretmana oblikovanja tijela u FizioAktivu.',
})
</script>

<template>
  <div class="">
    <Hero :image="'/bowen.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl">
          Cjenik
        </h1>
      </slot>
    </Hero>

    <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
      <h2 class="font-barlow font-light uppercase text-gray-700 text-6xl mb-4 px-4 text-center">
        Usluge
      </h2>
      <p class="text-gray-500 font-open text-base mb-8 px-4 max-w-2xl mx-auto">
        Sve cijene iskazane su u eurima. Uz svaku cijenu istaknuta je sidrena cijena – cijena usluge na dan {{ SIDRENI_DATUM }}
        (Odluka o isticanju dodatne cijene kao mjeri izravne kontrole cijena, NN 101/2026).
        Cjenik u strojno čitljivom obliku:
        <a :href="CJENIK_CSV_PUTANJA" class="text-fizio-500 underline" download>preuzmi CSV</a>.
      </p>
      <div class="">
        <div class="table-fixed m-auto sm:w-1/2">
          <div class="border-t border-gray-200 divide-y divide-gray-200">
            <template v-for="(sections, part) in cjenik" :key="part">
              <template v-for="section in sections" :key="section.name">
                <div>
                  <div class="py-3 pl-6 bg-gray-50 text-xl font-bold text-gray-900 text-left font-poppins">
                    {{ section.name }}
                  </div>
                </div>
                <CjenikRed v-for="item in section.items" :key="item.name" :item="item" />
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
    <Tim />
  </div>
</template>
