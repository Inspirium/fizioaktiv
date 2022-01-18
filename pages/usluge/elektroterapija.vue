<template>
  <div class="">
    <Hero :image="'/elektrostimulacija.jpg'">
      <slot>
        <span class="hero-supertitle">Strujom do oporavka</span>
        <h1 class="hero-title">
          <span class="block text-gray-600 font-barlow uppercase font-light text-6xl sm:text-8xl break-all">ELEKTROTERAPIJA</span>
        </h1>
        <p class="hero-subtitle">
          Elektroterapija je terapijska metoda koja podrazumijeva direktnu primjenu električne struje u svrhu liječenja
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Dijeli se prema frekvenciji struje koju koristimo.
        </p>
        <p class="lg:col-start-4 text-lg"><span class="text-fizio-500 font-semibold">TENS — </span>osniva se na principu elektroanalgezije, gdje dolazi do stimuliranja A živčanih vlakana. Stimulacijom tih A vlakana dolazi do kočenja C vlakana odgovornih za prijenos boli. Elektrode se postavljaju na bolno mjesto, a tretman traje od 15-30 min.
        </p>
        <p class="lg:col-start-4 text-lg">TENS koristimo kod akutne i kronične boli, trauma, reumatskih bolesti, ortopedskih bolesti i ostalih bolnih stanja.
        </p>
        <p class="lg:col-start-4 text-lg"><span class="text-fizio-500 font-semibold">INTERFERENTNE STRUJE — </span>srednjefrekventne izmjenične struje. To su struje sa najdubljim djelovanjem,imaju analgetski i protuupalni učinak. Odlično djeluju na sva bolna stanja, pomažu u  procesu cijeljenja kostiju nakon prijeloma, kod ozljeda mišića, ligamenata i tetiva. To je jedina struja koja nije kontraindicirana kod osteosinteze (pločice, vijci i endoproteze).
        </p>
        <p class="lg:col-start-4 text-lg"><span class="text-fizio-500 font-semibold">DIJADINAMSKA STRUJA — </span>NISKOFREKVENTNA, POLUVALNA ILI PUNOVALNA STRUJA SINUSOIDNOG OBLIKA. Postoje 4 modulacije koje se mogu kombinirati  i tada dobivamo puno jači učinak. Djeluju na smanjenje bola, otekline i upale, lokalo povećanje cirkulacije, te ubrzano zacjeljivanje tkiva.
        </p>
        <p class="lg:col-start-4 text-lg"><span class="text-fizio-500 font-semibold">GALVANSKE STRUJE — </span>NISKOFREKVENTNA,KONSTANTNA ISTOSMJERNA STRUJA. Djeluje na živčane završetke odgovorne za prijenos boli tako da se bol smanjuje.</p>
        <p class="lg:col-start-4 text-lg">Koristimo ih za poboljšanje cirkulacije, smanjenje boli, ubrzavanje regeneracije živaca, pareze i paralize.</p>
        <p class="lg:col-start-4 text-lg"><span class="text-fizio-500 font-semibold">ELEKTROSTIMULACIJA — </span>struja koja izaziva mišićnu kontrakciju pomoću električnih podražaja. Djeluju na mišić na način da izazivaju prirodnu kontrakciju takvu kakva se postiže fizičkom aktivnošću. Time nastojimo spriječiti atrofiju mišića.</p>

        <h2 class="lg:col-start-4 pt-4">Može se koristiti za:</h2>

        <ul class="ullist">
          <li class="font-semibold text-lg">bržu regeneraciju mišića kod sportaša nakon treninga i napornih natjecanja što doprinosi sportskoj izdržljivosti</li>
          <li class="font-semibold text-lg">za sprečavanje atrofije, kod smanjene mišićne snage radi neaktivnosti ili kada zbog povrede ne možemo aktivno izvoditi kontrakcije određenih mišića</li>
          <li class="font-semibold text-lg">oblikovanje tijela - pravilnim izborom programa možemo jačati mišiće i oblikovati tijelo i utjecati na smanjenje celulita. Elektrostimulacija aktivira metabolizam i dovodi do procesa lipolize - otapanje lipocita. Tretman poboljšava cirkulaciju i oksigenaciju tkiva što ubrzava staničnu obnovu.
          </li>
        </ul>
        <p class="lg:col-start-4 text-lg">Općenite kontraindikacije za primjenu elektroterapije su akutne bolesti, upale i infektivna stanja, promjene na koži na mjestu aplikacije, trudnoća i elektrostimulator srca (pacemaker).
        </p>

      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/feel_good.jpg'" />
    <Pricelist pricelistPart="elektroterapija"></Pricelist>
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
