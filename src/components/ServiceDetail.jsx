import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import {
  Zap, Cable, Lightbulb, Camera, Shield, Network, Wifi, Monitor, ToggleLeft,
} from 'lucide-react';
import { getServiceBySlug } from '../data/services.js';
import { business, getWhatsAppLink } from '../data/business.js';
import SEO from './SEO.jsx';

const iconMap = { Zap, Cable, Lightbulb, Camera, Shield, Network, Wifi, Monitor, ToggleLeft };

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="text-2xl font-bold text-primary">Shërbimi nuk u gjet</h1>
        <Link to="/" className="text-secondary hover:underline">← Kthehu në faqen kryesore</Link>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Zap;

  return (
    <>
      <SEO
        title={`${service.title} | ElektroNet Tiranë`}
        description={service.shortText}
        canonical={`${business.siteUrl}/sherbime/${service.slug}`}
      />

      <main className="pt-20">
        {/* Hero */}
        <div className="bg-primary text-white py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-accent mb-6 transition-colors"
            >
              <ArrowLeft size={15} />
              Kthehu
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
                <Icon size={28} className="text-accent" />
              </div>
              <div>
                <span className="text-secondary text-sm font-semibold">{service.category}</span>
                <h1 className="text-2xl sm:text-3xl font-extrabold">{service.title}</h1>
              </div>
            </div>
            <p className="text-gray-300 text-lg">{service.shortText}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Image */}
              <div className="aspect-video img-placeholder rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Icon size={64} className="text-white/10" />
                </div>
              </div>

              <h2 className="text-xl font-bold text-primary mb-3">Rreth shërbimit</h2>
              <p className="text-muted leading-relaxed">{service.fullText}</p>

              {/* Keywords */}
              <div className="flex flex-wrap gap-2 mt-6">
                {service.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 bg-bg border border-gray-200 rounded-full text-xs text-muted"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="flex flex-col gap-4">
              <div className="bg-primary rounded-2xl p-5 text-white">
                <h3 className="font-bold mb-2">{service.cta}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Na kontaktoni tani për vlerësim falas dhe ndërhyrje të shpejtë.
                </p>
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center justify-center gap-2 py-3 bg-accent text-primary font-bold rounded-xl mb-2 text-sm hover:bg-yellow-400 transition-colors"
                >
                  <Phone size={16} />
                  {business.phone}
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-bold rounded-xl text-sm hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>

              <div className="bg-bg rounded-2xl p-5 border border-gray-200 text-sm text-muted">
                <p className="font-semibold text-primary mb-1">Orar pune</p>
                <p>{business.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
