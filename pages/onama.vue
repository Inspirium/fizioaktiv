<template>
  <div class="">
    <Hero :image="'/komadi-light.jpg'">
      <slot>
        <h1 class="text-4xl drop-shadow-2xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl">
          O nama <br><span class="text-fizio-500"></span>
        </h1>
<!--        <p class="mt-3 drop-shadow-2xltext-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">-->
<!--          Godine iskustva Vama na raspolaganju-->
<!--        </p>-->
      </slot>
    </Hero>

    <div class="max-w-4xl m-auto mb-20">
      <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
        <p class="text-gray-400 text-xl sm:text-2xl mb-8 px-6">FIZIOAKTIV je osnovan krajem 2021. godine s ciljem pružanja usluga u službi zdravlja i ljepote. U njegovo nastajanje i rad uloženo je dugogodišnje iskustvo i entuzijazam našeg tima, čija je misija kroz razne programe masaža, vježbi i terapija pomoći vam    <span class="font-medium text-fizio-500">održati i unaprijediti</span>  zdravlje.</p>
      </div>
      <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl text-center">Upoznajte naš tim</h2>
      <p class="text-gray-400 text-xl sm:text-2xl px-6 mb-10 ">Godine iskustva
        <span class="font-medium text-fizio-500">Vama</span>
        na raspolaganju
      </p>
      <div class="flex flex-col sm:flex-row sm:space-x-12 px-4">
        <div class="flex-1">
          <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="/josipa.png" alt="" />
          <h2 class="mt-6 text-fizio-500">Josipa Ćosić</h2>
          <p class="text-lg uppercase -mt-1">Baccalaureus fizioterapije</p>
          <p class="text-lg mt-1">ANF Pain terapeut</p>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Josipa Ćosić već je krajem osnovne škole znala da se želi baviti fizioterapijom te je završila Srednju školu za fizioterapeutskog tehničara, a potom i Zdravstveno veleučilište 2004. godine, stekavši titulu stručne prvostupnice fizioterapije. Svoje bogato radno iskustvo počela je graditi u fitness klubu, a usavršavala tijekom 13 godina rada u privatnoj Poliklinici za fizikalnu medicinu i rehabilitaciju.
          </p>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Svakodnevni rad s klijentima potaknuo ju je na daljnje nadograđivanje formalnog obrazovanja te je pohađala i završila tečajeve:</p>
          <ul class="ullist text-left">
            <li>
              <NuxtLink to="/usluge/vjezbe" class="font-semibold text-lg">Normalni pokret</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/usluge/anf" class="font-semibold text-lg">ANF Academy – Pain Therapist</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/usluge/emmett" class="font-semibold text-lg">Emmet tehnika Modul 1 i 2.</NuxtLink>
            </li>
          </ul>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Smatra da potreba za obrazovanjem i usavršavanjem nikada ne završava te planira i daljnju edukaciju i proširivanje svojih znanja i horizonata.
          </p>
        </div>
        <div class="flex-1">
          <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="/ana.png" alt="" />
          <h2 class="mt-6 text-fizio-500">Ana Kovačević Drmić</h2>
          <p class="text-lg uppercase -mt-1">Baccalaureus fizioterapije</p>
          <p class="text-lg mt-1">Bowen terapeut, Emmett terapeut, ANF Pain terapeut</p>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Razvojni put Ane Kovačević Drmić također je počeo u Srednjoj školi za fizioterapeutskog tehničara i nastavio se na Zdravstvenom veleučilištu, gdje je 2006. godine stekla titulu stručne prvostupnice fizioterapije. Zdravlje i ljepota u fokusu su joj od prvih radnih iskustava, koje je brusila uslugama masaže u kozmetičkom salonu i fitness klubu. No najviše iskustva stekla je tijekom 13 godina rada u privatnoj Poliklinici za fizikalnu medicinu i rehabilitaciju.</p>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Potreba za daljnjim profesionalnim usavršavanjem i proširivanjem znanja potaknula ju je na dodatne edukacije:
          </p>
          <ul class="ullist text-left">
            <li class="font-semibold text-lg">
              <NuxtLink to="/usluge/bowen" class="font-semibold text-lg">Bowen terapija</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/usluge/emmett" class="font-semibold text-lg">Emmett terapija</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/usluge/anf" class="font-semibold text-lg">ANF Academy – Pain Therapist</NuxtLink>
            </li>
          </ul>
          <p class="mt-5 font-open text-left text-lg text-gray-700 leading-8">Smatra da potreba za obrazovanjem i usavršavanjem nikada ne završava te planira i daljnju edukaciju i proširivanje svojih znanja i horizonata.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Plugin from '~/plugins/scrollTop'
import { servicesList } from "~/stores/services";
import Hero from '~/components/Hero'
import Test from '~/components/Test'
import Zdravlje from '~/components/Zdravlje'
import Ljepota from '~/components/Services.vue'
import Tim from '~/components/Tim'

const sitedata = servicesList()

</script>
