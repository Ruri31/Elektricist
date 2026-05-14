# ElektroNet Tiranë — Website

**Elektrike • IT • Kamera Sigurie • Networking**

Faqe interneti profesionale për shërbime teknike në Tiranë, Shqipëri.  
Ndërtuar me React + Vite + Tailwind CSS. Gati për deploy në Vercel.

---

## Tabela e Përmbajtjes

- [Çfarë është ky projekt](#çfarë-është-ky-projekt)
- [Teknologjitë e përdorura](#teknologjitë-e-përdorura)
- [Si ta nisësh lokalisht](#si-ta-nisësh-lokalisht)
- [Struktura e projektit](#struktura-e-projektit)
- [Faqet dhe seksionet](#faqet-dhe-seksionet)
- [Çfarë bën çdo komponent](#çfarë-bën-çdo-komponent)
- [Si të personalizosh](#si-të-personalizosh)
- [Deploy në Vercel](#deploy-në-vercel)
- [Para publikimit — checklist](#para-publikimit--checklist)

---

## Çfarë është ky projekt

**ElektroNet Tiranë** është një faqe interneti lokale për shërbime teknike që përfshin:

- Riparime dhe instalime elektrike
- Montim kamerash sigurie CCTV/IP
- Kabllim rrjeti LAN dhe konfigurim Wi-Fi/router
- IT Support për kompjutera, printera dhe zyra
- Smart Home, alarme dhe sisteme sigurie
- Mirëmbajtje periodike për biznese

Qëllimi i faqes është që vizitori të kuptojë brenda 5 sekondash çfarë ofrohet dhe të kontaktojë me një klikim — nëpërmjet telefonit ose WhatsApp.

---

## Teknologjitë e përdorura

| Teknologji | Roli |
|---|---|
| **React 19** | Ndërtimi i ndërfaqes së përdoruesit me komponente |
| **Vite 8** | Server zhvillimi i shpejtë + build i optimizuar për prodhim |
| **Tailwind CSS v3** | Stilizim me klasa utility — pa CSS custom të shumtë |
| **react-router-dom** | Navigim mes faqeve (URL-ve) pa rifreskim të plotë |
| **react-helmet-async** | Menaxhimi i `<title>`, meta tags dhe schema JSON-LD për çdo faqe |
| **lucide-react** | Ikonë vektori moderne dhe të lehta |

---

## Si ta nisësh lokalisht

```bash
# 1. Instalo dependencies (vetëm herën e parë)
npm install

# 2. Nis server-in e zhvillimit
npm run dev
# Faqja hapet te: http://localhost:5173

# 3. Build për prodhim
npm run build

# 4. Preview i build-it të prodhimit
npm run preview
```

---

## Struktura e projektit

```
ElektroNet-Tirane/
│
├── public/
│   ├── images/              ← Imazhet WebP (hero, kamera, rrjet, IT...)
│   │   └── logo-elektronet-tirane.png  ← Logo e biznesit (vendose këtu)
│   ├── favicon.svg          ← Ikona e tab-it të browser-it (rrufë e verdhë)
│   ├── robots.txt           ← Udhëzime për motorët e kërkimit (Google)
│   └── sitemap.xml          ← Harta e faqes për SEO
│
├── src/
│   ├── data/                ← Të dhënat e biznesit (ndrysho këtu, jo nëpër komponente)
│   │   ├── business.js      ← Emri, telefoni, email, orari, zona e shërbimit
│   │   ├── services.js      ← Lista e 8 shërbimeve me slug, titull, tekst, imazh
│   │   ├── problemCategories.js  ← 6 kartat "çfarë problemi keni?"
│   │   ├── faqs.js          ← 8 pyetje dhe përgjigje të shpeshta
│   │   ├── gallery.js       ← Imazhet e galerisë me alt text shqip
│   │   ├── testimonials.js  ← 4 komente klientësh
│   │   ├── packages.js      ← 3 paketa mirëmbajtjeje (Bazë, Biznesi, Premium)
│   │   └── schema.js        ← JSON-LD për Google (LocalBusiness + FAQPage)
│   │
│   ├── components/          ← Çdo seksion i faqes është komponent i veçantë
│   │   ├── SEO.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── ProblemCategorySection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── EmergencyBanner.jsx
│   │   ├── BusinessSolutions.jsx
│   │   ├── Gallery.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Packages.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingActions.jsx
│   │   └── ServiceDetail.jsx
│   │
│   ├── styles/
│   │   └── globals.css      ← Font Inter + Tailwind + ngjyrat CSS custom
│   │
│   ├── App.jsx              ← Router kryesor — lidh të gjitha faqet dhe komponentet
│   └── main.jsx             ← Pika e hyrjes — mounon React në DOM
│
├── index.html               ← HTML bazë me meta tags SEO, OG dhe Twitter Card
├── tailwind.config.js       ← Paleta e ngjyrave dhe konfigurimi i Tailwind
├── vercel.json              ← Rregulla për Vercel: çdo URL shkon tek index.html
├── vite.config.js           ← Konfigurimi i Vite
└── package.json             ← Dependencies dhe skriptet
```

---

## Faqet dhe seksionet

### Faqja kryesore `/`

Faqja kryesore është e ndërtuar prej seksionesh të renditura vertikalisht:

| Renditja | Seksioni | Çfarë bën |
|---|---|---|
| 1 | **Header** | Sticky header me logo, menu, numër telefoni dhe buton WhatsApp. Në mobile shfaqet menu hamburger. |
| 2 | **Hero** | Seksioni i parë dhe më i rëndësishëm. H1 i fortë, subtitle, dy butona (Telefono + WhatsApp) dhe 4 badges besueshmërie. Sfondi navy me gradient. |
| 3 | **TrustBar** | Shiriti i gjelbër nën hero me 4 sinjale besimi: ndërhyrje e shpejtë, zona, garanci, shtëpi & biznes. |
| 4 | **ProblemCategorySection** | 6 karta interaktive "çfarë problemi keni?" — priza, automat, LED, kamera, Wi-Fi, kompjuter. Kliku çon te kontakti ose shërbimet. |
| 5 | **ServicesSection** | Grid me 8 karta shërbimesh të filtrueshmë sipas kategorisë: Të gjitha / Elektrike / Kamera / Networking / IT / Smart. |
| 6 | **EmergencyBanner** | Banner i kuq urgjence me tekst bindës dhe dy butona. Synon klientët me probleme elektrike ose teknike urgjente. |
| 7 | **BusinessSolutions** | Seksion navy për bizneset: zyra, dyqane, lokale. Liston 6 shërbime biznesi dhe ka buton CTA për ofertë. |
| 8 | **Gallery** | Grid me 8 imazhe pune. Kliku hap lightbox me imazhin të zmadhuar. Imazhet kanë lazy loading. |
| 9 | **HowItWorks** | 4 hapat e procesit: kontakto → vlerësim → ndërhyrje → testim & garanci. |
| 10 | **Packages** | 3 paketa mirëmbajtjeje me liste veçorish dhe CTA drejt WhatsApp. Paketa "Biznesi" është e theksuar. |
| 11 | **Testimonials** | 4 komente klientësh me yje dhe rolin e personit. |
| 12 | **FAQ** | 8 pyetje accordion. Hapet/mbyllet me klikim. Schema FAQ është e integruar për Google. |
| 13 | **Contact** | Info kontakti (telefon, WhatsApp, email, orar, zona) + formular që hap WhatsApp me mesazh të parapërgatitur. |
| 14 | **Footer** | 4 kolona: brand, lista shërbimesh, zonat, kontakt. |
| 15 | **FloatingActions** | Dy butona të fiksuar poshtë-djathtas (WhatsApp i gjelbër + Telefon navy) — gjithmonë të dukshëm. |

---

### Faqja e shërbimit `/sherbime/:slug`

Çdo shërbim ka faqen e vet me URL unike. Ekzistojnë 8 faqe shërbimi:

| URL | Shërbimi |
|---|---|
| `/sherbime/elektricist-tirane` | Elektricist në Tiranë — riparime urgjente |
| `/sherbime/instalime-elektrike-tirane` | Instalime elektrike të plota |
| `/sherbime/automat-siguresa-panel-elektrik` | Automat, siguresa dhe panele |
| `/sherbime/ndricim-led-priza-celesa` | Ndriçim LED, priza dhe çelësa |
| `/sherbime/kamera-sigurie-tirane` | Kamera sigurie CCTV/IP |
| `/sherbime/rrjete-internet-wifi-tirane` | Rrjete LAN dhe Wi-Fi |
| `/sherbime/it-support-tirane` | IT Support për zyra |
| `/sherbime/smart-home-alarm-tirane` | Smart Home dhe alarme |

Çdo faqe shërbimi përmban:
- Hero me ikona, kategori dhe titull
- Imazh i shërbimit
- Tekst i plotë përshkrues
- Keywords SEO si badges
- Sidebar me buton Telefono + WhatsApp dhe orarin e punës

---

### Faqja e kontaktit `/kontakt`

Versioni i pavarur i seksionit të kontaktit — i aksesueshëm direkt nga URL `/kontakt`. Përmban të njëjtat informacione dhe formularin si seksioni Contact i homepage-it.

---

## Çfarë bën çdo komponent

### `SEO.jsx`
Menaxhon të gjitha meta tags dinamikisht për çdo faqe:
- `<title>` dhe `<meta description>` unik për çdo route
- Canonical URL
- Open Graph (Facebook/LinkedIn preview)
- Twitter Card
- JSON-LD schema (LocalBusiness + Electrician + FAQPage)

### `Header.jsx`
- Sticky — mbetet në krye gjatë scrollit
- Në desktop: logo majtas, menu qendër, telefon+WhatsApp djathtas
- Në mobile: logo + hamburger menu që hapet si dropdown
- Mbyllet automatikisht kur ndryshon faqja

### `FloatingActions.jsx`
Dy butona të fiksuar mbi çdo seksion (bottom-right):
- WhatsApp i gjelbër (prioritet i lartë — vizitorët celularë e presin)
- Telefon navy — për kontakt të drejtpërdrejtë

### `Contact.jsx` — Formulari WhatsApp
Formulari **nuk ka backend**. Kur vizitori klikon "Dërgo":
1. Merr të dhënat e formularit (emri, telefoni, shërbimi, zona, problemi)
2. Krijon automatikisht tekst WhatsApp të formatuar
3. Hap WhatsApp me numrin e biznesit dhe mesazhin të plotësuar

---

## Si të personalizosh

### Ndrysho numrin e telefonit ose email-in
Hap [`src/data/business.js`](src/data/business.js) dhe ndrysho:
```js
phone: '+355 68 6096549',
email: 'info@example.com',       // ndrysho me email real
siteUrl: 'https://www.example.com', // ndrysho me domain real
```

### Shto ose ndrysho shërbime
Hap [`src/data/services.js`](src/data/services.js) — çdo objekt ka:
```js
{
  slug: 'url-e-faqes',
  title: 'Titulli i shërbimit',
  category: 'Elektrike',          // filtri
  shortText: 'Tekst i shkurtër',
  fullText: 'Tekst i plotë...',
  image: '/images/emri.webp',
  icon: 'Zap',                    // ikona lucide-react
  cta: 'Teksti i butonit',
  keywords: ['keyword1', 'keyword2'],
}
```

### Shto imazhe reale
Vendos imazhet WebP (`.webp`) në dosjen `public/images/`. Emrat e saktë janë:
```
hero-electrician-it-cctv.webp
electrician-panel-testing.webp
electrical-installation.webp
electrical-switch-outlet-led.webp
cctv-camera-installation.webp
network-rack-cabling.webp
wifi-router-installation.webp
it-support-server-room.webp
smart-home-alarm.webp
logo-elektronet-tirane.png
og-image.jpg
```
Deri sa të vendosen imazhet reale, shfaqen placeholders me gradient navy→teal.

### Ndrysho ngjyrat
Hap [`tailwind.config.js`](tailwind.config.js):
```js
colors: {
  primary: '#0B1F3A',    // navy kryesor
  secondary: '#0F766E',  // teal
  accent: '#FACC15',     // e verdhë (CTA, highlights)
  danger: '#DC2626',     // e kuqe (banner urgjence)
}
```

---

## Deploy në Vercel

### Çfarë është Vercel?
Vercel është platformë cloud falas (për projekte personale) që:
- Merr kodin nga GitHub dhe e publikon automatikisht
- Ndërton projektin me `npm run build` në cloud
- E bën faqen të aksesueshme globalisht me HTTPS
- Ri-deployon çdo herë që bëni `git push`

### Si ta lidhësh me GitHub dhe Vercel

**Hapi 1 — Ngarko kodin në GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: ElektroNet Tirane website"
git remote add origin https://github.com/username/elektronet-tirane.git
git push -u origin main
```

**Hapi 2 — Krijo projekt në Vercel:**
1. Hyr te [vercel.com](https://vercel.com) → **Add New Project**
2. Lidh GitHub account-in
3. Zgjidhni repo-n `elektronet-tirane`
4. Cilësimet e build (Vercel i zbulon automatikisht):
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Kliko **Deploy**

**Hapi 3 — Domain personal:**
- Vercel jep domain falas si `elektronet-tirane.vercel.app`
- Mund të lidhni domain tuaj (`elektronet-tirane.al`) nga **Settings → Domains**

### Pse `vercel.json` është i rëndësishëm?
React Router funksionon vetëm në browser. Kur vizitori shkon direkt te `/sherbime/kamera-sigurie-tirane`, serveri nuk e di ku të shojë — kthehet 404.

Fajlli [`vercel.json`](vercel.json) zgjidh këtë: tregon Vercel-it të dërgojë **çdo URL** te `index.html`, dhe React Router merr kontrollin:
```json
{
  "rewrites": [
    {
      "source": "/((?!api|images|sitemap.xml|robots.txt|favicon.svg|og-image.jpg).*)",
      "destination": "/index.html"
    }
  ]
}
```
Fajllat statikë (imazhet, sitemap, robots.txt) shërbehen direkt — nuk i përcillen index.html.

---

## Para publikimit — checklist

- [ ] Ndrysho `siteUrl` në [`src/data/business.js`](src/data/business.js) me domain real
- [ ] Ndrysho `email` në [`src/data/business.js`](src/data/business.js)
- [ ] Ndrysho `example.com` në [`index.html`](index.html) (canonical + OG + Twitter)
- [ ] Ndrysho `example.com` në [`public/robots.txt`](public/robots.txt)
- [ ] Ndrysho `example.com` në [`public/sitemap.xml`](public/sitemap.xml)
- [ ] Vendos logon e biznesit te `public/images/logo-elektronet-tirane.png`
- [ ] Vendos imazhet WebP reale te `public/images/`
- [ ] Krijo `public/images/og-image.jpg` (1200×630px) për preview social media
- [ ] Testo numrin e telefonit dhe WhatsApp-in nga telefoni celular
- [ ] Testo faqen në mobile (360px), tablet (768px) dhe desktop
- [ ] Lidh faqen me **Google Search Console** pas publikimit
- [ ] Submito `sitemap.xml` në Google Search Console
- [ ] Krijo **Google Business Profile** me emrin, numrin dhe zonën e shërbimit

---

## Shënime teknike

- **Nuk ka backend** — formulari hap WhatsApp, nuk dërgon email
- **Nuk ka database** — të gjitha të dhënat janë në `src/data/`
- **Imazhet mungojnë** deri sa t'i vendosësh — placeholders janë aktive
- **Lighthouse target:** Performance 90+ / SEO 100 / Accessibility 90+
