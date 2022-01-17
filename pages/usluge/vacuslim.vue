
<script setup lang="ts">
import { ref, defineProps, watch, defineComponent, h } from 'vue'
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
import Contentlead from '~/components/Contentlead'
import Tim from '~/components/Tim'
import Pricelist from '~/components/Pricelist'
import Services from '~/components/Services'
</script>


<template>
  <div class="">
    <Hero :image="'../feel_good.jpg'">
      <slot>
        <span class="hero-supertitle">Uđite u svijet relaksacije</span>
        <h1 class="hero-title">
          <span class="block text-gray-600 font-barlow uppercase font-light text-6xl sm:text-8xl">VACUSLIM 48</span>
        </h1>
        <p class="hero-subtitle">
          Beauty expert je odličan uređaj za oblikovanje tijela i smanjenje viška tjelesne težine.
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Beauty Expert je odličan uređaj za oblikovanje tijela i smanjenje viška tjelesne težine. Tehnologije, kao što su: elektro stimulacija, infracrvena terapija, limfna drenaža i magnetna terapija su udružene u jednom uređaju.
        </p>
        <p class="lg:col-start-4 text-lg">Vacuslim 48 metoda je za profesionalne tretmane oblikovanja tijela i odstranjivanja celulita, čiji se rezultati brzo i s lakoćom primijete te je idealna kada je potrebno započeti ili pospješiti cjelokupan proces mršavljenja, oblikovanja tijela te poboljšati izgled kože.
          Tretman se sastoji od nanošenja Vacuslim 48 zagrijavajućeg  seruma, kreme s učinkom hlađenja i vakumske vreće koje djeluju i u sljedećih 48 sati, jer naneseni sastojci još uvijek djeluju, tope masnoću i odstranjuju štetne toksine iz tijela.
          Vacuslim 48 vakumska vreća zbog svog je originalnog dizajna i odlične kombinacije s ostalim proizvodima idealna za tretman jer omogućuje:
        </p>
        <ul class="lg:col-start-4 list-disc font-poppins font-poppins">
          <li class="font-semibold text-lg">Sauna efekt</li>
          <li class="font-semibold text-lg">Preso efekt</li>
          <li class="font-semibold text-lg">Karboksi efekt</li>
        </ul>
        <p class="lg:col-start-4 text-lg">Karboksi efekt pojačava prokrvljenost i protok kisika u stanice, što pospješuje metabolizam i smanjuje celulit. S vakumskom vrećom omogućujemo dublji i brži prodor Vacuslim 48 aktivnih sastojaka koji razgrađuju masnoću i odstranjuju celulit.
          Vacuslim 48 anticelulitna metoda i metoda mršavljenja može se upotrijebiti kao zaseban tretman ili u kombinaciji sa drugim uređajima za oblikovanje tijela, elektrostimulacijom, limfnom drenažom ili ručnom anticelulitnom masažom.
          Tretman može koristiti svaka zdrava osoba, a moramo biti oprezni kod osoba sa visokim krvnim tlakom, dijabetesom tj. kod bilo koje akutne ili kronične bolesti najbolje je da se prije tretmana klijent posavjetuje sa svojim liječnikom.
          Kontraindicirano je kod trudnica, dojilja, osoba sa malignim oboljenjima, epilepsijom, bolesnici s teškim bubrežnim oboljenjima, osobe sa dermatitisom, ekscemom i psorijazom.
          Tretman se ne izvodi na crvenoj, od sunca ili solarija opečenoj koži, kao ni na svježe depiliranoj ili obrijanoj koži.
          Da bi postigli najbolje i dugotrajne rezultate najbolje je odraditi 6-12 tretmana, svaki drugi dan.
        </p>

      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/feel_good.jpg'" />
    <Pricelist pricelistPart="anf"></Pricelist>
    <Contact />
    <Services />
    <Tim />
  </div>
</template>
