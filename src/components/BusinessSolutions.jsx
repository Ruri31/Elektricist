import { Camera, Network, Wifi, Monitor, Zap, Lightbulb, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/business.js';

const features = [
  { icon: Camera, label: 'Kamera sigurie me akses nga telefoni' },
  { icon: Network, label: 'Kabllim rrjeti dhe organizim rack' },
  { icon: Wifi, label: 'Wi-Fi për klientë dhe staf' },
  { icon: Monitor, label: 'Konfigurim printerash dhe pajisjesh zyre' },
  { icon: Zap, label: 'Kontroll elektrik dhe mirëmbajtje periodike' },
  { icon: Lightbulb, label: 'Ndriçim LED për lokale dhe dyqane' },
];

export default function BusinessSolutions() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Për bizneset
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">
              Zgjidhje teknike për zyra, dyqane, lokale dhe biznese
            </h2>
            <p className="text-gray-300 text-base mb-6">
              Ofrojmë instalime dhe mirëmbajtje të kombinuara për energji elektrike, kamera
              sigurie, rrjet LAN, Wi-Fi, printera, kompjutera dhe pajisje teknike. Qëllimi është
              që biznesi juaj të funksionojë pa ndërprerje dhe me infrastrukturë të sigurt.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-xl hover:bg-yellow-400 transition-colors"
            >
              <MessageCircle size={18} />
              Kërko ofertë për biznesin
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <Icon size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-gray-200">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
