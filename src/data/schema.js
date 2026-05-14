import { business } from './business.js';
import { faqs } from './faqs.js';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Electrician'],
  name: business.name,
  image: `${business.siteUrl}/images/og-image.jpg`,
  url: `${business.siteUrl}/`,
  telephone: business.phone,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rruga Besim Alla',
    addressLocality: 'Tiranë',
    addressCountry: 'AL',
  },
  areaServed: business.areaServed.map((area) => ({
    '@type': 'City',
    name: area,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '22:00',
    },
  ],
  priceRange: '€€',
  description:
    'Shërbime elektrike, kamera sigurie, IT support dhe networking për banesa, zyra dhe biznese në Tiranë.',
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Riparime elektrike' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instalime elektrike' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kamera sigurie CCTV' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Networking dhe kabllim LAN' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Support' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Home & Alarm' } },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
