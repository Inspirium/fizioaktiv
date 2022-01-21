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
      <p class="text-gray-400 text-xl sm:text-2xl px-6">Na našim stranicama možete pronaći detaljan opis svih usluga koje nudimo, no preporučujemo vam da prije svega dođete u FizioAktiv na pregled. Nakon što detaljno proučimo vašu anamnezu, na temelju dugogodišnjeg iskustva predložit ćemo vam <span class="font-medium text-fizio-500">najbolju terapiju</span>, prilagođenu upravo vama, kako bismo maksimizirali sinergijske učinke raznih metoda i tehnika te postigli najbolje rezultate.</p>
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
