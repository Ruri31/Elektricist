import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Çfarë thonë klientët
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted text-sm mb-4 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-primary text-sm">{t.name}</p>
                <p className="text-muted text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
