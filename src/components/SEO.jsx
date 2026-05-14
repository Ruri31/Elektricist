import { Helmet } from 'react-helmet-async';
import { business } from '../data/business.js';
import { localBusinessSchema, faqSchema } from '../data/schema.js';

export default function SEO({ title, description, canonical, includeFaq = false }) {
  const pageTitle = title || `Elektricist në Tiranë | IT Support, Kamera Sigurie & Rrjete`;
  const pageDesc =
    description ||
    'Shërbime elektrike, IT support, instalim kamerash sigurie, rrjete interneti LAN/Wi-Fi dhe konfigurime për banesa e biznese në Tiranë. Telefononi tani.';
  const pageUrl = canonical || business.siteUrl;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={business.name} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${business.siteUrl}/images/og-image.jpg`} />
      <meta property="og:locale" content="sq_AL" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={`${business.siteUrl}/images/og-image.jpg`} />

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {includeFaq && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
}
