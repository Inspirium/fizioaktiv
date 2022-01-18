<template>
  <div class="">
    <Hero :image="'/vjezbe.jpg'">
      <slot>
        <span class="hero-supertitle">Uđite u svijet relaksacije</span>
        <h1 class="hero-title">
          <span class="block text-gray-600 font-barlow uppercase font-light text-6xl sm:text-8xl break-all">Vježbe</span>
        </h1>
        <p class="hero-subtitle">
          Individualna medicinska gimnastika - vježbe
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Kao što sama riječ govori individualno vježbanje podrazumjeva vježbanje jedan na jedan sa fizioterapeutom. Individualno možete vježbati iz raznih razloga: oporavak nakon ozljede, priprema za operativni zahvat, problemi s kralježnicom, problemi s koljenima, bolna ramena, degenerativne bolesti i ostala slična stanja.
        </p>
        <p class="lg:col-start-4 text-lg">S obzirom da danas prevladava sjedilački način života, on može dovesti do raznih problema. Dugotrajno sjedenje skraćuje mišiće i ligamente, a posljedice su narušena postura, bolovi u tijelu (križobolja i bolovi u vratu su najčešći), ograničeni pokret, napetost i sl.
        </p>
        <p class="lg:col-start-4 text-lg">Vježbe primjenjuje same ili u kombinaciji sa ostalim metodama fizikalnih procedura (Ultrazvuk i elektroterapijske struje i EMMETT tehnikom) prilagođene stanju i potrebama klijenta.
        </p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/feel_good.jpg'" />
    <Pricelist pricelistPart="vjezbe"></Pricelist>
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
