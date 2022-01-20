<template>
  <div class="">
    <Hero :image="'/emmet.jpg'">
      <slot>
        <span class="hero-supertitle">Ublažite napetost u mišićima</span>
        <h1 class="hero-title">
          <span>EMMETT tehnika</span>
        </h1>
        <p class="hero-subtitle">
          I lagani pritisak može potaknuti otpuštanje napetosti ako je primijenjen na pravome mjestu
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Emmett tehnika jedinstveni je oblik tjelesne terapije koji podrazumijeva primjenu laganog pritiska prstima na određene točke na tijelu – takozvane Emmett točke, koje su ime dobile po autoru tehnike Rossu Emmettu.
        </p>
        <p class="lg:col-start-4 text-lg">Vrlo je brza metoda koja pri aktivaciji pravog mišića daje učinkovite rezultate čim se korekcija mišića, odnosno pritisak na mišić provede. Mjesta na kojima se radi pritisak – Emmett točke – mjesta su preklapanja senzornih ili receptornih i mišićnih točaka. Učinak korekcije mišića može se neposredno testirati mjerenjem snage, gibljivosti ili balansa. Mišić bude facilitiran ili relaksiran, ovisno o odgovoru pripadajućih proprioceptora.
        </p>
        <p class="lg:col-start-4 text-lg">Emmett metodom se aktiviraju pohranjeni loši obrasci pokretanja i/ili ravnoteže te se njihovim otklanjanjem preko rada različitih struktura središnjeg živčanoga sustava stvaraju novi obrasci kretanja, bez bola i s boljom ravnotežom.
        </p>
        <p class="lg:col-start-4 text-lg">Također dolazi do opuštanja mišićne i fascijalne napetosti te se potiče lučenje prirodnih endorfina i poboljšava cirkulacija i limfna drenaža.
        </p>
        <p class="lg:col-start-4 text-lg">Emmett tretman može se koristiti samostalno ili u kombinaciji s bilo kojom fizikalnom ili manualnom tehnikom i namijenjen je svakomu tko si želi olakšati bol i nelagodu. O tome ovisi i trajanje tretmana, koji samostalno traje od 20 do 40 minuta ili dulje ako je u kombinaciji s drugim metodama.
        </p>
        <h2 class="lg:col-start-4 pt-4">Kako izgleda Emmett tretman?</h2>
        <p class="lg:col-start-4 text-lg">Klijenti mogu biti tretirani u sjedećem, stojećem ili ležećem položaju. Tretman se provodi izravno na koži klijenta ili preko odjeće. Pritisak na Emmett točke vrlo je nježan i klijent ne osjeća bol pri izvođenju tretmana.
        </p>
        <h2 class="lg:col-start-4 pt-4">Kod koga se koristi Emmett tehnika?
        </h2>
        <p class="lg:col-start-4 text-lg">Može se koristiti kod odraslih osoba, a također i kod beba i male djece, tj. nema dobnih ograničenja.
        </p>

        <h2 class="lg:col-start-4 pt-4">Najčešće indikacije za primjenu Emmett tehnike su:
        </h2>
        <ul class="ullist">
          <li class="font-semibold text-lg">bol u vratu i lumbalnom dijelu kralježnice</li>
          <li class="font-semibold text-lg">ograničenje pokreta i bolovi u zglobovima</li>
          <li class="font-semibold text-lg">skraćene tetive</li>
          <li class="font-semibold text-lg">postoperativno, nakon prijeloma</li>
          <li class="font-semibold text-lg">problemi sa limfnim i probavnim sustavom</li>
          <li class="font-semibold text-lg">migrene</li>
          <li class="font-semibold text-lg">poboljšanje gibljivosti kod starijih osoba</li>
        </ul>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/emmet.jpg'" :content="'Otklanjanjem loših obrazaca pokretanja i/ili ravnoteže oslobađa se prostor za stvaranje novih, bez bola i s boljom ravnotežom'"/>
    <Pricelist pricelistPart="emmett"></Pricelist>
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
