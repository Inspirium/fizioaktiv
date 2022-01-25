<template>
  <section class="services-area pt-120 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 v-if="hide" class="font-barlow font-light uppercase  text-3xl mt-12 mb-8 text-center"><span class="text-gray-700 text-5xl sm:text-6xl">Zdravlje</span></h2>
    <h2 v-else class="font-barlow font-light uppercase text-gray-700 text-3xl mt-12 mb-8 text-center">Ostale usluge — <span class="text-fizio-500 text-5xl">Zdravlje</span></h2>
    <div class="md:flex flex-wrap justify-center flex-col sm:flex-row sm:space-x-7">
      <nuxt-link :to="'/usluge/' + item.slug" v-for="item in sitedata.zdravlje" :key="item.id" class="grow-0 rounded-3xl flex overflow-hidden flex-col lg:outline outline-4 outline-transparent lg:hover:outline-fizio-500 lg:hover:border-fizio-500 shadow-xl hover:shadow-sm transform duration-200 lg:w-1/5 hover:cursor-pointer mb-10">
        <img class="object-cover h-40 w-full" v-if="item.image !== ''" :src="smallImages(item)" alt="">
        <img class="object-cover h-40" v-else src="~assets/img/demo.jpg" alt="">
        <div class="p-4">
          <h2 class="font-barlow font-normal text-gray-700 text-3xl mb-3">{{ item.title }}</h2>
          <h3 class="text-gray-600 mb-3 text-base font-open">{{ item.short_dec }}</h3>
        </div>
      </nuxt-link>
    </div>
    <h2 v-if="hide" class="font-barlow font-light uppercase text-gray-700 text-3xl mt-12 mb-8 text-center"><span class="text-5xl sm:text-6xl">Ljepota</span></h2>
    <h2 v-else class="font-barlow font-light uppercase text-gray-700 text-3xl mt-12 mb-8 text-center">Ostale usluge — <span class="text-fizio-500 text-5xl">Ljepota</span></h2>
    <div class="flex flex-wrap justify-center flex-col sm:flex-row sm:space-x-7">
      <nuxt-link :to="'/usluge/' + item.slug" v-for="item in sitedata.ljepota" :key="item.id" class="grow-0 rounded-3xl flex overflow-hidden flex-col outline outline-4 outline-transparent lg:hover:outline-fizio-500 lg:hover:border-fizio-500 shadow-xl hover:shadow-sm transform duration-200 lg:w-1/5 hover:cursor-pointer mb-10">
        <img class="object-cover h-40 w-full" v-if="item.image !== ''" :src="smallImages(item)" alt="">
        <img class="object-cover h-40" v-else src="~assets/img/demo.jpg" alt="">
        <div class="p-4">
          <h2 class="font-barlow font-normal text-gray-700 text-3xl mb-3">{{ item.title }}</h2>
          <h3 class="text-gray-600 mb-3 text-base font-open">{{ item.short_dec }}</h3>
        </div>
      </nuxt-link>
    </div>
  </section>

</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { servicesList } from '/stores/services'

const sitedata = servicesList()

const props = defineProps({
  hide: {
    type: Boolean,
    required: false,
    default: false,
  }
})

function smallImages(item) {
  return item.image.slice(0, -4) + '-m.' + 'jpg'
}
</script>

