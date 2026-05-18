import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Ndërhyrje e shpejtë në Tiranë & rrethinat',
  'Teknikë profesionistë me përvojë',
  'Material cilësor dhe garanci në punim',
  'Vlerësim falas dhe çmime transparente',
];

export default function LocalSEOSection() {
  return (
    <section id="elektricist-tirane" className="py-16 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <span className="inline-block text-secondary text-xs font-semibold uppercase tracking-wider mb-3">
          Shërbime profesionale në Tiranë
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 leading-tight">
          Elektricist në Tiranë — IT Support, Kamera Sigurie &amp; Rrjete
        </h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong>ElektroNet Tiranë</strong> ofron shërbime profesionale për instalime
            elektrike, riparime elektrike, kamera sigurie CCTV/IP, rrjete interneti LAN/Wi-Fi dhe
            IT support për banesa, apartamente, zyra, dyqane, lokale dhe biznese në Tiranë dhe
            rrethinat.
          </p>
          <p>
            Nëse kërkoni <strong>elektricist në Tiranë</strong> për riparim urgjent elektrik,
            instalim kamerash sigurie, konfigurim routeri, kabllim rrjeti LAN, suport për
            kompjuter ose printer, na kontaktoni direkt në telefon ose WhatsApp për një vlerësim
            të shpejtë.
          </p>
          <p>
            Shërbimet tona përfshijnë kontroll panelesh elektrike, automatë dhe siguresa,
            ndërrimin e prizave dhe çelësave, ndriçim LED, instalim CCTV/IP camera, DVR/NVR,
            access point, switch, router, rrjet zyre, IT support dhe smart home për çdo nevojë
            teknike.
          </p>
        </div>

        <ul className="mt-8 grid sm:grid-cols-2 gap-3">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
