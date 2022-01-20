<script setup lang="ts">
import Hero from '~/components/Hero'
import Test from '~/components/Test'
import Services from '~/components/Services'
import Tim from '~/components/Tim'
import Contact from '~/components/Contact'

</script>


<template>
  <div class="">
    <div class="test">
    <Hero :image="'/fizioaktiv.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl">
          Dobrodošli u <span class="text-fizio-500">FizioAktiv</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Tvoje zdravlje je bitno!
        </p>
      </slot>
    </Hero>
    </div>
    <div class="mx-auto max-w-xl text-left">
      <div class="rounded-lg bg-fizio-100 p-10 m-8 sm:-mt-24 ">
        <div class="font-open first-letter:text-gray-700 text-gray-700 text-sm sm:text-lg first-line:uppercase first-line:tracking-widest first-line:font-semibold first-letter:text-[6.5rem] sm:first-letter:text-[6rem] first-letter:leading-[5rem] first-letter:-ml-[.5rem] first-letter:font-light first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">FIZIOAKTIV je osnovan krajem 2021. godine s ciljem pružanja usluga u službi zdravlja i ljepote. U njegovo nastajanje i rad uloženo je dugogodišnje iskustvo i entuzijazam našeg tima, čija je misija kroz razne programe masaža, vježbi i terapija pomoći vam održati i unaprijediti zdravlje.
        </div>
        <div class="text-fizio-500 text-right font-barlow mt-6 text-xl sm:text-2xl font-normal uppercase">Pokreni se! Budi aktivan!</div>
      </div>
    </div>
    <Services :hide="true" />
    <RouterView ></RouterView >
    <Tim />
    <Contact />
    <router-view></router-view>
  </div>

</template>

<style scoped >
/*.test >>> .hero-main {*/
/*  @apply bg-fizio-100/70 flex items-center lg:justify-center sm:bg-transparent py-16 max-w-7xl m-auto lg:px-0 md:min-h-[300px]}*/
/*.test >>> .hero-container {*/
/*  @apply lg:ml-auto text-center}*/
/*.test >>> .hero-box-inner {*/
/*  @apply lg:text-center lg:px-0}*/
</style>

