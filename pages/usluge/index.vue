<template>
  <div class="">
    <Hero :image="'usluge.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl">
          Zdravlje<span class="text-fizio-500">&Ljepota</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Sve za vaše tijelo i um
        </p>
      </slot>
    </Hero>
    <div class="max-w-2xl lg:max-w-4xl mx-auto bg-white sm:py-4 sm:px-6">
      <p class="text-gray-400 text-xl sm:text-2xl px-6">Ovo je popis usluga koje nudimo, ali uvijek preporučamo da se napravi prvo pregled pa na temelju našeg iskustva pacijenutu predložimo <span class="font-medium text-fizio-500">najbolju terapiju</span> za njegovo stanje maksimizirajući sinergijske učinke više vrsta terapija bla bla.</p>
    </div>

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
