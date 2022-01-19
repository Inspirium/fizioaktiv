<template>
  <div class="">
    <Hero :image="'/uztrazvuk.jpg'">
      <slot>
        <span class="hero-supertitle">Uđite u svijet relaksacije</span>
        <h1 class="hero-title">
          <span>TERAPIJSKI ULTRAZVUK</span>
        </h1>
        <p class="hero-subtitle">
          Individualna medicinska gimnastika - vježbe
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Terapijski ultrazvuk je primjena ultrazvučne energije  svrhu liječenja. Ultrazvuk zbog svog dvostrukog djelovanja, mehaničkog i toplinskog, predstavlja vrlo efikasnu vrstu fizikalne terapije u terapiji brojnih patološkim stanja živčanog i mišićno -koštanog sustava.
        </p>
        <p class="lg:col-start-4 text-lg">Tretman je bezbolan i siguran, a klijent može osjetiti blagu toplinu na koži.
        </p>
        <p class="lg:col-start-4 text-lg">Indikacije za primjenu terapije ultrazvukom: akutne ozljede tetiva, mišića i ligamenata, ožiljci, burzitis, periartritis zglobova, mialgije, miogeloze, kontrakture, artroze, diskopatije i ostala bolna stanja.</p>
        <p class="lg:col-start-4 text-lg">Kontraindikacije za primjenu terapije ultrazvukom: akutne i kronične infekcije, maligna stanja, tromboza, teža srčana oboljenja, pacemaker i sl.</p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/feel_good.jpg'" />
    <Pricelist pricelistPart="uzvterapija"></Pricelist>
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
