export const siteConfig = {
  teamName: 'NWU Volleyball Team',
  universityName: 'NWU University',

  // Put your files in client/public/images/ with these names
  logoPath: '/images/nw-logo.png',
  heroImagePath: '/images/hero.jpg',

  whatsappLink: '[https://chat.whatsapp.com/CgOhjFn1tSR26gttsvavDV?s=cl&p=i&iam=2]',

  welcomeMessage:
    'Welcome to the NWU Volleyball Team  community of passionate volleyball players coming together to compete, grow, and represent NW University.',

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Memories', href: '#gallery' },
    { label: 'Join Us', href: '#join' },
  ],
};

export const isRealLink = (link) => /^https?:\/\//.test(link);