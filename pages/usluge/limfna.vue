<template>
  <div class="">
    <Hero :image="'../limfna_drenaza_aparativna.jpg'">
      <slot>
        <span class="hero-supertitle">OBLIKUJTE TIJELO KAKVO ŽELITE</span>
        <h1 class="hero-title">
          <span>Limfna drenaža</span>
        </h1>
        <p class="hero-subtitle">
          Ovim učinkovitim medicinsko-kozmetičkim tretmanom postižu se estetski učinci, ali i uspostavlja ravnoteža protoka hranjivih tvari i kisika
        </p>
      </slot>
    </Hero>
    <main class="px-6">
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5">
        <p class="lead">Limfna drenaža je terapija kojom se metodom upuhivanja zraka stvara pritisak na točno određene dijelove tijela, čime se mehanički potiskuje nakupljena međustanična tekućina.</p>
        <p class="lg:col-start-4 text-lg">Terapijom se potiče rad limfnog sustava, pa se tako brže izlučuju štetne tvari iz tijela i suvišne tekućine. Tretman dovodi do stanja opuštenosti te smanjene natečenosti i bola. Premalo gibanja, predugo sjedenje, prekomjerna tjelesna masa, nepravilna prehrana i stres opterećenje su za naš organizam, što dovodi do posljedica kao što su loša prokrvljenost tkiva, nakupljanja otpadnih produkta metabolizma, povećanje volumena masnih stanica, celulita, oticanja nogu i proširenih vena.</p>
        <p class="lg:col-start-4 text-lg">Limfna drenaža je medicinsko-kozmetički tretman koji potiče razgradnju celulita, smanjenje obujma, prokrvljenost tkiva i otklanjanje edema. Upuhivanjem zraka stvara se pritisak na određene dijelove tijela, čime se nakupljena međustanična tekućina mehanički potiskuje natrag u krvotok. Tako se stvara ravnoteža protoka hranjivih tvari i kisika, smanjuje opseg trbuha i bokova, poboljšava cirkulacija i sprječava upala vena, posebice kod osoba koje puno sjede. Tretman uključuje 30 minuta drenaže u limfnim hlačama. </p>
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
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/limfna_drenaza_aparativna.jpg'" :content="'Cilj je nakupljenu međustaničnu tekućinu mehanički potisnuti natrag u krvotok te posljedično smanjiti opseg trbuha i bokova'"/>
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
