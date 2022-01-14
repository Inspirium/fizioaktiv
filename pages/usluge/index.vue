<template>
  <div class="">
    <Hero :image="'cjenik.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins sm:text-6xl xl:text-6xl">
          Zdravlje<br><span class="text-fizio-500">&Ljepota</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 sm:text-3xl uppercase">
          Sve za vaše tijelo i um
        </p>
      </slot>
    </Hero>

    <Services :hide="true" />
    <Tim />
  </div>

</template>

<script setup lang="ts">
import Hero from '~/components/Hero'
import Test from '~/components/Test'
import Services from '~/components/Services'
import Tim from '~/components/Tim'

</script>
