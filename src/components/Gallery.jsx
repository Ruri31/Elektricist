import { useState, useEffect, useCallback } from 'react';
import { galleryCategories } from '../data/gallery.js';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openCategory = (cat, startIndex = 0) => {
    setActiveCategory(cat);
    setActiveIndex(startIndex);
  };
  const closeCategory = () => setActiveCategory(null);

  const next = useCallback(() => {
    if (!activeCategory) return;
    setActiveIndex((i) => (i + 1) % activeCategory.items.length);
  }, [activeCategory]);

  const prev = useCallback(() => {
    if (!activeCategory) return;
    setActiveIndex((i) => (i - 1 + activeCategory.items.length) % activeCategory.items.length);
  }, [activeCategory]);

  useEffect(() => {
    if (!activeCategory) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeCategory();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeCategory, next, prev]);

  const currentItem = activeCategory?.items[activeIndex];

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">Galeria e punimeve</h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Klikoni një kategori për të parë punimet tona profesionale.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galleryCategories.map((cat) => {
            const hasVideos = cat.items.some((i) => i.type === 'video');
            return (
              <button
                key={cat.key}
                onClick={() => openCategory(cat)}
                className="aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all text-left"
              >
                <img
                  src={cat.cover}
                  alt={cat.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                {hasVideos && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                    <Play size={12} fill="currentColor" />
                    Video
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg sm:text-xl">{cat.title}</h3>
                  <p className="text-xs text-white/80 mt-1">{cat.items.length} punime</p>
                </div>
              </button>
            );
          })}
        </div>

        {activeCategory && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex flex-col"
            onClick={closeCategory}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-white">
              <div className="flex flex-col">
                <span className="font-semibold text-base sm:text-lg">{activeCategory.title}</span>
                <span className="text-white/60 text-xs">
                  {activeIndex + 1} / {activeCategory.items.length}
                </span>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); closeCategory(); }}
                aria-label="Mbylle galerinë"
                className="p-2 hover:bg-white/10 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main viewer */}
            <div
              className="flex-1 flex items-center justify-center px-2 sm:px-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={prev}
                aria-label="Mëparshëm"
                className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="max-w-6xl w-full flex items-center justify-center">
                {currentItem.type === 'video' ? (
                  <video
                    key={currentItem.src}
                    src={currentItem.src}
                    poster={currentItem.poster}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="max-w-full max-h-[75vh] rounded-xl bg-black"
                  />
                ) : (
                  <img
                    src={currentItem.src}
                    alt={currentItem.alt}
                    className="max-w-full max-h-[75vh] object-contain rounded-xl"
                  />
                )}
              </div>

              <button
                onClick={next}
                aria-label="Tjetri"
                className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom: caption + thumbnails */}
            <div className="px-4 sm:px-6 pb-4 pt-2" onClick={(e) => e.stopPropagation()}>
              <p className="text-white/80 text-center text-sm mb-3">{currentItem.alt}</p>
              <div className="flex gap-2 overflow-x-auto pb-1 justify-center">
                {activeCategory.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      i === activeIndex ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.type === 'video' ? item.poster : item.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play size={16} className="text-white" fill="currentColor" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
