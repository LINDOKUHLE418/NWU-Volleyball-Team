import { useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Gallery() {
  const items = siteConfig.gallery;
  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % items.length);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, items.length]);

  const current = index !== null ? items[index] : null;

  return (
    <section id="gallery" className="bg-slate-900 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Tournaments &amp; Memories</h2>

        {items.length === 0 ? (
          <p className="mt-6 text-slate-400">
            Photos from our tournaments and events will appear here soon.
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setIndex(i)}
                className="group relative overflow-hidden rounded-lg"
                aria-label={`Open photo: ${item.caption || item.event || i + 1}`}
              >
                <img
                  src={item.src}
                  alt={item.caption || item.event || 'Team photo'}
                  loading="lazy"
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-60"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-3xl text-white"
            aria-label="Close"
            onClick={() => setIndex(null)}
          >
            ✕
          </button>
          <img
            src={current.src}
            alt={current.caption || current.event || 'Team photo'}
            className="max-h-[75vh] max-w-full rounded"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 text-center text-slate-200" onClick={(e) => e.stopPropagation()}>
            {current.event && <p className="font-semibold">{current.event}</p>}
            {current.caption && <p>{current.caption}</p>}
            {current.date && <p className="text-sm text-slate-400">{current.date}</p>}
          </div>
          <div className="mt-4 flex gap-4" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="rounded-full bg-white/10 px-5 py-2 text-white"
              onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
            >
              ← Prev
            </button>
            <button
              type="button"
              className="rounded-full bg-white/10 px-5 py-2 text-white"
              onClick={() => setIndex((i) => (i + 1) % items.length)}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}