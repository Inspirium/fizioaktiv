<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps( {
  image: {
    type: String,
    required: false,
    default: 'cjenik.jpg',
  },
  content: {
    type: String,
    required: false,
    default: 'stavi tekst tu',
  }
})

const heroImage = computed(() => {
  return `background-image: url("${props.image}");`
})

</script>

<template>
  <div class="sm:col-start-3 sm:col-span-3 flex items-center md:space-x-8 mt-20 mb-10 h-80 overflow-hidden">
    <div class="rounded-xl bg-gray-100 overflow-hidden w-3/5 flex-shrink-0">
      <img :src="image" class="object-center object-cover" />
    </div>
    <div class="bg-fizio-100 grow h-full flex flex-col justify-center p-20">
      <h4 class="font-poppins text-gray-700 text-left font-bold text-2xl">{{ content }}</h4>
      <!--        <p>neki tekstoi</p>-->
    </div>
  </div>
</template>
