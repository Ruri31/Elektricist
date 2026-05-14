import { useState } from 'react';
import { services, categories } from '../data/services.js';
import ServiceCard from './ServiceCard.jsx';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('Të gjitha');

  const filtered =
    activeCategory === 'Të gjitha'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="sherbimet" className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
            Shërbimet tona
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Zgjidhje teknike profesionale për çdo nevojë — nga elektrika te kamera sigurie, rrjetet dhe IT support.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border border-gray-200 hover:border-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
