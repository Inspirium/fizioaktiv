<template>
  <div class="">
    <Hero :image="'/anticelulitna_masaza.jpg'">
      <slot>
        <span class="hero-supertitle">OBLIKUJTE TIJELO KAKVO ŽELITE</span>
        <h1 class="hero-title">
          <span>Anticelulitna masaža</span>
        </h1>
        <p class="hero-subtitle">
          Jedan od najučinkovitijih saveznika u borbi protiv omraženog celulita
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Anticelulitna masaža izvodi se brzim dinamičkim pokretima, srednjeg do jačeg intenziteta, ovisno o dogovoru s klijenticom. Potiče cirkulaciju krvi i limfe, otklanja iz tijela otpadne tvari i razgrađuje celulit.
        </p>
        <p class="lg:col-start-4 text-lg">Celulit nastaje kao posljedica nepravilnog načina prehrane, nedovoljnog kretanja, stresa, a može nastati i kao posljedica hormonalnog poremećaja. Osim što masaža fizički djeluje na celulit, ona povećava sposobnost kože za preuzimanje aktivnih sastojaka iz proizvoda za uklanjanje celulita. U FizioAktivu anticelulitnu masažu najčešće radimo u kombinaciji s aparaturnom limfnom drenažom i Vacuslim 48 metodama.
        </p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/anticelulitna_masaza.jpg'" :content="'Cilj je razbiti nakupine tekućine i masnih stanica u dubljem sloju kože koje nazivamo celulit i koje bedrima daju neželjeni izgled narančine kore'"/>
    <Pricelist pricelistPart="anticelulitna"></Pricelist>
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
