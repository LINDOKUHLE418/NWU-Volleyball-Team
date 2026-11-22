import { siteConfig } from '../config/siteConfig';

export default function Team() {
  const { teamPhotos, heroImagePath } = siteConfig;

  return (
    <section id="team" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Team</h2>

        {teamPhotos.length === 0 ? (
          <img
            src={heroImagePath}
            alt="The NWU Volleyball Team"
            className="mt-8 max-h-[28rem] w-full rounded-xl object-cover"
          />
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {teamPhotos.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt={photo.caption || 'NWU Volleyball Team'}
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-72"
                />
                {photo.caption && (
                  <figcaption className="bg-slate-900 px-3 py-2 text-sm text-slate-300">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}