<template>
  <div class="bg-gray-900 mt-20">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="font-barlow font-light uppercase text-white text-[3rem] leading-[3rem] sm:text-6xl mb-4">
            Upoznaj naše terapeute
          </h2>
          <p class="text-2xl text-gray-300">
            Godine iskustva <span class="text-fizio-500"> Vama</span> na raspolaganju
          </p>
        </div>
        <div class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:gap-8">
          <div v-for="person in people" :key="person.name" class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
            <div class="space-y-6 xl:space-y-10">
              <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" :src="person.imageUrl" alt="">
              <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                <div class="font-medium text-lg leading-6 space-y-1 text-center w-full">
                  <h3 class="text-white text-2xl font-poppins font-semibold">
                    {{ person.name }}
                  </h3>
                  <p class="text-fizio-500">
                    {{ person.role }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link to="/onama" class="inline-block px-8 mb-12 bg-gradient-to-r from-orange-500 to-rose-500 border border-transparent rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">
      Saznaj više o terapeutima
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const people = ref([
  {
    name: 'Josipa Ćosić',
    role: 'Baccalaureus fizioterapije',
    imageUrl:
        '/josipa.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ana Kovačević Drmić',
    role: 'Baccalaureus fizioterapije',
    imageUrl:
        '/ana.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
])

</script>
