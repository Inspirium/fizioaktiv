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
    <Hero />
    <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
      <h2 class="font-barlow font-light uppercase text-gray-700 text-6xl mb-4 text-center">Kontakt</h2>
      <p class="text-gray-400 text-2xl mb-8">Za umirovljenike odobravamo <span class="font-medium text-fizio-500">10% popusta</span> na sve cijene</p>
    </div>
    <Tim />
  </div>

</template>

