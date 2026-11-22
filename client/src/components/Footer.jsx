import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} {siteConfig.teamName}. {siteConfig.universityName}.
    </footer>
  );
}