<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: false,
    default: '/feel_good.jpg',
  },
  content: {
    type: String,
    required: false,
    default: 'stavi tekst tu',
  },
})

const heroImage = computed(() => {
  return `background-image: url("${props.image}");`
})

</script>

<template>
  <div class="flex flex-col md:flex-row items-center md:space-x-8 mt-20 mb-10 md:h-80 overflow-hidden">
    <div class="bg-gray-100 overflow-hidden md:w-3/5 flex-shrink-0">
      <img :src="image" class="object-center object-cover w-full">
    </div>
    <div class="bg-fizio-100 grow h-full flex flex-col w-5/6 md:w-full justify-center p-10 sm:p-20 -mt-20 md:mt-0">
      <h4 class="font-poppins text-gray-500 md:text-gray-700 text-center sm:text-left font-normal uppercase md:font-semibold text-lg md:text-xl">
        {{ content }}
      </h4>
    </div>
  </div>
</template>
