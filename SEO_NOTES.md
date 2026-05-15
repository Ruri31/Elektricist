# SEO Notes — ElektroNet Tiranë

---

## 1. Before going live — replace placeholder domain

In these files, replace `https://www.example.com` with your real domain:

- `src/data/business.js` → `siteUrl`
- `index.html` → canonical, og:url, og:image, twitter:image
- `public/sitemap.xml` → all `<loc>` entries
- `public/robots.txt` → Sitemap line

---

## 2. OG image (required for social sharing)

Create a branded image at:

```
public/images/og-image.jpg
```

Dimensions: **1200 × 630 px**, JPG format.
Should include the brand name, tagline and a relevant background.
This image is shown when sharing the website on Facebook, WhatsApp and LinkedIn.

---

## 3. Google Business Profile checklist

To rank for keywords like "elektricist tirane", "kamera sigurie tirane", "it support tirane":

- [ ] Create or claim the Google Business Profile at https://business.google.com
- [ ] Business name: **ElektroNet Tiranë**
- [ ] Add website URL
- [ ] Add phone number: +355 698 137 666
- [ ] Add business hours: E Hënë - E Diel 07:00 - 22:00
- [ ] Primary category: **Electrician**
- [ ] Secondary categories:
  - Security system installer
  - Computer support and services
  - Computer networking service
- [ ] Add all services:
  - Elektricist në Tiranë
  - Riparime elektrike
  - Instalime elektrike
  - Panel elektrik, automat dhe siguresa
  - Ndriçim LED, priza dhe çelësa
  - Kamera sigurie CCTV/IP
  - Rrjete interneti LAN/Wi-Fi
  - IT Support
  - Smart Home dhe alarm
- [ ] Upload 10+ real work photos
- [ ] Request Google reviews from at least 10 real clients
- [ ] Post updates regularly (monthly minimum)

---

## 4. Google Search Console — after deploy

1. Open `https://YOUR-DOMAIN/sitemap.xml` and verify it loads correctly
2. Open `https://YOUR-DOMAIN/robots.txt` and verify the Sitemap line
3. In Google Search Console → Sitemaps → submit `sitemap.xml`
4. Use URL Inspection on each URL and click **Request Indexing**:
   - `/`
   - `/sherbime/elektricist-tirane`
   - `/sherbime/instalime-elektrike-tirane`
   - `/sherbime/automat-siguresa-panel-elektrik`
   - `/sherbime/ndricim-led-priza-celesa`
   - `/sherbime/ndricim-led-gipse`
   - `/sherbime/kamera-sigurie-tirane`
   - `/sherbime/rrjete-internet-wifi-tirane`
   - `/sherbime/it-support-tirane`
   - `/sherbime/smart-home-alarm-tirane`
   - `/kontakt`

---

## 5. Service images needed

Place these WebP files in `public/images/` (800×600 px recommended):

| File | Used by service |
|---|---|
| `electrician-panel-testing.webp` | Elektricist, Panel elektrik |
| `electrical-installation.webp` | Instalime elektrike |
| `electrical-switch-outlet-led.webp` | Automat/Siguresa, LED/Priza, Gipse |
| `cctv-camera-installation.webp` | Kamera sigurie |
| `network-rack-cabling.webp` | Rrjete interneti |
| `it-support-server-room.webp` | IT Support |
| `smart-home-alarm.webp` | Smart Home |

---

## 6. Important note on ranking expectations

This project has solid on-page SEO. Ranking for competitive local keywords also depends on:

- Google Business Profile verification and reviews
- Local backlinks and citations
- Domain age and authority
- Competition level in Tiranë
- Time (typically 2–6 months to see movement)
