<template>
  <div class="">
    <Heroservices>
      <slot>
        <span class="px-5 py-2 text-white text-base font-semibold leading-5 uppercase tracking-wide bg-fizio-500 rounded-full">Uđite u svijet relaksacije</span>
        <h1 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span class="block text-gray-600 font-barlow uppercase font-light sm:text-8xl">Vježbe</span>
        </h1>
        <p class="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-2xl">
          Individualna medicinska gimnastika - vježbe
        </p>
      </slot>
    </Heroservices>
    <main>
      <div class="grid sm:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5">
        <p class="sm:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">Kao što sama riječ govori individualno vježbanje podrazumjeva vježbanje jedan na jedan sa fizioterapeutom. Individualno možete vježbati iz raznih razloga: oporavak nakon ozljede, priprema za operativni zahvat, problemi s kralježnicom, problemi s koljenima, bolna ramena, degenerativne bolesti i ostala slična stanja.
        </p>
        <p class="sm:col-start-4 text-lg">S obzirom da danas prevladava sjedilački način života, on može dovesti do raznih problema. Dugotrajno sjedenje skraćuje mišiće i ligamente, a posljedice su narušena postura, bolovi u tijelu (križobolja i bolovi u vratu su najčešći), ograničeni pokret, napetost i sl.
        </p>
        <p class="sm:col-start-4 text-lg">Vježbe primjenjuje same ili u kombinaciji sa ostalim metodama fizikalnih procedura ( Ultrazvuk i elektroterapijske struje i EMMETT tehnikom) prilagođene stanju i potrebama klijenta.
        </p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead />
    <Pricelist pricelistPart="vjezbe"></Pricelist>
    <Contact />
    <Services />
    <Tim />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import Heroservices from '~/components/Heroservices'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'
import Services from '~/components/Services'
</script>
