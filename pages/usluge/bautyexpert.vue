<template>
  <div class="">
    <Hero :image="'../vacuslim.jpg'">
      <slot>
        <span class="hero-supertitle">OBLIKUJTE TIJELO KAKVO ŽELITE</span>
        <h1 class="hero-title">
          <span>Beauty Expert 4u1</span>
        </h1>
        <p class="hero-subtitle">
          Kombinacijom beauty tehnologija postiže se sveobuhvatan učinak – na mišiće, masne stanice, cirkulaciju krvi i limfe
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Beauty Expert odličan je uređaj za oblikovanje tijela i smanjenje viška tjelesne mase. Tehnologije kao što su elektrostimulacija, infracrvena terapija, limfna drenaža i magnetna terapija udružene su u jednom uređaju.
        </p>
        <p class="lg:col-start-4 text-lg">Uređaj 4u1 Beauty Expert razvijen je nakon temeljitih istraživanja u području smanjenja viška tjelesne masnoće i oblikovanja tijela. Niska frekvencija električne energije stimulira mišiće i višak masnoće, a električni impulsi pospješuju razgradnju masnih stanica.
        </p>
        <p class="lg:col-start-4 text-lg">Elektrostimulacija potiče djelovanje mišićnih vlakana, mišići se stežu i opuštaju, a učinak je identičan kao kod tjelovježbe. Pomoću IR (infracrvene) energije oslobađa se toplinska energija, što ima neposredan učinak na strukturu masnih stanica. Time se pospješuje metabolizam te biokemijska reakcija koja dovodi do razgradnje masnih stanica. Limfna drenaža ili presoterapija potiče rad limfnog sustava te se tako lakše izlučuju toksini, otapaju masnoće i smanjuje celulit.
        </p>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/vacuslim.jpg'" :content="'Beauty expert 4u1 električnim impulsima stimulira mišiće, toplinskom energijom utječe na strukturu masnih stanica, a drenažom pospješuje rad limfnog sustava'"/>
    <Pricelist pricelistPart="bautyexpert"></Pricelist>
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
