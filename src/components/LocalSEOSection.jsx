import { Link } from 'react-router-dom';

export default function LocalSEOSection() {
  return (
    <section id="elektricist-tirane" className="bg-gray-50 py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-5">
          Elektricist në Tiranë — IT Support, Kamera Sigurie & Rrjete
        </h2>

        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>ElektroNet Tiranë</strong> ofron shërbime profesionale për instalime elektrike,
          riparime elektrike, kamera sigurie CCTV/IP, rrjete interneti LAN/Wi-Fi dhe IT support për
          banesa, apartamente, zyra, dyqane, lokale dhe biznese në Tiranë dhe rrethinat.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Nëse kërkoni <strong>elektricist në Tiranë</strong> për riparim urgjent elektrik, instalim
          kamerash sigurie, konfigurim routeri, kabllim rrjeti LAN, suport për kompjuter ose
          printer, mund të na kontaktoni direkt në telefon ose WhatsApp për një vlerësim të shpejtë.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Shërbimet tona përfshijnë kontroll panelesh elektrike, automatë dhe siguresa, ndërrimin e
          prizave dhe çelësave, ndriçim LED, instalim CCTV/IP camera, DVR/NVR, access point, switch,
          router, rrjet zyre, IT support dhe smart home për çdo nevojë teknike.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            { to: '/sherbime/elektricist-tirane', label: 'Elektricist në Tiranë' },
            { to: '/sherbime/instalime-elektrike-tirane', label: 'Instalime elektrike' },
            { to: '/sherbime/kamera-sigurie-tirane', label: 'Kamera sigurie' },
            { to: '/sherbime/rrjete-internet-wifi-tirane', label: 'Rrjete interneti & Wi-Fi' },
            { to: '/sherbime/it-support-tirane', label: 'IT Support' },
            { to: '/sherbime/smart-home-alarm-tirane', label: 'Smart Home & Alarm' },
            { to: '/sherbime/automat-siguresa-panel-elektrik', label: 'Panel elektrik & Automat' },
            { to: '/sherbime/ndricim-led-priza-celesa', label: 'Ndriçim LED & Priza' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
