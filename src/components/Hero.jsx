import { Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { business, getWhatsAppLink } from '../data/business.js';

const badges = [
  'Ndërhyrje e shpejtë',
  'Shërbim për shtëpi & biznese',
  'Kamera sigurie & rrjete',
  'Punë e pastër dhe e garantuar',
];

export default function Hero() {
  return (
    <section className="relative bg-primary text-white pt-28 pb-16 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #FACC15 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0F766E 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Disponibël: {business.hours}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Elektricist, IT Support, Kamera Sigurie &{' '}
              <span className="text-accent">Rrjete në Tiranë</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl">
              Ofrojmë shërbime profesionale për instalime elektrike, riparime, kamera sigurie,
              rrjete interneti/Wi-Fi dhe suport IT për banesa, apartamente, zyra dhe biznese.
              Na kontaktoni për ndërhyrje të shpejtë dhe punë të pastër.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-accent text-primary font-bold rounded-xl text-base hover:bg-yellow-400 transition-colors shadow-lg"
              >
                <Phone size={20} />
                Telefono tani
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-bold rounded-xl text-base hover:bg-green-600 transition-colors shadow-lg"
              >
                <MessageCircle size={20} />
                Shkruaj në WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 text-sm text-gray-300"
                >
                  <CheckCircle size={15} className="text-secondary shrink-0" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative right side */}
          <div className="hidden md:flex items-center justify-center">
            <div
              className="w-full rounded-2xl opacity-10"
              style={{
                height: '320px',
                background: 'radial-gradient(circle, #FACC15 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
