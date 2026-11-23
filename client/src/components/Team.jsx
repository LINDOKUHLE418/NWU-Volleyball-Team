import { useEffect, useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Team() {
  const { teamPhotos, heroImagePath } = siteConfig;
  const [index, setIndex] = useState(null);

  const total = teamPhotos.length;

  useEffect(() => {
    if (index === null) return;

    const onKey = (e) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % total);
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total);
    };

    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden'; // stop page scrolling behind the lightbox

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, total]);

  const current = index !== null ? teamPhotos[index] : null;

  return (
    <section id="team" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Team</h2>

        {total === 0 ? (
          <img
            src={heroImagePath}
            alt="The NWU Volleyball Team"
            className="mt-8 max-h-[28rem] w-full rounded-xl object-cover"
          />
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {teamPhotos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setIndex(i)}
                className="group overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={`View photo ${i + 1} of ${total}`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption || `NWU Volleyball Team photo ${i + 1}`}
                  loading="lazy"
                  className="h-56 w-full cursor-zoom-in object-cover transition duration-300 group-hover:scale-105 sm:h-72"
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
          aria-label="Photo viewer"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-2xl text-white hover:bg-white/20"
            aria-label="Close"
            onClick={() => setIndex(null)}
          >
            ✕
          </button>

          <img
            src={current.src}
            alt={current.caption || `NWU Volleyball Team photo ${index + 1}`}
            className="max-h-[78vh] max-w-full rounded object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {current.caption && (
            <p className="mt-3 text-slate-200" onClick={(e) => e.stopPropagation()}>
              {current.caption}
            </p>
          )}

          <div
            className="mt-4 flex items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="rounded-full bg-white/10 px-5 py-2 text-white hover:bg-white/20"
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
            >
              ← Prev
            </button>
            <span className="text-sm text-slate-300">
              {index + 1} / {total}
            </span>
            <button
              type="button"
              className="rounded-full bg-white/10 px-5 py-2 text-white hover:bg-white/20"
              onClick={() => setIndex((i) => (i + 1) % total)}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}