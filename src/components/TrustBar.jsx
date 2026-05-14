import { Clock, MapPin, ShieldCheck, Building2 } from 'lucide-react';

const items = [
  { icon: Clock, label: 'Ndërhyrje e shpejtë' },
  { icon: MapPin, label: 'Tiranë dhe zonat përreth' },
  { icon: ShieldCheck, label: 'Punë e garantuar' },
  { icon: Building2, label: 'Për shtëpi & biznes' },
];

export default function TrustBar() {
  return (
    <div className="bg-secondary text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-medium">
              <Icon size={16} className="text-accent shrink-0" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
