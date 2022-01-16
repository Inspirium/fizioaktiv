<template>
  <div class="">
    <Hero :image="'feel_good.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins lg:text-6xl">
          Upoznajte <br><span class="text-fizio-500">naš tim</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 sm:text-3xl uppercase">
          Godine iskustva Vama na raspolaganju
        </p>
      </slot>
    </Hero>

    <div class="max-w-4xl m-auto ">
      <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-6xl mb-4 text-center">O nama</h2>
        <p class="text-gray-400 text-2xl mb-8">Ovdje smo za <span class="font-medium text-fizio-500">Vas</span> i zbog vaših para koje ćemo vam uzet</p>
      </div>
      <div class="flex space-x-12">
        <div class="space-y-5">
          <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="~assets/img/one.jpg" alt="" />
          <h2 class="mt-10 text-fizio-500">Ana Kovačević Drmić</h2>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologije ljudskog tijela. Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelunatomije i fiziologije ljudskog tijela. Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologije ljudskog tijela.</p>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologiskog tijela. Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologije ljudskog tijela.</p>
        </div>
        <div class="space-y-5">
          <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="~assets/img/one.jpg" alt="" />
          <h2 class="mt-10 text-fizio-500">Josipa Ćosić</h2>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologije ljudskog tijela. Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelunatomije i fiziologije ljudskog tijela. Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologije ljudskog tijela.</p>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologiskog tijela. Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologije ljudskog tijela.</p>
        </div>
      </div>
    </div>
    <Tim />
  </div>
</template>

<script setup lang="ts">

import { servicesList } from "~/stores/services";
import Hero from '~/components/Hero'
import Test from '~/components/Test'
import Zdravlje from '~/components/Zdravlje'
import Ljepota from '~/components/Services.vue'
import Tim from '~/components/Tim'

const sitedata = servicesList()

</script>
