import { Link } from 'react-router-dom';
import {
  Zap, Cable, Lightbulb, Camera, Shield, Network, Wifi, Monitor, ToggleLeft,
} from 'lucide-react';

const iconMap = { Zap, Cable, Lightbulb, Camera, Shield, Network, Wifi, Monitor, ToggleLeft };

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Zap;

  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all overflow-hidden">
      {/* Image / placeholder */}
      <div className="aspect-[16/9] img-placeholder relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={48} className="text-white/20" />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
            <Icon size={18} className="text-secondary" />
          </div>
          <h3 className="font-bold text-primary text-base leading-snug">{service.title}</h3>
        </div>
        <p className="text-muted text-sm flex-1 mb-4">{service.shortText}</p>
        <Link
          to={`/sherbime/${service.slug}`}
          className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-secondary hover:text-primary transition-colors"
        >
          {service.cta} →
        </Link>
      </div>
    </div>
  );
}
