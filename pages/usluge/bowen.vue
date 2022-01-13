<template>
  <Heroservices>
    <slot>
      <span class="px-5 py-2 text-white text-base font-semibold leading-5 uppercase tracking-wide bg-fizio-500 rounded-full">Uđite u svijet relaksacije</span>
      <h1 class="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
        <span class="block text-gray-600 font-barlow uppercase font-light sm:text-8xl">Bowen terapija</span>
      </h1>
      <p class="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-2xl">
        Individualna medicinska gimnastika - vježbe
      </p>
    </slot>
  </Heroservices>
  <main>
    <div class="grid sm:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5">
      <p class="sm:col-start-4 text-2xl mb-8 leading-10 font-semibold font-poppins">Bowen terapija je manualna terapijska metoda koja se koristi specijaliziranim pokretima na mekom tkivu u rješavanju biomehaničkih poremećaja.
      </p>
      <p class="sm:col-start-4 text-lg">Pokretima koji se provode u Bowen terapiji dolazi do piezoelektričnog efekta te slanja signala mozgu da nešto s tim dijelom tijela nije u redu. Mozak reagira na stimulaciju relaksacijom okolne muskulature, boljom prokrvljenošću i samim tim bržim i boljim regeneracijskim procesima.
      </p>
      <p class="sm:col-start-4 text-lg">Tretman djeluje preko fascije (fascija je tanka ovojnica koja obavija cijelo naše tijelo) te se stoga bazira na principu terapijskog djelovanja na cijelo tijelo, a ne samo na ozlijeđeni dio.</p>
      <p class="sm:col-start-4 text-lg">Terapija je vrlo nježna i nema ograničenja na dob pacijenta. Može se koristiti na novorođenčadi kolike-grčevi ), trudnicama ili na osobama starije životne dobi.
      </p>
      <h2 class="sm:col-start-4 pt-4">Kako izgleda Bowen tretman?</h2>
      <p class="sm:col-start-4 text-lg">Pri prvom tretmanu terapeut uzima anamnezu, da bi dobio što bolji uvid u zdravstveno i opće stanje  klijenta. Tretman se provodu u laganoj odjeći ili u  donjem rublju. Trajanje tretman je 30 d o 45 minuta gdje terapeut radi kratke pauze kako bi klijent kvalitetnije reagirao na tretmani što bolje opustio. Tretman se ponavlja svakih 5-10 dana, najčešće jednom tjedno.
      </p>
      <h2 class="sm:col-start-4 pt-4">Indikacije za Bowen terapiju</h2>
      <ul class="sm:col-start-4 pt-4 list-disc">
        <li class="font-semibold text-lg">Bolovi i tegobe u kralježnici ( išijas, diskopatije, trzajne ozljede u vratu, zakočenost)</li>
        <li class="font-semibold text-lg">Glavobolje</li>
        <li class="font-semibold text-lg">Bolovi u zglobovima</li>
        <li class="font-semibold text-lg">Sportske ozljede</li>
        <li class="font-semibold text-lg">Poremećaji u dišnom, probavnom i reproduktivnom sustavu (kao komplementarna metoda)</li>
        <li class="font-semibold text-lg">Novorođenački grčevi</li>
        <li class="font-semibold text-lg">Stres</li>
        <li class="font-semibold text-lg">Alergije</li>
      </ul>
    </div>
    <a href="/kontakt" class="inline-block px-8 mt-8 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
  </main>
  <Contentlead />
  <Pricelist pricelistPart="bowen"></Pricelist>
  <Contact />
  <Services />
  <Tim />
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
