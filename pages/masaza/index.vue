<template>
  <Heroservices />
  <main>
  </main>
  <div class="grid sm:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5">
    <p class="sm:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">Masaža je najstariji oblik liječenja koja se od davnina primjenjuje u medicinske, relaksirajuće i kozmetičke svrhe. Masaža opušta tijelo i uklanja napetost i bolove u mišićima te ubrzava cirkulaciju krvi i limfe, a time smanjujemo bolna stanja, opskrbljujemo tkivo kisikom i hranjivim tvarima.</p>
    <p class="sm:col-start-4 text-lg">Postoji više vrsta i tehnika masaža a naš tim fizioterapeuta u FizioAktivu provodi medicinsku, sportsku i anticelulitnu masažu koristeći svoje znanje anatomije i fiziologije ljudskog tijela.</p>
    <h2 class="sm:col-start-4 pt-4">Medicinska masaža</h2>
    <p class="sm:col-start-4 text-lg">Ovaj tip masaže je najučinkovitiji i klijentima najprivlačniji tip masaže, te je odličan način pripreme tkiva za primjenu tehnika mobilizacije i manipulacije. Takva kombinacija donosi dugotrajne rezultate jer se ide s ciljem rješavanja uzroka problema i sastavni je dio plana rehabilitacijskog plana liječenja.</p>
    <p class="sm:col-start-4 text-lg">Dobrobiti medicinske masaže su značajne,a kao najvažnije bi napomenuli uklanjanje napetosti i bolova muskulature te smanjenje psihičkih napetosti i glavobolja.</p>
    <h2 class="mt-5 sm:col-start-4 pt-4">Sportska masaža</h2>
    <p class="sm:col-start-4 text-lg">Sportska masaža pomaže poboljšanju tjelesnih sposobnosti kod sportaša. Pospješuje zagrijavanje i prokrvljenost mišića. Kod pojačanog mišićnog napora dolazi do nakupljanja mliječne kiseline i stoga je sportska masaža važna za brz oporavak kod sportaša poslije intenzivnog treninga. Tijelu je nakon napora potreban odmor da bi se lakše oporavio od treninga ,a najbolji način za ubrzavanje oporavka mišića je sportska masaža.</p>
    <h2 class="mt-5 sm:col-start-4 pt-4">Anticelulitna masaža</h2>
    <p class="sm:col-start-4 text-lg">Anticelulitna masaža je jedan od najučinkovitijih saveznika u borbi protiv omraženog celulita.
      Izvodi se brzim dinamičkim pokretima, srednjeg do jačeg intenziteta, ovisno o dogovoru s klijenticom. Potiče cirkulaciju krvi i limfe, otklanja iz tijela otpadne tvari i razgrađuje celulit.
    <p class="sm:col-start-4 text-lg">Celulit nastaje kao posljedica nepravilnog načina ishrane, nedovoljnog kretanja, stresa, a može nastati i kao posljedica hormonalnog poremećaja.
    Osim što masaža fizički djeluje na celulit, ona povećava sposobnost kože za preuzimanje aktivnih sastojaka iz drugih proizvoda za uklanjanje celulita.</p>
    </p>
    <p class="sm:col-start-4 text-lg">U FizioAktivu ju radimo u kombinacije s aparaturnom limfnom drenažom i Vacuslim 48 metodama.</p>
  </div>
  <a href="/kontakt" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>

  <Contentlead></Contentlead>
  <Pricelist></Pricelist>


  <section class="services-area pt-120 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-barlow font-light uppercase text-gray-700 text-3xl mt-12 mb-8 text-center">Ostale usluge — <span class="text-fizio-500 text-5xl">Zdravlje</span></h2>
    <div class="flex flex-wrap justify-center flex-col sm:flex-row sm:space-x-7">
      <nuxt-link :to="item.link" v-for="item in services.zdravlje" :key="item.id" class="grow-0 rounded-3xl flex overflow-hidden flex-col outline outline-4 outline-transparent	 hover:outline-fizio-500 hover:border-fizio-500 shadow-xl hover:shadow-sm transform duration-200 w-1/5 hover:cursor-pointer mb-10">
        <img src="~assets/img/demo.jpg" alt="">
        <div class="p-4">
          <h2 class="font-poppins font-bold text-gray-700 text-xl mb-3">{{ item.title }}</h2>
          <h3 class="text-gray-600 mb-3 text-base font-open">{{ item.short_dec }}</h3>
        </div>
      </nuxt-link>
    </div>
    <h2 class="font-barlow font-light uppercase text-gray-700 text-3xl mt-12 mb-8 text-center">Ostale usluge — <span class="text-fizio-500 text-5xl">Ljepota</span></h2>
    <div class="flex flex-wrap justify-center flex-col sm:flex-row sm:space-x-7">
      <div v-for="item in services.ljepota" :key="item.id" class="grow-0 rounded-3xl flex overflow-hidden flex-col outline outline-4 outline-transparent	 hover:outline-fizio-500 hover:border-fizio-500 shadow-xl hover:shadow-sm transform duration-200 w-1/5 hover:cursor-pointer mb-10">
        <img src="~assets/img/demo.jpg" alt="">
        <div class="p-4">
          <h2 class="font-poppins font-bold text-gray-700 text-xl mb-3">{{ item.title }}</h2>
          <h3 class="text-gray-600 mb-3 text-base font-open">{{ item.short_dec }}</h3>
        </div>
      </div>
    </div>
  </section>
  <Tim />
  <Contact />
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import { servicesList } from '/stores/services'
import Heroservices from '~/components/Heroservices'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'


import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, MailOpenIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/vue/outline'
import { PlusSmIcon } from '@heroicons/vue/solid'
import { ChevronRightIcon, CheckIcon } from '@heroicons/vue/solid'

const services = servicesList()

const people = ref([
    {
    name: 'Ana Kovačević Drmić',
    role: 'Viši fizioterapeut',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Josipa Ćosić',
    role: 'Viši fizioterapeut',
    imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  }
])


</script>
