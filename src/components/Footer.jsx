import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { business, getWhatsAppLink } from '../data/business.js';
import { services } from '../data/services.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-white font-extrabold text-lg mb-1">{business.name}</p>
            <p className="text-accent text-sm mb-4">{business.tagline}</p>
            <p className="text-sm leading-relaxed">
              Shërbime elektrike, IT support, kamera sigurie dhe networking për banesa dhe biznese
              në Tiranë.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Shërbimet
            </h3>
            <ul className="flex flex-col gap-1.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/sherbime/${s.slug}`}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Zona e shërbimit
            </h3>
            <ul className="flex flex-col gap-1.5">
              {business.areaServed.map((area) => (
                <li key={area} className="text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <Phone size={14} className="shrink-0" />
                {business.phone}
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <MessageCircle size={14} className="shrink-0" />
                WhatsApp
              </a>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <Mail size={14} className="shrink-0" />
                {business.email}
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                {business.address}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {year} {business.name}. Të gjitha të drejtat e rezervuara.</p>
          <p>{business.hours}</p>
        </div>
      </div>
    </footer>
  );
}
