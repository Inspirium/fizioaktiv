<template>
  <div class="">
    <Hero :image="'/bowen-1.jpg'">
      <slot>
        <span class="hero-supertitle">Riješite se bolova, glavobolje, stresa…</span>
        <h1 class="hero-title">
          <span>Bowen terapija</span>
        </h1>
        <p class="hero-subtitle">
          Holistički pristup koji djeluje na uzrok problema, a ne na njegove simptome
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Bowen terapija je manualna terapijska metoda koja se koristi specijaliziranim pokretima na mekom tkivu u rješavanju biomehaničkih poremećaja.
        </p>
        <p class="lg:col-start-4 text-lg">Pokretima koji se provode u Bowen terapiji dolazi do piezoelektričnog efekta te slanja signala mozgu da nešto s tim dijelom tijela nije u redu. Mozak reagira na stimulaciju relaksacijom okolne muskulature, boljom prokrvljenošću i samim tim bržim i boljim regeneracijskim procesima.
        </p>
        <p class="lg:col-start-4 text-lg">Tretman djeluje preko fascije (fascija je tanka ovojnica koja obavija cijelo naše tijelo) te se stoga bazira na principu terapijskog djelovanja na cijelo tijelo, a ne samo na ozlijeđeni dio.</p>
        <h2 class="lg:col-start-4 pt-4">Kod koga se koristi Bowen tretman?</h2>
        <p class="lg:col-start-4 text-lg">Terapija je vrlo nježna i nema ograničenja na dob pacijenta. Može se koristiti na novorođenčadi (kolike-grčevi), trudnicama ili na osobama starije životne dobi.
        </p>
        <p class="lg:col-start-4 text-lg">Preporučuje se osobama koje imaju višestruke zdravstvene probleme, na primjer bolove u leđima, loše spavanje i probleme s probavom.
        </p>
        <h2 class="lg:col-start-4 pt-4">Kako izgleda Bowen tretman?</h2>
        <p class="lg:col-start-4 text-lg">Pri prvom tretmanu terapeut uzima anamnezu, da bi dobio što bolji uvid u zdravstveno i opće stanje  klijenta. Tretman se provodu u laganoj odjeći ili u donjem rublju. Trajanje tretmana je od 30 do 45 minuta gdje terapeut radi kratke pauze kako bi klijent kvalitetnije reagirao na tretman i što bolje opustio. Tretman se ponavlja svakih 5-10 dana, najčešće jednom tjedno.
        </p>
        <p class="lg:col-start-4 text-lg">Poželjno je odraditi tretman barem tri puta zaredom, a najviše šest puta u jednom ciklusu.
        </p>
        <h2 class="lg:col-start-4 pt-4">Indikacije za Bowen terapiju</h2>
        <ul class="ullist">
          <li class="font-semibold text-lg">Bolovi i tegobe u kralježnici (išijas, diskopatije, trzajne ozljede vrata, zakočenost)</li>
          <li class="font-semibold text-lg">Glavobolje</li>
          <li class="font-semibold text-lg">Bolovi u zglobovima</li>
          <li class="font-semibold text-lg">Sportske ozljede</li>
          <li class="font-semibold text-lg">Poremećaji u dišnom, probavnom i reproduktivnom sustavu</li>
          <li class="font-semibold text-lg">Novorođenački grčevi</li>
          <li class="font-semibold text-lg">Stres</li>
          <li class="font-semibold text-lg">Alergije</li>
        </ul>
      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/bowen-1.jpg'" :content="'Rezultat Bowen terapije osjećaj je topline, dubokog olakšanja i smanjene napetosti, kao i sposobnost tijela da ponovno uspostavi ravnotežu na emocionalnoj i mentalnoj razini'" />
    <Pricelist pricelistPart="bowen"></Pricelist>
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
