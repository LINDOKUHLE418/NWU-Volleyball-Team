export const siteConfig = {
  teamName: 'NWU Volleyball Team',
  universityName: 'North-West University',

  logoPath: '/images/nw-logo.png',
  heroImagePath: '/images/hero.jpg',

  whatsappLink: 'https://chat.whatsapp.com/CgOhjFn1tSR26gttsvavDV?s=cl&p=i&iam=2',

  welcomeMessage:
    'Welcome to the NWU Volleyball Team, a community of passionate volleyball players coming together to compete, grow, and represent North-West University.',

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Memories', href: '#gallery' },
    { label: 'Join Us', href: '#join' },
  ],

  about: {
    title: 'About Us',
    paragraphs: [
      'The North-West University Volleyball Team was established in 2025 by a small group of passionate student volleyball enthusiasts. Because they did not have enough resources at first, they joined the staff volleyball team.',
      'A member of the staff team then helped the students get their own team recognised by the University, and it was approved.',
      'The team has since grown into a competitive and inclusive community, welcoming players of all skill levels who share a love for the sport.',
      'We are committed to developing players, participating in tournaments, representing North-West University, and creating opportunities for students who enjoy volleyball.',
    ],
    focusAreas: [
      'Building a strong volleyball community',
      'Developing players',
      'Participating in tournaments',
      'Representing North-West University',
      'Creating opportunities for students who enjoy volleyball',
    ],
  },

  // Team photos: put images in client/public/images/team/ and list them here.
  // Example: { src: '/images/team/photo1.jpg', caption: 'Optional caption' }
  
  teamPhotos: [
  { src: '/images/team/team1.jpg' },
  { src: '/images/team/team2.jpg' },
  { src: '/images/team/team3.jpg' },
  { src: '/images/team/team4.jpg' },
  { src: '/images/team/team5.jpg' },
  {src: '/images/team/team6.jpg' },
  { src: '/images/team/team7.jpg' },
  { src: '/images/team/team8.jpg' },
  { src: '/images/team/team9.jpg' },
  { src: '/images/team/team10.jpg' },
  { src: '/images/team/team11.jpg' },
  { src: '/images/team/team12.jpg' },
  { src: '/images/team/team13.jpg' },
  { src: '/images/team/team14.jpg' },
  { src: '/images/team/team15.jpg' },
  { src: '/images/team/team16.jpg' },
  { src: '/images/team/team17.jpg' },
  { src: '/images/team/team18.jpg' },
  { src: '/images/team/team19.jpg' },
  { src: '/images/team/team20.jpg' },
  { src: '/images/team/team21.jpg' },
  { src: '/images/team/team22.jpg' },
  { src: '/images/team/team23.jpg' },
  { src: '/images/team/team24.jpg' },
  { src: '/images/team/team25.jpg' },
  { src: '/images/team/team26.jpg' },
  { src: '/images/team/team28.jpg' },
  { src: '/images/team/team29.jpg' },
  { src: '/images/team/team30.jpg' },
  { src: '/images/team/team31.jpg' },
  { src: '/images/team/team32.jpg' },
  { src: '/images/team/team33.jpg' },
  { src: '/images/team/team34.jpg' },
  { src: '/images/team/team35.jpg' },
  { src: '/images/team/team36.jpg' },
],
    


};

export const isRealLink = (link) => /^https?:\/\//.test(link);