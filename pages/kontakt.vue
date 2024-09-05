<script setup lang="ts">
import { ref } from 'vue'
import { servicesList } from '~/stores/services'
import Hero from '~/components/Hero'
import Test from '~/components/Test'
import Zdravlje from '~/components/Zdravlje'
import Ljepota from '~/components/Services.vue'
import Tim from '~/components/Tim'
import Contact from '~/components/Contact'

const sitedata = servicesList()
const modelValue = ref('')

const form = ref({
  ime: '',
  email: '',
  mobitel: '',
  komentar: '',
})

const thankyou = ref(false)
const errorr = ref(false)

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

function handleSubmit() {
  $fetch('https://frmr.inspirium.hr/11592036230762496', {
    method: 'POST',
    body: form.value,
  })
    .then(() => thankyou.value = true)
    .catch(e => errorr.value = true)
}

</script>

<template>
  <div class="">
    <Hero :image="'kontakt.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl">
          Kontaktirajte <span class="text-fizio-500">nas</span>
        </h1>
        <!--        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">-->
        <!--          Sve za vaše tijelo i um-->
        <!--        </p>-->
      </slot>
    </Hero>
    <transition name="bounce">
      <div v-if="!thankyou" class="px-8">
        <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
          <!--        <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl mb-4 text-center">Javite se</h2>-->
          <p class="text-gray-400 text-2xl mb-8">
            Popunite i pošaljite formular i mi ćemo vam se javiti u <span class="font-medium text-fizio-500">najkraćem mogućem</span> roku
          </p>
        </div>
        <form name="kontakt" method="POST" data-netlify="true" @submit.prevent="handleSubmit()">
          <div class="max-w-4xl m-auto text-left space-y-6">
            <div class="">
              <label for="name" class="">Ime i prezime</label>
              <div class="mt-1">
                <input id="name" v-model="form.ime" type="text" name="name" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md">
              </div>
            </div>
            <div>
              <label for="email" class="">E-mail</label>
              <div class="mt-1">
                <input id="email" v-model="form.email" type="email" name="email" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md">
              </div>
            </div>
            <div>
              <label for="tel" class="">Mobitel</label>
              <div class="mt-1">
                <input id="tel" v-model="form.mobitel" type="tel" name="tel" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md">
              </div>
            </div>
            <!--          <div class="bg-fizio-100 p-6">-->
            <!--            <div class="lg:shrink self-center text-2xl font-semibold text-fizio-500">Za koje ste usluge zainteresirani?</div>-->
            <!--            <div class="lg:shrink self-center mt-3">Možemo Vam predložiti tretman nakon obavljenog pregleda ili možete odmah odaberati željeni program</div>-->
            <!--          </div>-->
            <!--          <div class="lg:flex lg:space-x-12 justify-center">-->
            <!--            <fieldset class="lg:w-1/3 mt-6 lg:mt-6">-->
            <!--              <legend class="font-barlow font-light text-gray-600 text-4xl uppercase mb-1">Zdravlje</legend>-->
            <!--              <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">-->
            <!--                <div v-for="(person, personIdx) in sitedata.zdravlje" :key="personIdx" class="relative flex items-start py-4">-->
            <!--                  <div class="min-w-0 flex-1 text-sm">-->
            <!--                    <label :for="`person-${person.id}`" class="font-medium text-lg text-gray-500 select-none">{{ person.title }}</label>-->
            <!--                  </div>-->
            <!--                  <div class="ml-12 flex items-center h-5">-->
            <!--                    <input :id="`person-${person.id}`" :name="`person-${person.id}`" type="checkbox" class="h-6 w-6 text-fizio-500 border-gray-300 focus:ring-fizio-500 focus:border-fizio-500 rounded" />-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </fieldset>-->
            <!--            <fieldset class="lg:w-1/3 mt-12 lg:mt-6">-->
            <!--              <legend class="font-barlow font-light text-gray-600 text-4xl uppercase mb-1">Ljepota</legend>-->
            <!--              <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">-->
            <!--                <div v-for="(person, personIdx) in sitedata.ljepota" :key="personIdx" class="relative flex items-start py-4 items-center">-->
            <!--                  <div class="min-w-0 flex-1 text-sm">-->
            <!--                    <label :for="`person-${person.id}`" class="font-medium text-lg text-gray-500 select-none">{{ person.title }}</label>-->
            <!--                  </div>-->
            <!--                  <div class="ml-12 flex items-center h-5">-->
            <!--                    <input :id="`person-${person.id}`" :name="`person-${person.id}`" type="checkbox" class="h-6 w-6 text-fizio-500 border-gray-300 focus:ring-fizio-500 focus:border-fizio-500 rounded" />-->
            <!--                  </div>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </fieldset>-->
            <!--          </div>-->
            <div>
              <div>
                <label for="comment" class="">Komentar</label>
                <div class="mt-1">
                  <textarea id="comment" v-model="form.komentar" rows="4" name="comment" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="mt-8 inline-block px-8 mb-12 bg-gradient-to-r from-orange-500 to-rose-500 border border-transparent rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">
            pošalji upit
          </button>
        </form>
      </div>
    </transition>

    <!--      <div v-if="errorr" class="">-->
<!--        <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">-->
<!--          <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 mb-10" src="/komadi_okrugla.jpg" alt="" />-->

<!--          <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl mb-4 text-center">Došlo je do greške</h2>-->
<!--          <p class="text-gray-400 text-2xl mb-8">-->
<!--            Pokušajte <span class="font-medium text-fizio-500">najkraćem mogućem</span> roku-->
<!--          </p>-->
<!--        </div>-->

<!--      </div>-->
      <div v-if="thankyou" class="">
        <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
          <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 mb-10" src="/komadi_okrugla.jpg" alt="" />

          <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl mb-4 text-center">Hvala na upitu!</h2>
          <p class="text-gray-400 text-2xl mb-8">
            Javiti ćemo vam se u <span class="font-medium text-fizio-500">najkraćem mogućem</span> roku
          </p>
        </div>

      </div>
    <Contact />
    <iframe class="w-full aspect-video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.84280847488!2d15.894357339186469!3d45.79752576279661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d19a6abd51cf%3A0x8c00dc302cc9bec8!2sFizioaktiv!5e0!3m2!1sen!2shr!4v1704193650896!5m2!1sen!2shr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>
