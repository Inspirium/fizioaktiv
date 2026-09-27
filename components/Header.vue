<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { PlusSmIcon } from '@heroicons/vue/solid'

const route = useRoute()

const navigation = computed(() => {
  return [
    { name: 'Početna', href: '/', current: route.path === '/' },
    { name: 'Usluge', href: '/usluge', current: route.path.includes('/usluge') },
    { name: 'O nama', href: '/onama', current: route.path === '/onama' },
    { name: 'Cjenik', href: '/cjenik', current: route.path === '/cjenik' },
    { name: 'Kontakt', href: '/kontakt', current: route.path === '/kontakt' },
  ]
})
</script>

<template>
  <Disclosure v-slot="{ open, close }" as="nav" class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 sm:h-32">
        <div class="flex md:justify-between w-full">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span class="sr-only">{{ open ? 'Zatvori meni' : 'Otvori meni' }}</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <NuxtLink to="/" aria-label="FizioAktiv – početna" class="flex-shrink-0 flex items-center grow md:grow-0 mr-6">
            <img class="sm:h-16 w-auto mx-auto" src="/logo.svg" alt="FizioAktiv">
          </NuxtLink>
          <div class="hidden md:flex md:space-x-4 xl:space-x-8 justify-between">
            <NuxtLink v-for="item in navigation" :key="item.href" :to="item.href" :aria-current="item.current ? 'page' : undefined" class="transition duration-200 uppercase inline-flex font-barlow items-center px-1 pt-1 border-b-4 text-xl font-medium" :class="[item.current ? 'text-fizio-500 border-fizio-500' : 'text-gray-500 border-transparent']">
              {{ item.name }}
            </NuxtLink>
          </div>
          <div class="flex items-center hidden md:flex">
            <div class="flex-shrink-0">
              <NuxtLink to="/kontakt" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-300 bg-fizio-500 hover:bg-gray-700">
                <PlusSmIcon class="-ml-1 mr-2 h-8 w-8" aria-hidden="true" />
                <span class="font-medium uppercase text-xl">Naruči se</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DisclosurePanel class="md:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <div class="flex flex-col items-center space-y-6">
          <NuxtLink v-for="item in navigation" :key="item.href" :to="item.href" :aria-current="item.current ? 'page' : undefined" class="transition duration-200 uppercase inline-flex font-barlow items-center px-1 pt-1 border-b-4 text-xl font-medium" :class="[item.current ? 'text-fizio-500 border-fizio-500' : 'text-gray-500 border-transparent']" @click="close()">
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
