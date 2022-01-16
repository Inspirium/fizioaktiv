<template>
  <div class="">
    <Hero :image="'../feel_good.jpg'">
      <slot>
        <span class="px-5 py-2 text-white text-base font-semibold leading-5 uppercase tracking-wide bg-fizio-500 rounded-full">Uđite u svijet relaksacije</span>
        <h1 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span class="block text-gray-600 font-barlow uppercase font-light sm:text-8xl">BEAUTY EXPERT 4u1</span>
        </h1>
        <p class="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-2xl">
          Beauty expert je odličan uređaj za oblikovanje tijela i smanjenje viška tjelesne težine.
        </p>
      </slot>
    </Hero>
    <main>
      <div class="lg:col-start-4grid sm:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-8">
        <p class="lg:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">Beauty Expert je odličan uređaj za oblikovanje tijela i smanjenje viška tjelesne težine. Tehnologije, kao što su: elektro stimulacija, infracrvena terapija, limfna drenaža i magnetna terapija su udružene u jednom uređaju.
        </p>
        <p class="lg:col-start-4 text-lg">
          Uređaj 4u1 Beauty Expert je razvijen nakon temeljitih istraživanja u području smanjenja viška tjelesne masnoće i oblikovanja tijela.
          Niska frekvencija električne energije stimulira mišiće i višak masnoće, a električni impulsi pospješuju razgradnju masnih stanica.
          Elektrostimulacija potiče djelovanje mišićnih vlakana, mišići se stežu i opuštaju a učinak je identičan kao kod tjelovježbe.
          Pomoću IR (infracrvene) energije se oslobađa toplinska energija što ima neposredan učinak na strukturu masnih stanica. Time se pospješuje metabolizam te biokemijska reakcija koja dovodi do razgradnje masnih stanica.
          Limfna drenaža ili presoterapija potiče rad limfnog  sustava te se tako lakše izlučuju toksini, masnoće i smanjuje se celulit.
        </p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead />
    <Pricelist pricelistPart="anf"></Pricelist>
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
