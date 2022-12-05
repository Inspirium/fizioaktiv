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
  <div class="">
<!--    <Hero :image="'cjenik.jpg'">-->
<!--      <slot>-->
<!--        <h1 class="text-4xl tracking-tight font-extrabold sm:text-6xl xl:text-6xl">-->
<!--          <span>Cjenik</span>-->
<!--        </h1>-->
<!--        <p class="mt-3 text-xl text-gray-600 sm:mt-5 sm:text-3xl">-->
<!--          Cijena i kvaliteta idu zajedno-->
<!--        </p>-->
<!--      </slot>-->
<!--    </Hero>-->
    <Hero :image="'/bowen.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl">
          Cjenik <span class="text-fizio-500"></span>
        </h1>
<!--        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">-->
<!--          Cijena i kvaliteta idu zajedno-->
<!--        </p>-->
      </slot>
    </Hero>

    <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
      <h2 class="font-barlow font-light uppercase text-gray-700 text-6xl mb-4 px-4 text-center">Usluge</h2>
      <p class="text-gray-400 text-2xl mb-4 px-4">Za umirovljenike odobravamo <span class="font-medium text-fizio-500">10% popusta</span> na sve cijene usluga</p>
      <p class="text-gray-400 text-xl mb-6 px-4">Tečaj: 1 EUR = 7,53450 HRK</p>
      <div class="">
        <div class="table-fixed m-auto sm:w-1/2">
          <div class="border-t border-gray-200 divide-y divide-gray-200">
            <template v-for="section in sitedata.cjenik" :key="section.name">
              <template v-for="feature in section" :key="feature.name">
                <div>
                  <div class="py-3 pl-6 bg-gray-50 text-xl font-bold text-gray-900 text-left font-poppins">{{ feature.name }}</div>
                </div>
                <div v-for="item in feature.items" :key="item.name" class="flex justify-center ">
                  <div class="py-3 pl-6 pr-6 text-xl font-normal text-gray-500 text-left w-full">{{ item.name }}</div>
                  <div class="py-3 w-1/2 text-right">
                    <span class="block text-xl font-medium text-fizio-500 pr-4 sm:pr-0">{{ item.price }}</span>
                  </div>
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
    <Tim />
  </div>
</template>

