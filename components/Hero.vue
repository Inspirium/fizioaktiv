<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: false,
    default: 'cjenik.jpg',
  },
})

const heroImage = computed(() => {
  return `background-image: url("${props.image}");`
})

</script>

<template>
  <div class="mb-10 bg-fizio-100 overflow-hidden bg-center bg-cover" :style="heroImage">
    <div class="sm:bg-gradient-to-r sm:from-fizio-100">
      <div class="hero-main">
        <div class="hero-container">
          <div class="hero-box">
            <div class="hero-box-inner">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
