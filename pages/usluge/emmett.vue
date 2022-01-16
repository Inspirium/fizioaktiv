<template>
  <div class="">
    <Heroservices>
      <slot>
        <span class="px-5 py-2 text-white text-base font-semibold leading-5 uppercase tracking-wide bg-fizio-500 rounded-full">Uđite u svijet relaksacije</span>
        <h1 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span class="block text-gray-600 font-barlow uppercase font-light sm:text-8xl">EMMETT terapija</span>
        </h1>
        <p class="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-2xl">
          Individualna medicinska gimnastika - vježbe
        </p>
      </slot>
    </Heroservices>
    <main>
      <div class="lg:col-start-4grid sm:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-8">
        <p class="lg:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">EMMETT tehnika je jedinstveni oblik tjelesne terapije a podrazumijeva primjenu laganog pritiska prstima na određene točke tijela (tzv. EMMETT točke) koje su ime dobile po autoru tehnike, Rossu Emmettu.
        </p>
        <p class="lg:col-start-4 text-lg">Vrlo je brza metoda koja pri aktivaciji pravog mišića daje učinkovite rezultate čim se korekcija mišića ( pritisak na mišić ) provede. Mjesta na kojima se radi pritisak (tzv. Emmett točke) su mjesta preklapanja senzornih ili receptornih  i mišićnih točaka. Učinak korekcije mišića može se neposredno testirati mjerenjem snage, gibljivosti ili balansa. Mišić bude facilitiran ili relaksiran, ovisno o odgovoru propadajućih proprioceptora.
        </p>
        <p class="lg:col-start-4 text-lg">Emmett  metodom se aktiviraju pohranjeni loši uzorci pokretanja i/ili ravnoteže, te se njihovim otklanjanjem preko rada različitih struktura središnjeg živčanoga sustava stvaraju novi obrasci kretanja, bez boli i s boljom ravnotežom.  </p>
        <p class="lg:col-start-4 text-lg">Također dolazi do opuštanja mišićne i fascijalne napetosti, te se potiče lučenje prirodnih endorfina, poboljšanja cirkulacije i limfne drenaže.
        </p>
        <p class="lg:col-start-4 text-lg">Emmett tretman se može koristiti samostalno ili u kombinaciji sa bilo kojom fizikalnom ili manuelnom tehnikom i namijenjen je za svakoga tko si želi olakšati bol i nelagodu. O tome ovisi i trajanje tretmana koji ako se koristi samostalno traje 15-45 min ili dulje ako je u kombinaciji sa drugim metodama.</p>
        <h2 class="lg:col-start-4 pt-4">Kako izgleda Emmett tretman?</h2>
        <p class="lg:col-start-4 text-lg">Klijenti mogu biti tretirani u sjedećem, stojećem ili ležećem položaju. Tretman se provodi izravno na koži klijenta ili preko odjeće. Pritisak na Emmett točke je vrlo nježan i klijent ne osjeća bol pri izvođenju tretmana.
        </p>
        <h2 class="lg:col-start-4 pt-4">Kod koga se koristi EMMETT tehnika?
        </h2>
        <p class="lg:col-start-4 text-lg">Može se koristiti kod odraslih osoba, a također i kod beba i male djece, tj. nema dobnih ograničenja.
        </p>

        <h2 class="lg:col-start-4 pt-4">Najčešće indikacije za primjenu EMMETT tehnike su:
        </h2>
        <ul class="lg:col-start-4 pt-4 list-disc font-poppins">
          <li class="font-semibold text-lg">bol u vratu i lumbalnom dijelu kralježnice</li>
          <li class="font-semibold text-lg">ograničenje pokreta i bolovi u zglobovima</li>
          <li class="font-semibold text-lg">Bolovi u zglobovima</li>
          <li class="font-semibold text-lg">kod skraćenih tetiva</li>
          <li class="font-semibold text-lg">postoperativno, nakon prijeloma</li>
          <li class="font-semibold text-lg">problemi sa limfnim i probavnim sustavom</li>
          <li class="font-semibold text-lg">migrene</li>
          <li class="font-semibold text-lg">poboljšanje gibljivosti kod starijih osoba </li>
        </ul>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead />
    <Pricelist pricelistPart="emmett"></Pricelist>
    <Contact />
    <Services />
    <Tim />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import Heroservices from '~/components/Heroservices'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'
import Services from '~/components/Services'
</script>
