<template>
  <section class="services-area pt-120 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-barlow font-light uppercase text-gray-700 text-6xl mb-4 text-center">
      Zdravlje
    </h2>
    <p class="text-gray-400 text-xl mb-8">
      Vama zdravlje, nama vaš novac
    </p>
    <div class="grid sm:grid-cols-3 gap-10">
      <div v-for="item in dataneki.ljepota" :key="item.id" class="rounded-3xl flex overflow-hidden flex-col border border-4 border-transparent hover:border-fizio-500 shadow-xl hover:shadow-sm transform duration-200">
        <img src="~assets/img/demo.jpg" alt="">
        <div class="mt-4 p-4">
          <h2 class="font-poppins font-bold text-gray-700 text-3xl mb-3">
            {{ item.title }}
          </h2>
          <h3 class="text-gray-600 mb-6">
            {{ item.short_dec }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronRightIcon, PlusSmIcon } from '@heroicons/vue/solid'

import { servicesList } from '~/stores/services'
const dataneki = servicesList()

</script>
