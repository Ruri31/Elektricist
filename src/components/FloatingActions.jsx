import { Phone, MessageCircle } from 'lucide-react';
import { business, getWhatsAppLink } from '../data/business.js';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Shkruaj në WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={`tel:${business.phone}`}
        aria-label="Telefono tani"
        className="w-14 h-14 rounded-full bg-primary text-accent flex items-center justify-center shadow-lg hover:bg-secondary hover:scale-110 transition-all"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
