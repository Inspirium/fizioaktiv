<template>
  <Heroservices>
    <slot>
      <span class="px-5 py-2 text-white text-base font-semibold leading-5 uppercase tracking-wide bg-fizio-500 rounded-full">Uđite u svijet relaksacije</span>
      <h1 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
        <span class="block text-gray-600 font-barlow uppercase font-light sm:text-8xl">Masaže</span>
      </h1>
      <p class="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-2xl">
        Svi volimo masaže...
      </p>
    </slot>
  </Heroservices>

  <main>
    <div class="grid sm:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5">
      <p class="sm:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">Masaža je najstariji oblik liječenja koja se od davnina primjenjuje u medicinske, relaksirajuće i kozmetičke svrhe. Masaža opušta tijelo i uklanja napetost i bolove u mišićima te ubrzava cirkulaciju krvi i limfe, a time smanjujemo bolna stanja, opskrbljujemo tkivo kisikom i hranjivim tvarima.</p>
      <p class="sm:col-start-4 text-lg">Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologije ljudskog tijela.</p>
      <h2 class="sm:col-start-4 pt-4">Medicinska masaža</h2>
      <p class="sm:col-start-4 text-lg">Ovaj tip masaže je najučinkovitiji i klijentima najprivlačniji tip masaže, te je odličan način pripreme tkiva za primjenu tehnika mobilizacije i manipulacije. Takva kombinacija donosi dugotrajne rezultate jer se ide s ciljem rješavanja uzroka problema i sastavni je dio plana rehabilitacijskog plana liječenja.</p>
      <p class="sm:col-start-4 text-lg">Dobrobiti medicinske masaže su značajne,a kao najvažnije bi napomenuli uklanjanje napetosti i bolova muskulature te smanjenje psihičkih napetosti i glavobolja.</p>
      <h2 class="mt-5 sm:col-start-4 pt-4">Sportska masaža</h2>
      <p class="sm:col-start-4 text-lg">Sportska masaža pomaže poboljšanju tjelesnih sposobnosti kod sportaša. Pospješuje zagrijavanje i prokrvljenost mišića. Kod pojačanog mišićnog napora dolazi do nakupljanja mliječne kiseline i stoga je sportska masaža važna za brz oporavak kod sportaša poslije intenzivnog treninga. Tijelu je nakon napora potreban odmor da bi se lakše oporavio od treninga ,a najbolji način za ubrzavanje oporavka mišića je sportska masaža.</p>
      <h2 class="mt-5 sm:col-start-4 pt-4">Anticelulitna masaža</h2>
      <p class="sm:col-start-4 text-lg">Anticelulitna masaža je jedan od najučinkovitijih saveznika u borbi protiv omraženog celulita.
        Izvodi se brzim dinamičkim pokretima, srednjeg do jačeg intenziteta, ovisno o dogovoru s klijenticom. Potiče cirkulaciju krvi i limfe, otklanja iz tijela otpadne tvari i razgrađuje celulit.
      <p class="sm:col-start-4 text-lg">Celulit nastaje kao posljedica nepravilnog načina ishrane, nedovoljnog kretanja, stresa, a može nastati i kao posljedica hormonalnog poremećaja.
        Osim što masaža fizički djeluje na celulit, ona povećava sposobnost kože za preuzimanje aktivnih sastojaka iz drugih proizvoda za uklanjanje celulita.</p>
      </p>
      <p class="sm:col-start-4 text-lg">U FizioAktivu ju radimo u kombinacije s aparaturnom limfnom drenažom i Vacuslim 48 metodama.</p>
    </div>
    <a href="/kontakt" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
  </main>
  <Contentlead />
  <Pricelist pricelistPart="masaze"></Pricelist>
  <Contact />
  <Services />
  <Tim />
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import Heroservices from '~/components/Heroservices'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'
import Services from '~/components/Services'

const route = useRoute()

console.log(route)

</script>
