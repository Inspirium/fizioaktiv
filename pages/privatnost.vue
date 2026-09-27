<script setup lang="ts">
usePageSeo({
  title: 'Politika privatnosti',
  description: 'Kako FizioAktiv prikuplja, koristi i štiti osobne podatke posjetitelja web stranice i korisnika usluga.',
})

const { openSettings } = useCookieConsent()
</script>

<!-- NAPOMENA: predložak — prije objave provjeriti s vlasnikom/pravnikom i dopuniti OIB obrta. -->
<template>
  <div class="grid lg:grid-cols-[2rem_auto_250px_800px_250px_auto_2rem] mx-auto text-left text-gray-600 font-open space-y-5 px-6 py-16">
    <h1 class="lg:col-start-4 font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl">
      Politika privatnosti
    </h1>

    <h2 class="lg:col-start-4 pt-4">
      Voditelj obrade
    </h2>
    <p class="lg:col-start-4 text-lg">
      FizioAktiv, Obrt za zdravlje i njegu tijela, Zagrebačka avenija 106, 10000 Zagreb.
      Za sva pitanja o osobnim podacima javite nam se na <a href="mailto:info@fizioaktiv.hr" class="text-fizio-500 underline">info@fizioaktiv.hr</a>.
    </p>

    <h2 class="lg:col-start-4 pt-4">
      Koje podatke prikupljamo
    </h2>
    <p class="lg:col-start-4 text-lg">
      Putem kontakt obrasca prikupljamo ime i prezime, e-mail adresu, broj mobitela i sadržaj poruke koje nam sami pošaljete.
      Podatke koristimo isključivo kako bismo odgovorili na vaš upit i dogovorili termin, na temelju vaše privole (čl. 6. st. 1. t. a) GDPR-a).
    </p>
    <p class="lg:col-start-4 text-lg">
      Podatke ne prodajemo niti ustupamo trećim stranama u marketinške svrhe. Obrazac se tehnički obrađuje putem usluge tvrtke Inspirium kao izvršitelja obrade.
      Podatke iz upita čuvamo onoliko dugo koliko je potrebno za odgovor na upit i pružanje usluge.
    </p>

    <h2 class="lg:col-start-4 pt-4">
      Kolačići i analitika
    </h2>
    <p class="lg:col-start-4 text-lg">
      Stranica koristi nužni kolačić <code>fa_consent</code> u kojem pamti vaš izbor o kolačićima.
      Samo ako to prihvatite, učitava se Google Analytics (Google Ireland Ltd.) koji putem kolačića bilježi anonimiziranu statistiku posjećenosti.
      Privolu možete u bilo kojem trenutku promijeniti:
    </p>
    <div class="lg:col-start-4">
      <button type="button" class="px-5 py-3 rounded-md bg-fizio-500 text-white uppercase font-medium hover:bg-gray-700 transition duration-300" @click="openSettings">
        Postavke kolačića
      </button>
    </div>

    <h2 class="lg:col-start-4 pt-4">
      Vaša prava
    </h2>
    <p class="lg:col-start-4 text-lg">
      Imate pravo na pristup, ispravak i brisanje svojih podataka, ograničenje obrade, prenosivost podataka te pravo na povlačenje privole u bilo kojem trenutku.
      Zahtjev možete poslati na <a href="mailto:info@fizioaktiv.hr" class="text-fizio-500 underline">info@fizioaktiv.hr</a>.
      Ako smatrate da su vaša prava povrijeđena, možete podnijeti prigovor Agenciji za zaštitu osobnih podataka (<a href="https://azop.hr" target="_blank" rel="noopener" class="text-fizio-500 underline">azop.hr</a>).
    </p>
  </div>
</template>
