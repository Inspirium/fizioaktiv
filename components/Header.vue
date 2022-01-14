<script setup lang="ts">
import { ref, computed } from 'vue'
import { servicesList } from "~/stores/services";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { PlusSmIcon } from '@heroicons/vue/solid'

const route = useRoute()

const sitedata = servicesList()


const navigation = computed(() => {
  return [
    { name: 'Početna', href: '/',  current: route.path === '/' },
    { name: 'Usluge', href: '/usluge', current: route.path.includes('/usluge') },
    { name: 'Terapeuti', href: '/terapeuti', current: route.path === '/terapeuti' },
    { name: 'Cjenik', href: '/cjenik', current: route.path === '/cjenik' },
    { name: 'Kontakt', href: '/kontakt', current: route.path === '/kontakt' },
  ]
})

</script>

<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-24">
        <div class="flex justify-between w-full">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Otvori meni</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <NuxtLink to="/" class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-14 w-auto" src="~assets/img/logo_sign.svg" alt="FizioAktiv" />
            <img class="hidden lg:block h-14 w-auto" src="~assets/img/logo.svg" alt="FizioAktiv" />
          </NuxtLink>
          <div class="hidden md:flex md:space-x-8 justify-between">
<!--             Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"-->
            <NuxtLink v-for="item in navigation" :to="item.href" class="transition duration-200 uppercase inline-flex font-barlow items-center px-1 pt-1 border-b-4 text-xl font-medium" :class="[item.current ? 'text-fizio-500 border-fizio-500' : 'text-gray-500 border-transparent']">
              {{ item.name }}
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <button @click="$router.push('/kontakt')" type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white shadow-sm hover:bg-gray-700 transition duration-500 bg-gradient-to-r from-orange-500 to-fizio-500 hover:to-rose-600">
                <PlusSmIcon class="-ml-1 mr-2 h-8 w-8" aria-hidden="true" />
                <span class="font-medium uppercase text-xl">Naruči se</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>


