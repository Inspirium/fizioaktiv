<script setup lang="ts">
import Hero from '~/components/Hero'
import Test from '~/components/Test'
import Services from '~/components/Services'
import Tim from '~/components/Tim'
import Contact from '~/components/Contact'

</script>


<template>
  <div class="">
    <Hero :image="'feel_good.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins sm:text-6xl xl:text-6xl">
          Dobrodošli u <span class="text-fizio-500">FiziokAtiv</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 sm:text-3xl uppercase">
          Osjećajte se opet dobro!
        </p>
      </slot>
    </Hero>
    <Services :hide="true" />
    <Tim />
    <Contact />
  </div>

</template>

