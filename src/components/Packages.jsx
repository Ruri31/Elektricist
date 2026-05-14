import { CheckCircle, MessageCircle } from 'lucide-react';
import { packages } from '../data/packages.js';
import { getWhatsAppLink } from '../data/business.js';

export default function Packages() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Paketa mirëmbajtjeje
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Zgjidhni paketën e duhur për nevojat e shtëpisë ose biznesit tuaj.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                pkg.highlight
                  ? 'border-secondary bg-secondary text-white shadow-xl scale-105'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {pkg.highlight && (
                <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                  Më i popullarit
                </span>
              )}
              <h3
                className={`text-xl font-extrabold mb-1 ${pkg.highlight ? 'text-white' : 'text-primary'}`}
              >
                {pkg.name}
              </h3>
              <p className={`text-sm mb-5 ${pkg.highlight ? 'text-teal-100' : 'text-muted'}`}>
                {pkg.subtitle}
              </p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      size={15}
                      className={`shrink-0 mt-0.5 ${pkg.highlight ? 'text-accent' : 'text-secondary'}`}
                    />
                    <span className={pkg.highlight ? 'text-teal-50' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors ${
                  pkg.highlight
                    ? 'bg-accent text-primary hover:bg-yellow-400'
                    : 'bg-primary text-white hover:bg-secondary'
                }`}
              >
                <MessageCircle size={16} />
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
