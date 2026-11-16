import { useState } from 'react';
import { siteConfig, isRealLink } from '../config/siteConfig';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const hasWhatsapp = isRealLink(siteConfig.whatsappLink);

  const whatsappProps = hasWhatsapp
    ? { href: siteConfig.whatsappLink, target: '_blank', rel: 'noopener noreferrer' }
    : { href: '#join' };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex items-center" aria-label={siteConfig.teamName}>
          {logoFailed ? (
            <span className="font-bold text-white">{siteConfig.teamName}</span>
          ) : (
            <img
              src={siteConfig.logoPath}
              alt={`${siteConfig.universityName} logo`}
              className="h-12 w-auto"
              onError={() => setLogoFailed(true)}
            />
          )}
        </a>

        <ul className="hidden gap-6 md:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-sky-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      
        <button
          type="button"
          className="rounded p-2 text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-slate-950 px-4 pb-4 md:hidden">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-slate-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}