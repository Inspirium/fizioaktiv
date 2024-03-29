<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'
import Services from '~/components/Services'
</script>

<template>
  <div class="">
    <Hero :image="'/anf.jpg'">
      <slot>
        <span class="hero-supertitle">ŽIVITE BEZ BOLA I UPALE</span>
        <h1 class="hero-title">
          <span>Amino-neuro-frekvencijska terapija</span>
        </h1>
        <p class="hero-subtitle">
          Poboljšanjem signalizacije živčanog sustava izravno na staničnoj razini, postižu se izvanredni trajni rezultati – smanjuje bol i upala u organizmu
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Frekvencije kontroliraju sve funkcije u tijelu. Aminoneurofrekvencijska terapija koristi frekvencije za optimizaciju signalizacije živčanog sustava obnavljanjem normalne biokemijske reakcije u stanicama.
        </p>
        <p class="lg:col-start-4 text-lg">Kao rezultat toga, simptomi kao što su bol i/ili upala se smanjuju, a tjelesne funkcije se normaliziraju.
        </p>
        <p class="lg:col-start-4 text-lg">Desetljećima se zna da loša ili oštećena živčana frekvencija pojačava upalu i narušava funkciju živčanog sustava i do danas znanstvenici nisu uspjeli riješiti ovaj problem, no aminoneurofrekvencijska terapija ima odgovor na to! Osnivač ANF terapije i glavni instruktor odgovoran za razvoj terapije, dr. Mikel H-G Hoff, razvio je ovu terapiju kao odgovor na te naizgled nerješive probleme živčanog sustava.
        </p>
        <h2 class="lg:col-start-4 pt-4">Kako ANF radi?
        </h2>
        <p class="lg:col-start-4 text-lg">ANF terapija koristi kombinaciju nosivih uređaja koji emitiraju frekvenciju, ANF diskova. Svaki disk nanosi se izravno na kožu i aktivira se tjelesnom toplinom. Oni prenose jedinstveni raspon frekvencija kroz neurone u tijelu. Živčani sustav prenosi te frekvencije, pokrećući proces izlječenja i samoregulacije. Poboljšanjem signalizacije živčanog sustava izravno na staničnoj razini, učinak tretmana mnogo je brži i ima izvanredne trajne rezultate.
        </p>
        <p class="lg:col-start-4 text-lg">ANF terapija ne zahtijeva upotrebu lijekova ili kemikalija.
        </p>
        <h2 class="lg:col-start-4 pt-4">Kako izgleda ANF tretman?
        </h2>
        <p class="lg:col-start-4 text-lg">Terapija je kombinacija tehnike kliničkog pregleda, dijagnostičke metodologije i liječenja ANF diskovima.
        </p>
        <p class="lg:col-start-4 text-lg">Nakon razgovora s klijentom i popunjavanja upitnika, pregledavamo tijelo prateći živčane putove i usredotočujemo se na pronalaženje temeljnog uzroka problema.
        </p>
        <p class="lg:col-start-4 text-lg">Prema nalazima i povezanoj dijagnozi, izrađujemo protokol i primjenjujemo jedinstveni medicinski uređaj, ANF diskove, kako bismo smanjili bol, uklonili upalu i spriječili njeno širenje živčanim i limfnim sustavom.
        </p>
        <p class="lg:col-start-4 text-lg">Djelovanje ANF diska traje 72 sata (tri dana), a kod male djece i beba može trajati do pet dana. Često je potrebno odraditi više terapija, posebice kod dugotrajne i kronične upale, kako bi se problem u potpunosti riješio.
        </p>

        <h2 class="lg:col-start-4 pt-4">Indikacije za primjenu ANF terapije su:
        </h2>
        <ul class="ullist">
          <li class="font-semibold text-lg">akutna i kronična bol </li>
          <li class="font-semibold text-lg">hernija diska</li>
          <li class="font-semibold text-lg">upala</li>
          <li class="font-semibold text-lg">petni trn</li>
          <li class="font-semibold text-lg">ozljede mekih tkiva</li>
          <li class="font-semibold text-lg">artritis svih zglobova</li>
          <li class="font-semibold text-lg">teniski lakat</li>
          <li class="font-semibold text-lg">fibromialgija</li>
          <li class="font-semibold text-lg">smrznuto rame</li>
          <li class="font-semibold text-lg">stres</li>
          <li class="font-semibold text-lg">bol u kralježnici</li>
          <li class="font-semibold text-lg">nesanica</li>
          <li class="font-semibold text-lg">poremećaji limfnog sustava</li>
          <li class="font-semibold text-lg">migrene</li>
          <li class="font-semibold text-lg">poremećaji živčanog sustava</li>
          <li class="font-semibold text-lg">uganuće zglobova</li>
        </ul>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/anf.jpg'" :content="'ANF terapija poboljšava signalizaciju živčanog sustava izravno na staničnoj razini, smanjujući simptome kao što su bol i/ili upala i normalizirajući tjelesne funkcije'" />
    <Pricelist pricelistPart="anf"></Pricelist>
    <Contact />
    <Services />
    <Tim />
  </div>
</template>

