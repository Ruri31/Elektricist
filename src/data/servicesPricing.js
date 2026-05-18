export const servicesPricing = [
  {
    id: 'priza',
    title: 'Nuk punon priza?',
    description: 'Kontroll, riparim dhe zëvendësim prizash elektrike.',
    icon: 'Plug',
    startingFrom: 975,
    services: [
      { id: 'kontroll-elektrik', name: 'Vizitë + kontroll elektrik', unit: 'shërbim', price: 975 },
      { id: 'nderrim-prize-celesi', name: 'Ndërrim prize / çelësi', unit: 'copë', price: 1625 },
      { id: 'riparim-prize', name: 'Riparim prize', unit: 'shërbim', price: 2275 },
      { id: 'shtim-pike-elektrike', name: 'Shtim pike elektrike', unit: 'pikë', price: 3250 },
    ],
  },
  {
    id: 'automati',
    title: 'Bie automati?',
    description: 'Diagnostikim qarku, defekte elektrike dhe automatë.',
    icon: 'Zap',
    startingFrom: 1950,
    services: [
      { id: 'diagnostikim-qarku', name: 'Diagnostikim qarku', unit: 'shërbim', price: 1950 },
      { id: 'nderrim-automati', name: 'Ndërrim automati', unit: 'copë', price: 2275 },
      { id: 'nderrim-diferenciali', name: 'Ndërrim diferenciali', unit: 'copë', price: 3900 },
      { id: 'rregullim-paneli-elektrik', name: 'Rregullim paneli elektrik', unit: 'shërbim', price: 7800 },
    ],
  },
  {
    id: 'ndricim-led',
    title: 'Doni ndriçim LED?',
    description: 'Instalime LED për banesa, lokale, zyra dhe ambiente biznesi.',
    icon: 'Lightbulb',
    startingFrom: 780,
    services: [
      { id: 'montim-spoti-led', name: 'Montim spoti LED', unit: 'copë', price: 780 },
      { id: 'montim-shiriti-led', name: 'Montim shiriti LED', unit: 'shërbim', price: 2600 },
      { id: 'pakete-ndricimi-ambienti', name: 'Paketë ndriçimi ambienti', unit: 'paketë', price: 9750 },
    ],
  },
  {
    id: 'kamera-sigurie',
    title: 'Doni kamera sigurie?',
    description: 'Montim CCTV/IP kamera me akses nga telefoni.',
    icon: 'Camera',
    startingFrom: 2275,
    services: [
      { id: 'montim-kamere-ekzistuese', name: 'Montim kamere ekzistuese', unit: 'kamerë', price: 2275 },
      { id: 'pakete-4-kamera', name: 'Paketë 4 kamera', unit: 'paketë', price: 42250 },
      { id: 'pakete-8-kamera', name: 'Paketë 8 kamera', unit: 'paketë', price: 61750 },
      { id: 'konfigurim-akses-telefoni-kamera', name: 'Konfigurim akses telefoni për kamera', unit: 'shërbim', price: 3250 },
    ],
  },
  {
    id: 'wifi-networking',
    title: 'Wi-Fi i dobët?',
    description: 'Konfigurim routeri, access point, LAN dhe rrjete biznesi.',
    icon: 'Wifi',
    startingFrom: 1950,
    services: [
      { id: 'konfigurim-routeri', name: 'Konfigurim routeri', unit: 'shërbim', price: 1950 },
      { id: 'montim-access-point', name: 'Montim access point', unit: 'pajisje', price: 2925 },
      { id: 'pike-rrjeti-lan', name: 'Pikë rrjeti LAN', unit: 'pikë', price: 2275 },
      { id: 'instalim-rrjeti-biznesi-vogel', name: 'Instalim rrjeti biznesi i vogël', unit: 'projekt', price: 13000 },
    ],
  },
  {
    id: 'it-support',
    title: 'Problem me kompjuter/printer?',
    description: 'Suport IT për kompjuterë, printera dhe pajisje zyre.',
    icon: 'MonitorCog',
    startingFrom: 1950,
    services: [
      { id: 'kontroll-riparim-kompjuteri', name: 'Kontroll / riparim kompjuteri', unit: 'shërbim', price: 2600 },
      { id: 'konfigurim-printeri', name: 'Konfigurim printeri', unit: 'shërbim', price: 1950 },
      { id: 'support-teknik', name: 'Support teknik', unit: 'shërbim', price: 5200 },
      { id: 'mirembajtje-mujore-it', name: 'Mirëmbajtje mujore IT', unit: 'muaj', price: 16250 },
    ],
  },
];

export const VAT_RATE = 0.2;

export const formatLek = (value) =>
  `${Number(value).toLocaleString('sq-AL', { maximumFractionDigits: 0 })} Lek`;

export const getCategoryById = (id) => servicesPricing.find((c) => c.id === id);
