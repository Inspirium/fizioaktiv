<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps( {
  image: {
    type: String,
    required: false,
    default: 'cjenik.jpg',
  }
})

const heroImage = computed(() => {
  return `background-image: url("${props.image}");`
})


</script>

<template>
  <div class="mb-10 bg-fizio-100 overflow-hidden bg-center bg-cover" :style="heroImage">
    <div class="sm:bg-gradient-to-r sm:from-fizio-100">
      <div class="bg-fizio-100/70 flex items-center lg:justify-start sm:bg-transparent py-16 max-w-7xl m-auto lg:px-8 min-h-[300px]">
        <div class="lg:max-w-7xl mx-auto lg:ml-0">
          <div class="px-4 lg:text-left lg:flex lg:items-center">
            <div class="sm:pl-12 lg:pr-32 w-full">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
