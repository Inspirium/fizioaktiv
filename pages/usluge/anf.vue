<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import Heroservices from '~/components/Heroservices'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'
import Services from '~/components/Services'
</script>

<template>
  <div class="">
    <Heroservices>
      <slot>
        <span class="px-5 py-2 text-white text-base font-semibold leading-5 uppercase tracking-wide bg-fizio-500 rounded-full">Uđite u svijet relaksacije</span>
        <h1 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span class="block text-gray-600 font-barlow uppercase font-light sm:text-8xl">AMINO NEUROFREKVENCIJSKA TERAPIJA</span>
        </h1>
        <p class="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-2xl">
          ANF terapija je revolucionarni holistički pristup boli i upali.
        </p>
      </slot>
    </Heroservices>
    <main>
      <div class="lg:col-start-4grid sm:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-8">
        <p class="lg:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">Frekvencije kontroliraju sve funkcije u tijelu. ANF terapija koristi frekvencije za optimizaciju signalizacije živčanog sustava obnavljanjem  normalne  biokemijske reakcije u stanicama.
        </p>
        <p class="lg:col-start-4 text-lg">Frekvencije kontroliraju sve funkcije u tijelu. ANF terapija koristi frekvencije za optimizaciju signalizacije živčanog sustava obnavljanjem  normalne  biokemijske reakcije u stanicama.
        </p>
        <p class="lg:col-start-4 text-lg">Kao rezultat toga, simptomi kao što su bol i/ili upala se smanjuju, a tjelesne funkcije se normaliziraju.
        </p>
        <p class="lg:col-start-4 text-lg">Desetljećima se zna da loša ili oštećena živčana frekvencija povećava upalu i narušava funkciju živčanog sustava i do danas znanstvenici nisu uspjeli riješiti ovaj problem ,no Amino neurofrekvencijska terapija ima odgovor na to!
        </p>
        <p class="lg:col-start-4 text-lg">Osnivač ANF terapije i glavni instruktor odgovoran za razvoj terapije je dr. Mikel H-G Hoff</p>
        <h2 class="lg:col-start-4 pt-4">Kako ANF radi?
        </h2>
        <p class="lg:col-start-4 text-lg">ANF terapija koristi kombinaciju nosivih uređaja koji emitiraju frekvenciju, ANF diskova.</p>
        <p class="lg:col-start-4 text-lg"> Svaki disk se nanosi izravno na kožu i aktivira se tjelesnom toplinom. Oni prenose jedinstveni raspon frekvencija kroz neurone u tijelu. Živčani sustav prenosi te frekvencije, pokrećući proces izlječenja i samoregulacije. Poboljšanjem signalizacije živčanog sustava izravno na staničnoj razini, učinak tretmana je mnogo brži i ima izvanredne trajne rezultate.</p>
        <p class="lg:col-start-4 text-lg">ANF terapija ne zahtjeva upotrebu lijekova ili kemikalija.    </p>
        <h2 class="lg:col-start-4 pt-4">Kako izgleda ANF tretman?
        </h2>
        <p class="lg:col-start-4 text-lg">Terapija je kombinacija tehnike kliničkog pregleda, dijagnostičke metodologije i liječenja ANF  diskovima.
        </p>
        <p class="lg:col-start-4 text-lg">Nakon razgovora sa klijentom i popunjavanja upitnika, pregledavamo tijelo prateći živčane puteve i usredotočujemo se na pronalaženje temeljnog uzroka klijentovog problema.
        </p>
        <p class="lg:col-start-4 text-lg">Prema nalazima i povezanoj dijagnozi, izrađujemo protokol i primjenjujemo naš jedinstveni medicinski uređaj, ANF diskove, kako bi smanjili bol, uklonili upalu i spriječili njeno širenje živčanim i limfnim sustavom.
        </p>
        <p class="lg:col-start-4 text-lg">Djelovanje ANF diska traje 72 sata ( 3 dana ), a kod male djece i beba može trajati i 5 dana. Često je potrebno odraditi više terapija, posebice kod dugotrajne i kronične upale kako bi se problem u potpunosti riješio.
        </p>

        <h2 class="lg:col-start-4 pt-4">Indikacije za primjenu ANF terapije su:
        </h2>
        <ul class="lg:col-start-4 pt-4 list-disc font-poppins">
          <li class="font-semibold text-lg">akutna i kronična bol </li>
          <li class="font-semibold text-lg">hernija diska</li>
          <li class="font-semibold text-lg">upala</li>
          <li class="font-semibold text-lg">petni trn</li>
          <li class="font-semibold text-lg">ozljede mekih tkiva</li>
          <li class="font-semibold text-lg">artritis svih zglobova</li>
          <li class="font-semibold text-lg">teniski lakat</li>
          <li class="font-semibold text-lg">fibromialgija</li>
          <li class="font-semibold text-lg">smrznuto rame</li>
          <li class="font-semibold text-lg">stres</li>
          <li class="font-semibold text-lg">bol u kralježnici</li>
          <li class="font-semibold text-lg">nesanica</li>
          <li class="font-semibold text-lg">poremećaji limfnog sustava</li>
          <li class="font-semibold text-lg">migrene</li>
          <li class="font-semibold text-lg">poremećaji živčanog sustava</li>
          <li class="font-semibold text-lg">uganuće zglobova</li>
        </ul>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead />
    <Pricelist pricelistPart="anf"></Pricelist>
    <Contact />
    <Services />
    <Tim />
  </div>
</template>

