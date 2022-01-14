<template>
  <div class="">
    <Heroservices>
      <slot>
        <span class="px-5 py-2 text-white text-base font-semibold leading-5 uppercase tracking-wide bg-fizio-500 rounded-full">Uđite u svijet relaksacije</span>
        <h1 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span class="block text-gray-600 font-barlow uppercase font-light sm:text-8xl">TERAPIJSKI ULTRAZVUK</span>
        </h1>
        <p class="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-2xl">
          Individualna medicinska gimnastika - vježbe
        </p>
      </slot>
    </Heroservices>
    <main>
      <div class="grid sm:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5">
        <p class="sm:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">Terapijski ultrazvuk je primjena ultrazvučne energije  svrhu liječenja. Ultrazvuk zbog svog dvostrukog djelovanja, mehaničkog i toplinskog, predstavlja vrlo efikasnu vrstu fizikalne terapije u terapiji brojnih patološkim stanja živčanog i mišićno -koštanog sustava.
        </p>
        <p class="sm:col-start-4 text-lg">Tretman je bezbolan i siguran, a klijent može osjetiti blagu toplinu na koži.
        </p>
        <p class="sm:col-start-4 text-lg">Indikacije za primjenu terapije ultrazvukom: akutne ozljede tetiva, mišića i ligamenata, ožiljci, burzitis, periartritis zglobova, mialgije, miogeloze, kontrakture, artroze, diskopatije i ostala bolna stanja.</p>
        <p class="sm:col-start-4 text-lg">Kontraindikacije za primjenu terapije ultrazvukom: akutne i kronične infekcije, maligna stanja, tromboza, teža srčana oboljenja, pacemaker i sl.</p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600">Rezerviraj termin!</a>
    </main>
    <Contentlead />
    <Pricelist pricelistPart="uzvterapija"></Pricelist>
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
