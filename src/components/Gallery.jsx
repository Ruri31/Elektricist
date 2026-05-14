import { useState } from 'react';
import { gallery } from '../data/gallery.js';
import { X } from 'lucide-react';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Galeria e punimeve</h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Disa nga punimet tona profesionale.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {gallery.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(item)}
              className="aspect-square img-placeholder rounded-xl overflow-hidden relative group"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/30 text-xs text-center px-2">{item.category}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs line-clamp-2">{item.alt}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setLightbox(null)}
              aria-label="Mbylle"
            >
              <X size={28} />
            </button>
            <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video img-placeholder rounded-xl overflow-hidden">
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-center mt-3 text-sm">{lightbox.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
