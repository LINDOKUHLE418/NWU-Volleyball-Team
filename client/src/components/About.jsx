import { siteConfig } from '../config/siteConfig';

export default function About() {
  const { about } = siteConfig;
  return (
    <section id="about" className="bg-slate-900 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{about.title}</h2>
        <div className="mt-6 space-y-4 text-slate-300">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {about.focusAreas.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-white/10 bg-slate-800/60 px-4 py-3 text-slate-200"
            >
              <span className="mr-2 text-sky-400">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}