<script setup lang="ts">
const { bannerVisible, accept, decline } = useCookieConsent()
</script>

<template>
  <transition name="fade">
    <div v-if="bannerVisible" role="dialog" aria-live="polite" aria-label="Postavke kolačića" class="fixed inset-x-0 bottom-0 z-50 p-4">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 text-left font-open md:flex md:items-center md:space-x-8">
        <p class="text-gray-600 text-base">
          Koristimo kolačiće za analitiku posjećenosti (Google Analytics) kako bismo poboljšali stranicu.
          Analitički kolačići postavljaju se samo uz vašu privolu.
          <NuxtLink to="/privatnost" class="text-fizio-500 underline">
            Više o privatnosti
          </NuxtLink>
        </p>
        <div class="flex space-x-3 mt-4 md:mt-0 shrink-0">
          <button type="button" class="px-5 py-3 rounded-md border border-gray-300 text-gray-600 uppercase font-medium hover:bg-gray-50" @click="decline">
            Odbij
          </button>
          <button type="button" class="px-5 py-3 rounded-md bg-fizio-500 text-white uppercase font-medium hover:bg-gray-700 transition duration-300" @click="accept">
            Prihvati
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
