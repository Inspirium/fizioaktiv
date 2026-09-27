<template>
  <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
    <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl mb-4 px-4 text-center">
      Cjenik
    </h2>
    <p class="text-gray-400 text-2xl px-4 mb-8">
      Izdvojeno iz ukupnog cjenika
    </p>

    <div class="">
      <div class="table-fixed m-auto lg:w-1/2">
        <div class="border-t border-gray-200 divide-y divide-gray-200">
          <template v-for="section in sections" :key="section.name">
            <div>
              <div class="py-3 pl-6 bg-gray-50 text-xl font-bold text-gray-900 text-left font-poppins">
                {{ section.name }}
              </div>
            </div>
            <CjenikRed v-for="item in section.items" :key="item.name" :item="item" />
          </template>
        </div>
      </div>
    </div>
    <NuxtLink to="/cjenik" class="inline-block sm:w-auto w-5/6 px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">
      Pogledaj cjelokupni cjenik usluga
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { type CjenikDio, cjenik } from '~/data/cjenik'

const props = defineProps({
  pricelistPart: {
    type: String as PropType<CjenikDio>,
    required: true,
  },
})

const sections = computed(() => cjenik[props.pricelistPart] ?? [])
</script>
