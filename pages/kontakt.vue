<script setup lang="ts">
import { ref } from 'vue'
import { servicesList } from "~/stores/services";
import Hero from '~/components/Hero'
import Test from '~/components/Test'
import Zdravlje from '~/components/Zdravlje'
import Ljepota from '~/components/Services.vue'
import Tim from '~/components/Tim'
import Contact from '~/components/Contact'


const sitedata = servicesList()
const modelValue = ref('')

const people = [
  { id: 1, name: 'Annette Black' },
  { id: 2, name: 'Cody Fisher' },
  { id: 3, name: 'Courtney Henry' },
  { id: 4, name: 'Kathryn Murphy' },
  { id: 5, name: 'Theresa Webb' },
]
</script>

<template>
  <div class="">
    <Hero :image="'bowen.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl">
          Kontaktirajte <span class="text-fizio-500">nas</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Sve za vaše tijelo i um
        </p>
      </slot>
    </Hero>

    <div class="px-8">
      <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl mb-4 text-center">Javite se</h2>
        <p class="text-gray-400 text-2xl mb-8">Popunite i pošaljite formular i mi ćemo vam se javiti u <span class="font-medium text-fizio-500">najkraćem mogućem</span> roku</p>
      </div>
      <div class="max-w-4xl m-auto text-left space-y-6">
        <div class="">
          <label for="name" class="">Ime i prezime</label>
          <div class="mt-1">
            <input type="text" name="name" id="name" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md" />
          </div>
        </div>
        <div>
          <label for="email" class="">E-mail</label>
          <div class="mt-1">
            <input type="email" name="email" id="email" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md" />
          </div>
        </div>
        <div>
          <label for="tel" class="">Mobitel</label>
          <div class="mt-1">
            <input type="tel" name="tel" id="tel" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md" />
          </div>
        </div>
        <div class="bg-fizio-100 p-6">
          <div class="lg:shrink self-center text-2xl font-semibold text-fizio-500">Za koje ste usluge zainteresirani?</div>
          <div class="lg:shrink self-center mt-6">Možemo Vam predložiti tretman nakon obavljenog pregleda ili možete odmah odaberize željeni program</div>
        </div>
        <div class="lg:flex lg:space-x-12 justify-center">
          <fieldset class="lg:w-1/3 mt-6 lg:mt-6">
            <legend class="font-barlow font-light text-gray-600 text-4xl uppercase mb-1">Zdravlje</legend>
            <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
              <div v-for="(person, personIdx) in sitedata.zdravlje" :key="personIdx" class="relative flex items-start py-4">
                <div class="min-w-0 flex-1 text-sm">
                  <label :for="`person-${person.id}`" class="font-medium text-lg text-gray-500 select-none">{{ person.title }}</label>
                </div>
                <div class="ml-12 flex items-center h-5">
                  <input :id="`person-${person.id}`" :name="`person-${person.id}`" type="checkbox" class="h-6 w-6 text-fizio-500 border-gray-300 focus:ring-fizio-500 focus:border-fizio-500 rounded" />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="lg:w-1/3 mt-12 lg:mt-6">
            <legend class="font-barlow font-light text-gray-600 text-4xl uppercase mb-1">Ljepota</legend>
            <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
              <div v-for="(person, personIdx) in sitedata.ljepota" :key="personIdx" class="relative flex items-start py-4 items-center">
                <div class="min-w-0 flex-1 text-sm">
                  <label :for="`person-${person.id}`" class="font-medium text-lg text-gray-500 select-none">{{ person.title }}</label>
                </div>
                <div class="ml-12 flex items-center h-5">
                  <input :id="`person-${person.id}`" :name="`person-${person.id}`" type="checkbox" class="h-6 w-6 text-fizio-500 border-gray-300 focus:ring-fizio-500 focus:border-fizio-500 rounded" />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div>
          <div>
            <label for="comment" class="">Komentar</label>
            <div class="mt-1">
              <textarea rows="4" name="comment" id="comment" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <a href="/kontakt" class="mt-8 inline-block px-8 mb-12 bg-gradient-to-r from-orange-500 to-rose-500 border border-transparent rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">pošalji upit</a>

    </div>
    <Contact></Contact>

  </div>
</template>

