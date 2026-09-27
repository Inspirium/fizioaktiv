<script setup lang="ts">
import type { PropType } from 'vue'
import { type CjenikStavka, formatCijena, SIDRENI_DATUM } from '~/data/cjenik'

defineProps({
  item: {
    type: Object as PropType<CjenikStavka>,
    required: true,
  },
})
</script>

<template>
  <div class="flex justify-center">
    <div class="py-4 pl-6 pr-6 text-xl font-normal text-gray-500 text-left w-full">
      {{ item.name }}
    </div>
    <div class="py-4 w-1/2 pr-6 text-right">
      <span class="block text-xl font-medium text-fizio-500">{{ formatCijena(item.price) }}</span>
      <span class="block text-sm font-open text-gray-500 mt-1">
        Sidrena cijena ({{ SIDRENI_DATUM }}): {{ formatCijena(item.sidrena) }}
      </span>
    </div>
  </div>
</template>
