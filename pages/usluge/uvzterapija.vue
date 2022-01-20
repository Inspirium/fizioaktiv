<template>
  <div class="">
    <Hero :image="'/ultrazvuk.jpg'">
      <slot>
        <span class="hero-supertitle">LIJEČENJE ULTRAZVUČNIM VALOVIMA</span>
        <h1 class="hero-title">
          <span>Terapijski ultrazvuk</span>
        </h1>
        <p class="hero-subtitle">
          Bezbolno i sigurno tretira brojna patološka stanja živčanog i mišićno-koštanog sustava
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Terapijski ultrazvuk je primjena ultrazvučne energije svrhu liječenja. Ultrazvuk zbog svog dvostrukog djelovanja, mehaničkog i toplinskog, predstavlja vrlo efikasnu vrstu fizikalne terapije za brojna patološka stanja živčanog i mišićno-koštanog sustava.
        </p>
        <p class="lg:col-start-4 text-lg">Tretman je bezbolan i siguran, a klijent može osjetiti blagu toplinu na koži.
        </p>
        <p class="lg:col-start-4 text-lg">Indikacije za primjenu terapije ultrazvukom uključuju akutne ozljede tetiva, mišića i ligamenata, ožiljke, burzitis, periartritis zglobova, mialgije, miogeloze, kontrakture, artroze, diskopatije i ostala bolna stanja.
        </p>
        <p class="lg:col-start-4 text-lg">Kontraindikacije za primjenu terapije ultrazvukom jesu akutne i kronične infekcije, maligna stanja, tromboza, teža srčana oboljenja, pacemaker i slično.
        </p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/ultrazvuk.jpg'" :content="'Zvučnim valovima koje ljudsko uho ne može čuti terapijski ultrazvuk međudjeluje s tkivom zagrijavajući ga'" />
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
