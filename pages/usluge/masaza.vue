<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'
import Services from '~/components/Services'

const route = useRoute()

console.log(route)



</script>

<template>
  <Html :lang="'en-US'">
    <Head>
      <Title>svijet relaksacije title</Title>
      <Meta name="description" :content="`My page's description`" />
    </Head>
  </Html>

  <div class="">
    <Hero :image="'/masaza-usluge.jpg'">
      <slot>
        <span class="hero-supertitle">Uđite u svijet relaksacije</span>
        <h1 class="hero-title">
          <span>Masaže</span>
        </h1>
        <p class="hero-subtitle">
          Mnogo je tehnika masaže, no cilj je svima isti: smanjiti napetost i bolna stanja te potaknuti cirkulaciju krvi i limfe
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lg:col-start-4 text-xl sm:text-2xl mb-8 leading-8 sm:leading-10 font-semibold font-poppins">Masaža je najstariji oblik liječenja koji se od davnina primjenjuje u medicinske, relaksirajuće i kozmetičke svrhe. Masaža opušta tijelo i uklanja napetost i bolove u mišićima te ubrzava cirkulaciju krvi i limfe, što smanjuje bolna stanja i potiče opskrbu tkiva kisikom i hranjivim tvarima.
        </p>
        <p class="lg:col-start-4 text-lg">Postoji više vrsta i tehnika masaža, a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologije ljudskog tijela.
        </p>
        <h2 class="lg:col-start-4 pt-4">Medicinska masaža</h2>
        <p class="lg:col-start-4 text-lg">Ovaj tip masaže najučinkovitiji je i klijentima najprivlačniji, te je odličan način pripreme tkiva za primjenu tehnika mobilizacije i manipulacije. Takva kombinacija donosi dugotrajne rezultate jer joj je cilj rješavanje uzroka problema i sastavni je dio rehabilitacijskog plana liječenja.
        </p>
        <p class="lg:col-start-4 text-lg">Dobrobiti medicinske masaže su značajne, a kao najvažnije treba spomenuti uklanjanje napetosti i bolova muskulature te smanjenje psihičkih napetosti i glavobolja.
        </p>
        <h2 class="mt-5 lg:col-start-4 pt-4">Sportska masaža</h2>
        <p class="lg:col-start-4 text-lg">Sportska masaža pomaže poboljšanju tjelesnih sposobnosti sportaša. Pospješuje zagrijavanje i prokrvljenost mišića. Kod pojačanog mišićnog napora dolazi do nakupljanja mliječne kiseline zbog kojeg je moguće u mišićima osjećati umor i laganu upalu, a upravo je sportska masaža najbolji način za ubrzavanje oporavka mišića nakon intenzivnog treninga.
        </p>
        <h2 class="mt-5 lg:col-start-4 pt-4">Anticelulitna masaža</h2>
        <p class="lg:col-start-4 text-lg">Anticelulitna masaža jedan je od najučinkovitijih saveznika u borbi protiv omraženog celulita. Izvodi se brzim dinamičkim pokretima srednjeg do jačeg intenziteta, ovisno o dogovoru s klijenticom. Potiče cirkulaciju krvi i limfe, uklanja iz tijela otpadne tvari i razgrađuje celulit.
        </p>
        <p class="lg:col-start-4 text-lg">Celulit nastaje kao posljedica nepravilnog načina prehrane, nedovoljnog kretanja, stresa, a može nastati i kao posljedica hormonalnog poremećaja. Osim što masaža fizički djeluje na celulit, ona povećava sposobnost kože za preuzimanje aktivnih sastojaka iz proizvoda za uklanjanje celulita.
        </p>
        <p class="lg:col-start-4 text-lg">U FizioAktivu anticelulitnu masažu radimo u kombinaciji s aparaturnom limfnom drenažom i Vacuslim 48 metodama.
        </p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/masaza-usluge.jpg'" :content="'Svaka masaža tijelu vrijedi kao 7-8 sati sna'"></Contentlead>
    <Pricelist pricelistPart="masaze"></Pricelist>
    <Contact />
    <Services />
    <Tim />
  </div>
</template>
