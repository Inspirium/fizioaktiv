<script setup lang="ts">
usePageSeo({
  title: 'Kontakt i narudžbe',
  description: 'Naručite se u FizioAktiv: Zagrebačka avenija 106, Zagreb. Telefon 091/5133-721, 098/634-584, e-mail info@fizioaktiv.hr. Radno vrijeme pon-pet 8-20 (po dogovoru).',
  image: '/kontakt.jpg',
})

const form = ref({
  ime: '',
  email: '',
  mobitel: '',
  komentar: '',
})
const privola = ref(false)

const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

async function handleSubmit() {
  if (status.value === 'sending')
    return
  status.value = 'sending'
  try {
    await $fetch('https://frmr.inspirium.hr/11592036230762496', {
      method: 'POST',
      body: form.value,
    })
    status.value = 'sent'
  }
  catch {
    status.value = 'error'
  }
}

const inputClass = 'shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md'
</script>

<template>
  <div class="">
    <Hero :image="'/kontakt.jpg'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl">
          Kontaktirajte <span class="text-fizio-500">nas</span>
        </h1>
      </slot>
    </Hero>
    <transition name="bounce">
      <div v-if="status !== 'sent'" class="px-8">
        <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
          <p class="text-gray-400 text-2xl mb-8">
            Popunite i pošaljite formular i mi ćemo vam se javiti u <span class="font-medium text-fizio-500">najkraćem mogućem</span> roku
          </p>
        </div>
        <form name="kontakt" @submit.prevent="handleSubmit()">
          <div class="max-w-4xl m-auto text-left space-y-6">
            <div>
              <label for="name">Ime i prezime</label>
              <div class="mt-1">
                <input id="name" v-model.trim="form.ime" type="text" name="name" autocomplete="name" required :class="inputClass">
              </div>
            </div>
            <div>
              <label for="email">E-mail</label>
              <div class="mt-1">
                <input id="email" v-model.trim="form.email" type="email" name="email" autocomplete="email" required :class="inputClass">
              </div>
            </div>
            <div>
              <label for="tel">Mobitel</label>
              <div class="mt-1">
                <input id="tel" v-model.trim="form.mobitel" type="tel" name="tel" autocomplete="tel" :class="inputClass">
              </div>
            </div>
            <div>
              <label for="comment">Komentar</label>
              <div class="mt-1">
                <textarea id="comment" v-model="form.komentar" rows="4" name="comment" required :class="inputClass" />
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <input id="privola" v-model="privola" type="checkbox" required class="mt-1 h-5 w-5 text-fizio-500 border-gray-300 rounded focus:ring-fizio-500">
              <label for="privola" class="!text-base !font-normal font-open text-gray-600">
                Pristajem da FizioAktiv obradi moje podatke kako bi odgovorio na upit, u skladu s
                <NuxtLink to="/privatnost" class="text-fizio-500 underline">politikom privatnosti</NuxtLink>.
              </label>
            </div>
          </div>
          <p v-if="status === 'error'" role="alert" class="max-w-4xl m-auto mt-6 p-4 rounded-md bg-rose-50 text-rose-700 text-lg text-left">
            Upit nije poslan zbog tehničke greške. Pokušajte ponovno ili nas nazovite na 091/5133-721 ili pišite na info@fizioaktiv.hr.
          </p>
          <button type="submit" :disabled="status === 'sending'" class="mt-8 inline-block px-8 mb-12 bg-gradient-to-r from-orange-500 to-rose-500 border border-transparent rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 disabled:opacity-60 disabled:cursor-wait">
            {{ status === 'sending' ? 'šaljem…' : 'pošalji upit' }}
          </button>
        </form>
      </div>
    </transition>

    <div v-if="status === 'sent'" role="status">
      <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
        <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 mb-10" src="/komadi_okrugla.jpg" alt="">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl mb-4 text-center">
          Hvala na upitu!
        </h2>
        <p class="text-gray-400 text-2xl mb-8">
          Javit ćemo vam se u <span class="font-medium text-fizio-500">najkraćem mogućem</span> roku
        </p>
      </div>
    </div>
    <Contact />
    <iframe class="w-full aspect-video" title="Lokacija FizioAktiva na karti" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.84280847488!2d15.894357339186469!3d45.79752576279661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d19a6abd51cf%3A0x8c00dc302cc9bec8!2sFizioaktiv!5e0!3m2!1sen!2shr!4v1704193650896!5m2!1sen!2shr" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
  </div>
</template>
