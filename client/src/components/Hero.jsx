import { siteConfig, isRealLink } from '../config/siteConfig';

export default function Hero() {
  const hasWhatsapp = isRealLink(siteConfig.whatsappLink);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-4 pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,0.75), rgba(2,6,23,0.9)), url(${siteConfig.heroImagePath})`,
        backgroundColor: '#020617',
      }}
    >
      <div className="max-w-3xl text-center">
        <img
          src={siteConfig.logoPath}
          alt={`${siteConfig.universityName} logo`}
          className="mx-auto mb-6 h-24 w-auto"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <h1 className="text-4xl font-extrabold text-white sm:text-6xl">
          {siteConfig.teamName} <span aria-hidden="true">🏐</span>
        </h1>
        <p className="mt-6 text-lg text-slate-300">{siteConfig.welcomeMessage}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#join"
            className="w-full rounded-full bg-sky-500 px-8 py-3 font-semibold text-white transition hover:bg-sky-400 sm:w-auto"
          >
            Join the Team
          </a>
          <a
            href={hasWhatsapp ? siteConfig.whatsappLink : '#join'}
            target={hasWhatsapp ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="w-full rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Join Our WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}