export const generateSocials = (idUser: string) => [
  {
    name: 'facebook',
    icon: 'Facebook',
    link: `https://www.facebook.com/${idUser}`,
  },
  {
    name: 'twitter',
    icon: 'Twitter',
    link: `https://www.twitter.com/${idUser}`,
  },
  {
    name: 'instagram',
    icon: 'Instagram',
    link: `https://www.instagram.com/${idUser}`,
  },
];

export const generateUser = (limit: number) => {
  return Array.from({ length: limit }, (_, i) => ({
    id: i + 1,
    img: `https://themewagon.github.io/restoran/img/team-${i + 1}.jpg`,
    name: `Full Name ${i + 1}`,
    role: 'Designation',
    socials: generateSocials(`michaelmess_97`),
  }));
};

const userMe = {
  id: 999,
  img: '/img/me.jpg',
  name: 'Calogero Messina',
  role: 'Fe-developer',
  socials: generateSocials('michaelmess_97'),
};

export const members = [userMe, ...generateUser(3)];
