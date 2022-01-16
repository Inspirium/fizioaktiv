<template>
  <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
    <h2 class="font-barlow font-light uppercase text-gray-700 text-6xl mb-4 text-center">Cjenik masaža</h2>
    <p class="text-gray-400 text-2xl mb-8">Izdvojeno iz ukupnog cjenika {{ part }}</p>

    <div class="">
      <div class="table-fixed m-auto w-1/2">
        <div class="border-t border-gray-200 divide-y divide-gray-200">
          <template v-for="section in sitedata.cjenik[part]" :key="section.name">
            <div>
              <div class="py-3 pl-6 bg-gray-50 text-xl font-bold text-gray-900 text-left font-poppins">{{ section.name }}</div>
            </div>
            <div v-for="feature in section.items" :key="feature.name" class="flex justify-center ">
              <div class="py-5 pl-6 pr-6 text-xl font-normal text-gray-500 text-left w-full">{{ feature.name }}</div>
              <div class="py-5 w-1/2 text-right">
                <span class="block text-xl font-medium text-fizio-500">{{ feature.price }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <NuxtLink to="/cjenik" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Pogledaj cjelokupni cjenik usluga</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'

const props = defineProps( {
  pricelistPart: {
    type: String,
    required: false,
    default: '',
  }
})

import { servicesList } from '/stores/services'
const sitedata = servicesList()

const part = props.pricelistPart

</script>






