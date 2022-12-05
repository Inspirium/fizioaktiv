
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
    <Hero :image="'../dryneedling.jpg'">
      <slot>
        <span class="hero-supertitle">Tretman za bol i napetost mišića</span>
        <h1 class="hero-title ">
          <span>Dry needling</span>
        </h1>
        <p class="hero-subtitle">
          Iskusite dobrobiti dry needlinga za ublažavanje boli i poboljšani opseg pokreta
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Dry needling je vrlo učinkovit tretman za one koji pate od kronične boli. Tehnika uključuje korištenje tankih igala za stimuliranje specifičnih okidačkih točaka (trigger points) u tijelu, pružajući olakšanje od boli i nelagode.</p>
        <p class="lg:col-start-4 text-lg">Dry needling pokazao se posebno učinkovitim u liječenju mišićno-koštanih bolova, poput bolova u leđima i vratu, kao i kroničnih glavobolja i migrena. Također se može koristiti za poboljšanje mobilnosti i raspona pokreta, što omogućuje veću sposobnost obavljanja svakodnevnih aktivnosti.</p>
        <p class="lg:col-start-4 text-lg">Naši iskusni i obučeni praktičari koriste dry needling kako bi ciljali na uzrok vaše boli, pružajući dugotrajno olakšanje i poboljšano opće zdravlje i dobrobit. Posjetite nas i sami otkrijte prednosti dry needlinga.
        </p>
             </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/dryneedling.jpg'" :content="'Za razliku od tradicionalne akupunkture, dry needling temelji se na načelima zapadne medicine i fokusira se na specifične mišićne okidačke točke'"/>
    <Pricelist pricelistPart="dryneedling"></Pricelist>
    <Contact />
    <Services />
    <Tim />
  </div>
</template>
