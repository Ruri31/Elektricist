export const business = {
  name: 'ElektroNet Tiranë',
  tagline: 'Elektrike • IT • Kamera Sigurie • Networking',
  phone: '+355 698 137 666',
  email: 'rushan.hajko@icloud.com',
  address: 'Rruga Besim Alla, Tiranë, Shqipëri',
  areaServed: ['Tiranë', 'Durrës', 'Kamëz', 'Farkë', 'Vorë', 'Rrethinat e Tiranës'],
  hours: 'E Hënë - E Diel: 07:00 - 22:00',
  whatsappMessage: 'Pershendetje, kam nevoje per nje sherbim elektrik / IT / kamera sigurie.',
  siteUrl: 'https://www.example.com',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rruga+Besim+Alla+Tirane+Albania',
};

export const getPhoneClean = () => business.phone.replace(/\D/g, '');

export const getWhatsAppLink = () => {
  const clean = getPhoneClean();
  const msg = encodeURIComponent(business.whatsappMessage);
  return `https://wa.me/${clean}?text=${msg}`;
};
