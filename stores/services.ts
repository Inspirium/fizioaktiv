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
        short_dec: 'Ovim nježnim, holističkim pristupom tijelu tretiraju se mišići, tetive, ligamenti i fascija koja ih obavija, čime se stimuliraju živčani, krvožilni i limfni sustav – te posljedično ublažavaju bolovi.',
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
        image: '../anf.jpg',
      },
      {
        id: 6,
        href: '#',
        title: 'Elektro-terapija',
        short_dec: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat',
        slug: 'elektroterapija',
        image: '/elektrostimulacija.jpg',
      },
      {
        id: 7,
        href: '#',
        title: 'UZV terapija',
        short_dec: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat',
        slug: 'uvzterapija',
        image: '/ultrazvuk.jpg',
      },
    ],
    ljepota: [
      {
        id: 1,
        href: '#',
        title: 'Oblikovanje tijela - VacuSlim 48',
        short_dec: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat',
        slug: 'vacuslim',
        image: '/anticelulitna_masaza1.jpg',
      },
      {
        id: 2,
        href: '#',
        title: 'Oblikovanje tijela - Beauty Expert 4 u 1',
        short_dec: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat',
        slug: 'bautyexpert',
        image: '/vacuslim.jpg',
      },
      {
        id: 3,
        href: '#',
        title: 'Anticelulitna masaža',
        short_dec: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat',
        slug: 'anticelulitna',
        image: '/anticelulitna_masaza.jpg',
      },
      {
        id: 4,
        href: '#',
        title: 'Limfna drenaža',
        short_dec: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat',
        slug: 'limfna',
        image: '/limfna_drenaza_aparativna.jpg',
      },
    ],
    cjenik: {
      masaze: [
        {
          name: 'Sportske masaže',
          items: [
            { name: 'Sportska masaža 30 min', price: '160 kn' },
            { name: 'Sportska masaža 45 min', price: '250 kn' },
          ],
        },
        {
          name: 'Medicinske masaže',
          items: [
            { name: 'Medicinska masaža-ciljana 15 min', price: '80 kn' },
            { name: 'Medicinska masaža 30 min', price: '130 kn' },
            { name: 'Medicinska masaža 45 min', price: '200 kn' },
            { name: 'Medicinska masaža 60 min', price: '250 kn' },
            { name: 'Medicinska masaža s Emmett tehnikom 30 min', price: '180 kn' },
            { name: 'Medicinska masaža s Emmett tehnikom 60 min', price: '300 kn' },
          ],
        },
        {
          name: 'Medicinske masaže paketi',
          items: [
            { name: 'Medicinska masaža 30 min — 5 tretmana', price: '500 kn' },
          ],
        },
      ],
      vjezbe: [
        {
          name: 'Vježbe',
          items: [
            { name: 'Individualne vježbe 30 min', price: '100 kn' },
            { name: 'Individualne vježbe 45 min', price: '150 kn' },
            { name: 'Individualne vježbe 60 min', price: '200 kn' },
          ],
        },
      ],
      bowen: [
        {
          name: 'Bowen terapija',
          items: [
            { name: 'Bowen terapija', price: '200 kn' },
            { name: 'Bowen terapija s Emmett tehnikom', price: '270 kn' },
            { name: 'Bowen terapija s Emmett tehnikom - djeca', price: '100 kn' },
          ],
        },
      ],
      emmett: [
        {
          name: 'Emmett terapija',
          items: [
            { name: 'Emmett terapija', price: '150 kn' },
            { name: 'Medicinska masaža s Emmett tehnikom 30 min', price: '180 kn' },
            { name: 'Medicinska masaža s Emmett tehnikom 60 min', price: '300 kn' },
          ],
        },
      ],
      anf: [
        {
          name: 'ANF terapija',
          items: [
            { name: 'ANF terapija - pregled ', price: '250 kn' },
            { name: 'ANF terapija - pregled po segmentu', price: '100 kn' },
            { name: 'ANF terapija - DISK', price: '30 kn' },
          ],
        },
      ],
      elektroterapija: [
        {
          name: 'Elektro-terapija',
          items: [
            { name: 'Elektroterapija - 20 min', price: '40 kn' },
            { name: 'Elektrostimulacija - 20 min', price: '50 kn' },
            { name: 'Elektrostimulacija - 20 min', price: '60 kn' },
          ],
        }
      ],
      uzvterapija: [
        {
          name: 'UZV terapija',
          items: [
            { name: 'UZV 10 min', price: '50 kn' },
          ],
        }
      ],
      vacuslim: [
        {
          name: 'VacuSlim 48',
          items: [
            { name: 'Oblikovanje tijela - Vacuslim 48', price: '150 kn' },
            { name: 'Vacuslim 48 i anticelulitna masaža - 60 min', price: '250 kn' },
            { name: 'Vacuslim 48 i aparaturna limfna drenaža', price: '220 kn' },
          ],
        },
      ],
      bautyexpert: [
        {
          name: 'Beauty Expert 4 u 1',
          items: [
            { name: 'Beauty Expert 4 u 1', price: '150 kn' },
            { name: 'Aparaturna limfna drenaža-30 min', price: '100 kn' },
          ],
        },
      ],
      anticelulitna: [
        {
          name: 'Anticelulitna masaža',
          items: [
            { name: 'Anticelulitna masaža', price: '200 kn' },
          ],
        },
      ],
    },
  }),
  getters: {

  },
  actions: {
    addNew(task) {
      this.tasks.unshift(task)
    },
  },
})
