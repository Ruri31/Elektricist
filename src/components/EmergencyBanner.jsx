import { Phone, MessageCircle, Zap } from 'lucide-react';
import { business, getWhatsAppLink } from '../data/business.js';

export default function EmergencyBanner() {
  return (
    <section className="bg-danger py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <div className="flex justify-center mb-3">
          <Zap size={36} className="text-accent" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Keni problem urgjent?
        </h2>
        <p className="text-red-100 text-base mb-6 max-w-lg mx-auto">
          Defekt elektrik, internet që nuk funksionon ose kamera që nuk punojnë? Na telefononi
          ose shkruani në WhatsApp për asistencë të shpejtë në Tiranë dhe zonat përreth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={`tel:${business.phone}`}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-danger font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Phone size={18} />
            {business.phone}
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={18} />
            Shkruaj në WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
