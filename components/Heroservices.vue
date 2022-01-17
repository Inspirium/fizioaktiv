<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps( {
  image: {
    type: String,
    required: false,
    default: '/limfna_drenaza_aparativna.jpg',
  }
})

const heroImage = computed(() => {
  return `background-image: url("${props.image}");`
})


</script>

<template>
  <div class="mb-10 bg-fizio-100 overflow-hidden bg-center bg-cover">
    <div class="lg:px-8 sm:bg-gradient-to-r sm:from-fizio-100">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 mx-auto max-w-7xl">
        <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center sm:pt-12 lg:pt-0">
          <div class="lg:py-24">
            <slot></slot>
          </div>
        </div>
        <div class=" mt-8 sm:mt-12 sm:mb-16 sm:mb-4 lg:m-0 lg:relative">
          <div class="mx-auto">
            <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" :src="image" alt="" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
