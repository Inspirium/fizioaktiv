<template>
  <div class="">
    <Hero :image="'/feel_good.jpg'">
      <slot>
        <span class="px-5 py-2 text-white text-base font-semibold leading-5 uppercase tracking-wide bg-fizio-500 rounded-full">Uđite u svijet relaksacije</span>
        <h1 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span class="block text-gray-600 font-barlow uppercase font-light sm:text-8xl">ANTICELULITNA MASAŽA</span>
        </h1>
        <p class="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-2xl">
          Anticelulitna masaža je jedan od najučinkovitijih saveznika u borbi protiv omraženog celulita.
        </p>
      </slot>
    </Hero>
    <main>
      <div class="lg:col-start-4grid sm:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-8">
        <p class="lg:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">Anticelulitna masaža izvodi se brzim dinamičkim pokretima, srednjeg do jačeg intenziteta, ovisno o dogovoru s klijenticom. Potiče cirkulaciju krvi i limfe, otklanja iz tijela otpadne tvari i razgrađuje celulit.
        </p>
        <p class="lg:col-start-4 text-lg">Potiče cirkulaciju krvi i limfe, otklanja iz tijela otpadne tvari i razgrađuje celulit.
          Celulit nastaje kao posljedica nepravilnog načina ishrane, nedovoljnog kretanja, stresa, a može nastati i kao posljedica hormonalnog poremećaja.
          Osim što masaža fizički djeluje na celulit, ona povećava sposobnost kože za preuzimanje aktivnih sastojaka iz drugih proizvoda za uklanjanje celulita.
          U FizioAktivu ju radimo u kombinacije s aparaturnom limfnom drenažom i Vacuslim 48 metodama.
        </p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead />
    <Pricelist pricelistPart="anf"></Pricelist>
    <Contact />
    <Services />
    <Tim />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'
import Services from '~/components/Services'
</script>
