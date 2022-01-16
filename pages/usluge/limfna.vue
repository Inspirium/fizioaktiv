<template>
  <div class="">
    <Hero :image="'../feel_good.jpg'">
      <slot>
        <span class="px-5 py-2 text-white text-base font-semibold leading-5 uppercase tracking-wide bg-fizio-500 rounded-full">Uđite u svijet relaksacije</span>
        <h1 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span class="block text-gray-600 font-barlow uppercase font-light sm:text-8xl">Limfna drenaža</span>
        </h1>
        <p class="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-2xl">
          PRESOTERAPIJA (APARATURNA)
        </p>
      </slot>
    </Hero>
    <main class="px-6">
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5">
        <p class="lg:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">Limfna drenaža je terapija kojom se metodom upuhivanja  zraka stvara pritisak na točno određene dijelove tijela, čime se mehanički potiskuje nataložena međustanična tekućina.</p>
        <p class="lg:col-start-4 text-lg">Terapijom se potiče rad limfnog sustava pa se tako brže izlučuju štetne tvari iz tijela i suvišne tekućine. Tretman dovodi do stanja opuštenosti i smanjene natečenosti i boli.
          Premalo gibanja, predugo sjedenje, prekomjerna tjelesna težina, nepravilna prehrana i stres predstavlja opterećenje na naš organizam, što dovodi do posljedica kao što su loša prokrvljenost tkiva, nakupljanja otpadnih produkta metabolizma, povećanje volumena masnih stanica, pojave celulita, oticanje nogu i proširenih vena.
          Limfna drenaža je medicinsko- kozmetički tretman koji potiče razgradnju celulita, smanjenje obujma, prokrvljenost tkiva i otklanjanje edema. Upuhivanjem zraka stvara se pritisak na određene dijelove tijela, čime se mehanički potiskuje nataloženu međustaničnu tekućinu natrag u krvotok. Tako se stvara ravnoteža protoka hranjivih tvari i kisika, smanjuje opseg trbuha i bokova, poboljšava se cirkulacija i sprječava upala vena posebice kod osoba koje puno sjede.
          Tretman uključuje 30 min drenaže u limfnim hlačama.
        </p>
        <h2 class="lg:col-start-4 pt-4">Primjena limfne drenaže kod:</h2>
        <ul class="lg:col-start-4 list-disc font-poppins font-poppins">
          <li class="font-semibold text-lg">Lokalnih edema</li>
          <li class="font-semibold text-lg">Oteklina</li>
          <li class="font-semibold text-lg">Loše cirkulacije</li>
          <li class="font-semibold text-lg">Umornih i teških nogu</li>
          <li class="font-semibold text-lg">Problema s venskom cirkulacijom i proširenim venama</li>
          <li class="font-semibold text-lg">Bolova u mišićima</li>
          <li class="font-semibold text-lg">Celulita</li>
        </ul>
        <h2 class="lg:col-start-4 pt-4">Ne primjenjuje se kod:</h2>
        <ul class="lg:col-start-4 list-disc font-poppins font-poppins">
          <li class="font-semibold text-lg">Malignih procesa</li>
          <li class="font-semibold text-lg">Akutnih i kroničnih upala</li>
          <li class="font-semibold text-lg">Povišene tjelesne temperature</li>
          <li class="font-semibold text-lg">Tromboze</li>
          <li class="font-semibold text-lg">Kod trudnica</li>
          <li class="font-semibold text-lg">Oprezno kod osoba s niskim tlakom</li>
        </ul>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/feel_good.jpg'" :content="'Jednosatna masaža je jednaka 7-8 sati sna na tijelu.'"/>
    <Pricelist pricelistPart="anf" />
    <Contact />
    <Services />
    <Tim />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'
import Services from '~/components/Services'
</script>
