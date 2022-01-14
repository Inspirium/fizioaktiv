<script setup lang="ts">

import { servicesList } from "~/stores/services";
import Hero from '~/components/Hero'
import Test from '~/components/Test'
import Zdravlje from '~/components/Zdravlje'
import Ljepota from '~/components/Services.vue'
import Tim from '~/components/Tim'

const sitedata = servicesList()

</script>



<template>
  <Hero />
  <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
    <h2 class="font-barlow font-light uppercase text-gray-700 text-6xl mb-4 text-center">Cjenik</h2>
    <p class="text-gray-400 text-2xl mb-8">Za umirovljenike odobravamo <span class="font-medium text-fizio-500">10% popusta</span> na sve cijene</p>
    <div class="">
      <div class="table-fixed m-auto w-1/2">
        <div class="border-t border-gray-200 divide-y divide-gray-200">
          <template v-for="section in sitedata.cjenik" :key="section.name">
            <template v-for="feature in section" :key="feature.name">
              <div>
                <div class="py-3 pl-6 bg-gray-50 text-xl font-bold text-gray-900 text-left font-poppins">{{ feature.name }}</div>
              </div>
              <div v-for="item in feature.items" :key="item.name" class="flex justify-center ">
                <div class="py-3 pl-6 pr-6 text-xl font-normal text-gray-500 text-left w-full">{{ item.name }}</div>
                <div class="py-3 w-1/2 text-right">
                  <span class="block text-xl font-medium text-fizio-500">{{ item.price }}</span>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
  <Tim />

</template>

