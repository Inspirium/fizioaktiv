
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
    <Hero :image="'../anticelulitna_masaza1.jpg'">
      <slot>
        <span class="hero-supertitle">OBLIKUJTE TIJELO KAKVO ŽELITE</span>
        <h1 class="hero-title ">
          <span>Vacuslim 48</span>
        </h1>
        <p class="hero-subtitle">
          Priuštite si 48 sati topljenja masnoće i odstranjivanja štetnih toksina uz inovativnu Vacuslim 48 metodu
        </p>
      </slot>
    </Hero>
    <main>
      <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6">
        <p class="lead">Vacuslim 48 metoda primjenjuje se u profesionalnim tretmanima oblikovanja tijela i odstranjivanja celulita. Njezini se rezultati brzo i s lakoćom primijete te je idealna kada je potrebno započeti ili pospješiti cjelokupan proces mršavljenja i oblikovanja tijela te poboljšati izgled kože.
        </p>
        <p class="lg:col-start-4 text-lg">Tretman se sastoji od nanošenja Vacuslim 48 zagrijavajućeg seruma, kreme s učinkom hlađenja i vakuumske vreće. Djeluje i u sljedećih 48 sati jer naneseni sastojci još uvijek tope masnoću i odstranjuju štetne toksine iz tijela. Vacuslim 48 vakuumska vreća zbog svog je originalnog dizajna i odlične kombinacije s ostalim proizvodima idealna za tretman jer omogućuje:
        </p>
        <ul class="lg:col-start-4 list-disc font-poppins font-poppins">
          <li class="font-semibold text-lg">sauna efekt</li>
          <li class="font-semibold text-lg">preso efekt</li>
          <li class="font-semibold text-lg">karboksi efekt</li>
        </ul>
        <p class="lg:col-start-4 text-lg">Karboksi efekt pojačava prokrvljenost i protok kisika u stanice, što pospješuje metabolizam i smanjuje celulit. S vakuumskom vrećom omogućujemo dublji i brži prodor Vacuslim 48 aktivnih sastojaka koji razgrađuju masnoću i odstranjuju celulit. Vacuslim 48 anticelulitna metoda i metoda mršavljenja može se upotrijebiti kao zaseban tretman ili u kombinaciji s drugim uređajima za oblikovanje tijela, elektrostimulacijom, limfnom drenažom ili ručnom anticelulitnom masažom.
        </p>
        <p class="lg:col-start-4 text-lg">Tretman može koristiti svaka zdrava osoba, no moramo biti oprezni kod osoba s visokim krvnim tlakom ili dijabetesom, tj. kod bilo koje akutne ili kronične bolesti najbolje je da se prije tretmana klijent posavjetuje sa svojim liječnikom. Kontraindicirano je kod trudnica, dojilja, osoba s malignim oboljenjima, epilepsijom, bolesnika s teškim bubrežnim oboljenjima, osoba s dermatitisom, ekscemom i psorijazom. Tretman se ne izvodi na crvenoj, od sunca ili solarija opečenoj koži, kao ni na svježe depiliranoj ili obrijanoj koži. Da bismo postigli najbolje i dugotrajne rezultate najbolje je odraditi 6-12 tretmana, svaki drugi dan.</p>

      </div>
      <a href="/kontakt" class="inline-block px-8 mt-16 mb-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-md shadow py-4 text-2xl sm:text-3xl uppercase font-medium text-white text-center transition duration-400 hover:to-rose-600 ">Rezerviraj termin!</a>
    </main>
    <Contentlead :image="'/anticelulitna_masaza1.jpg'" :content="'Vacuslim 48 omogućuje dublje i ciljano djelovanje aktivnih sastojaka za razgrađivanje masnoće i odstranjivanja celulita'"/>
    <Pricelist pricelistPart="vacuslim"></Pricelist>
    <Contact />
    <Services />
    <Tim />
  </div>
</template>
