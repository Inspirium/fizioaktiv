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
          <a href="/" class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-14 w-auto" src="~assets/img/logo_sign.svg" alt="FizioAktiv" />
            <img class="hidden lg:block h-14 w-auto" src="~assets/img/logo.svg" alt="FizioAktiv" />
          </a>
          <div class="hidden md:flex md:space-x-8 justify-between">
<!--             Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"-->
            <a href="/" class="uppercase border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex font-poppins items-center px-1 pt-1 border-b-2 text-lg font-medium">
              Početna
            </a>
            <a href="/" class="uppercase border-fizio-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 font-poppins text-lg font-medium">
              Usluge
            </a>
            <a href="/terapeuti" class="uppercase border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex font-poppins items-center px-1 pt-1 border-b-2 text-lg font-medium">
              Terapeuti
            </a>
            <a href="/cjenik" class="uppercase border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex font-poppins items-center px-1 pt-1 border-b-2 text-lg font-medium">
              Cjenik
            </a>
            <a href="/kontakt" class="uppercase border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex font-poppins items-center px-1 pt-1 border-b-2 text-lg font-medium">
              Kontakt
            </a>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <button type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white shadow-sm hover:bg-gray-700 transition duration-500 bg-gradient-to-r from-orange-500 to-fizio-500 hover:to-rose-600">
                <PlusSmIcon class="-ml-1 mr-2 h-8 w-8" aria-hidden="true" />
                <span class="font-semibold uppercase text-xl">Naruči se</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { PlusSmIcon } from '@heroicons/vue/solid'


</script>
