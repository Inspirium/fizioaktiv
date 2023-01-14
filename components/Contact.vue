<template>
  <div class="bg-white text-left">
    <!-- Header -->
    <div class="relative pb-16 bg-gray-200">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover opacity-20" src="~assets/img/one.jpg" alt="" />
        <div class="absolute inset-0 bg-gray-100 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="text-center relative max-w-7xl mx-auto py-24 px-4 sm:pt-12 sm:pb-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-light uppercase text-gray-700 md:text-5xl lg:text-6xl font-barlow">Naručite se...</h1>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-16 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-6 lg:gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-6 px-6 pb-6 md:px-8">
            <div class="flex items-center mb-3">
              <div class="p-2 mr-4 flex-initial inline-block bg-fizio-500 rounded-full shadow-lg">
                <component :is="link.icon" class="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <div class="text-2xl font-semibold font-poppins text-fizio-500">{{ link.type }}</div>
            </div>
            <h3 class="text-2xl font-medium text-gray-900">{{ link.name }}</h3>
            <p class="mt-4 text-base font-open text-gray-500">{{ link.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">

import {LocationMarkerIcon, MailOpenIcon, PhoneIcon} from "@heroicons/vue/outline";

const supportLinks = [
  {
    type: 'Telefon',
    name: '091/5133-721, 098/634-584',
    href: '#',
    description:
        'Radno vrijeme: pon-pet 8-20 (po dogovoru)',
    icon: PhoneIcon,
  },
  {
    type: 'Email',
    name: 'info@fizioaktiv.hr',
    href: '#',
    description:
        'Pošaljite mail i mi ćemo vam se brzo javiti povratno...',
    icon: MailOpenIcon,
  },
  {
    type: 'Lokacija',
    name: 'Zagrebačka avenija 106, 10000 Zagreb',
    href: '#',
    description:
        'Parkirajte se pored Konzuma u Španskom, ili Nova galerija, etaža -1',
    icon: LocationMarkerIcon,
  },
]
</script>
