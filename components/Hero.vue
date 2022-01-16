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
  <div class="mb-10 bg-fizio-100 overflow-hidden bg-center bg-cover min-h-[300px]" :style="heroImage">
    <div class="bg-gradient-to-r from-fizio-100 min-h-[300px]">
      <div class="py-16 max-w-7xl m-auto lg:px-8">
        <div class="lg:grid lg:grid-cols-1 lg:gap-8 lg:max-w-7xl mx-auto ">
          <div class="px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div class="py-6 sm:pr-32">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
