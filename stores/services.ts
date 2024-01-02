import { defineStore } from 'pinia'

export const servicesList = defineStore('serviceList', {
  state: () => ({
    zdravlje: [
      {
        id: 1,
        href: '#',
        title: 'Masaža',
        short_dec: 'Masaža opušta tijelo i uklanja napetost i bolove u mišićima te ubrzava cirkulaciju krvi i limfe, a time smanjujemo bolna stanja, opskrbljujemo tkivo kisikom i hranjivim tvarima',
        slug: 'masaza',
        image: '/masaza-usluge.jpg',
      },
      {
        id: 2,
        href: '#',
        title: 'Vježbe',
        short_dec: 'Medicinska gimnastika metoda je izbora kod oporavka nakon ozljede, pripreme za operativni zahvat, problema s kralježnicom, koljenima, bolnim ramenima, degenerativnih bolesti i sličnih stanja',
        slug: 'vjezbe',
        image: '/vjezbe.jpg',
      },
      {
        id: 3,
        href: '#',
        title: 'Bowen',
        short_dec: 'Ovim nježnim, holističkim pristupom tijelu tretiraju se mišići, tetive, ligamenti i fascija koja ih obavija, čime se stimuliraju živčani, krvožilni i limfni sustav – te posljedično ublažavaju bolovi',
        slug: 'bowen',
        image: '/bowen-1.jpg',
      },
      {
        id: 4,
        href: '#',
        title: 'Emmett',
        short_dec: 'Emmett tehnika podrazumijeva primjenu laganog pritiska prstima na mjesta preklapanja senzornih ili receptornih i mišićnih točaka, kojima se postiže gotovo trenutno opuštanje mišića i fascije',
        slug: 'emmett',
        image: '/emmet.jpg',
      },
      {
        id: 5,
        href: '#',
        title: 'ANF terapija',
        short_dec: 'ANF terapija poboljšava signalizaciju živčanog sustava izravno na staničnoj razini, smanjujući simptome kao što su bol i/ili upala i normalizirajući tjelesne funkcije',
        slug: 'anf',
        image: '/anf.jpg',
      },
      {
        id: 6,
        href: '#',
        title: 'Elektro-terapija',
        short_dec: 'Opuštanje mišićnog spazma, preveniranje atrofije, održavanje i povećanje pokretljivosti, ublažavanje bola… Zahvaljujući brojnim tipovima elektroterapije, široko je i područje njena djelovanja',
        slug: 'elektroterapija',
        image: '/elektrostimulacija.jpg',
      },
      {
        id: 7,
        href: '#',
        title: 'UZV terapija',
        short_dec: 'Uz dijagnostičku, ultrazvuk ima i terapijsku primjenu – za smanjivanje bola, poboljšanje cirkulacije i pokretljivosti, kao i ublažavanje upala te tretiranje ozljeda',
        slug: 'uvzterapija',
        image: '/ultrazvuk.jpg',
      },
      {
        id: 8,
        href: '#',
        title: 'Dry needling',
        short_dec: 'Revolucionarna terapija koja koristi tanke, sterilne igle za ciljanje i oslobađanje zategnutih, čvornih mišića. Umetanjem igala u okidačke točke možemo potaknuti prirodni odgovor tijela na iscjeljenje i ublažiti bol i ukočenost',
        slug: 'dryneedling',
        image: '/dryneedling.jpg',
      },
    ],
    ljepota: [
      {
        id: 1,
        href: '#',
        title: 'Oblikovanje tijela - VacuSlim 48',
        short_dec: 'Kombinacijom vakuumske vreće i Vacuslim 48 aktivnih sastojaka učinkovito se razgrađuje masnoća i odstranjuje celulit te postiže figura koju želite',
        slug: 'vacuslim',
        image: '/anticelulitna_masaza1.jpg',
      },
      {
        id: 2,
        href: '#',
        title: 'Oblikovanje tijela - Beauty Expert 4 u 1',
        short_dec: 'U jednom uređaju udružene su tehnologije elektrostimulacije, infracrvene terapije, limfne drenaže i magnetne terapije, omogućujući razgradnju masnih stanica i celulita te izlučivanje toksina',
        slug: 'bautyexpert',
        image: '/vacuslim.jpg',
      },
      {
        id: 3,
        href: '#',
        title: 'Anticelulitna masaža',
        short_dec: 'Brzim dinamičkim pokretima srednjeg do jačeg intenziteta anticelulitna masaža potiče cirkulaciju krvi i limfe, otklanja iz tijela otpadne tvari i razgrađuje celulit',
        slug: 'anticelulitna',
        image: '/anticelulitna_masaza.jpg',
      },
      {
        id: 4,
        href: '#',
        title: 'Limfna drenaža',
        short_dec: 'Ovim se medicinsko-kozmetičkim tretmanom pomoću takozvanih limfnih hlača stvara pritisak na točno određene dijelove tijela te mehanički potiskuje nakupljena međustanična tekućina',
        slug: 'limfna',
        image: '/limfna_drenaza_aparativna.jpg',
      },
    ],
    cjenik: {
      masaze: [
        {
          name: 'Medicinske masaže',
          items: [
            { name: 'Medicinska masaža-ciljana 15 min', price: '13€' },
            { name: 'Medicinska masaža 30 min', price: '20€' },
            { name: 'Medicinska masaža 45 min', price: '27€' },
            { name: 'Medicinska masaža 60 min', price: '33€' },
            { name: 'Anticelulitna masaža 30 min', price: '20€' },
            { name: 'Medicinska masaža 30 min s Emmett tehnikom', price: '30€' },
            { name: 'Medicinska masaža 60 min s Emmett tehnikom', price: '43€' },
          ],
        },
        {
          name: 'Sportske masaže',
          items: [
            { name: 'Sportska masaža 30 min', price: '24€' },
            { name: 'Sportska masaža 45 min', price: '35€' },
          ],
        },
        {
          name: 'Medicinske masaže paketi',
          items: [
            { name: 'Medicinska masaža 30 min — 5 tretmana', price: '80€' },
          ],
        },
      ],
      vjezbe: [
        {
          name: 'Vježbe',
          items: [
            { name: 'Individualne vježbe 30 min', price: '14€' },
            { name: 'Individualne vježbe 45 min', price: '20€' },
            { name: 'Individualne vježbe 60 min', price: '27€' },
          ],
        },
      ],
      bowen: [
        {
          name: 'Bowen terapija',
          items: [
            { name: 'Bowen terapija', price: '30€' },
            { name: 'Bowen terapija s Emmett tehnikom', price: '36€' },
            { name: 'Bowen terapija s Emmett tehnikom - djeca', price: '20€' },
            { name: 'Bowen terapija s Emmett tehnikom - bebe (kolike)', price: '14€' },
          ],
        },
      ],
      emmett: [
        {
          name: 'Emmett tehnika',
          items: [
            { name: 'Emmett tehnika', price: '20€' },
            { name: 'Medicinska masaža 30 min s Emmett tehnikom', price: '30€' },
            { name: 'Medicinska masaža 60 min s Emmett tehnikom', price: '40€' },
          ],
        },
      ],
      anf: [
        {
          name: 'ANF terapija',
          items: [
            { name: 'ANF terapija - prvi pregled ', price: '30€' },
            { name: 'ANF terapija - DISK', price: '5€' },
          ],
        },
      ],
      elektroterapija: [
        {
          name: 'Elektroterapija',
          items: [
            { name: 'Elektroterapija - 20 min', price: '7€' },
            { name: 'Elektrostimulacija - 20 min', price: '7€' },
            { name: 'Elektrostimulacija - 30 min', price: '10€' },
          ],
        },
        {
          name: 'Elektroterapija paketi',
          items: [
            { name: 'UZV i elektroterapija - 10 tretmana', price: '114€' },
          ],
        },
      ],
      uzvterapija: [
        {
          name: 'UZV terapija',
          items: [
            { name: 'UZV 10 min', price: '7€' },
          ],
        },
        {
          name: 'Elektroterapija paketi',
          items: [
            { name: 'UZV i elektroterapija - 10 tretmana', price: '114€' },
          ],
        },
      ],
      dryneedling: [
        {
          name: 'Dry needling',
          items: [
            { name: 'Dry needling', price: '20€' },
          ],
        },
      ],
      vacuslim: [
        {
          name: 'VacuSlim 48',
          items: [
            { name: 'Oblikovanje tijela - Vacuslim 48', price: '28€' },

          ],
        },
        {
          name: 'VacuSlim 48 paketi',
          items: [
            { name: 'Vacuslim 48 i anticelulitna masaža - 60 min - 10 tretmana', price: '400€' },
            { name: 'Vacuslim 48 u kombinaciji s elektrostimulacijom i limfnom drenažom - 60 min - 10 tretmana', price: '350€' },
          ],
        },
      ],

      anticelulitna: [
        {
          name: 'Anticelulitna masaža',
          items: [
            { name: 'Anticelulitna masaža - 30 min', price: '20€' },
          ],
        },
        {
          name: 'Anticelulitna masaža paketi',
          items: [
            { name: 'Anticelulitna masaža - 10 tretmana', price: '160€' },
          ],
        },

      ],
      limfna: [
        {
          name: 'Limfna drenaža',
          items: [
            { name: 'Aparaturna limfna drenaža - 30 min', price: '15€' },
          ],
        },
      ],
    },
  }),
})
