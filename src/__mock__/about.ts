import { Member, Social } from '@types.app/index';

export const generateSocials = (idUser: string): Social[] => [
  {
    name: 'facebook',
    icon: {
      name: 'Facebook',
    },
    link: `https://www.facebook.com/${idUser}`,
  },
  {
    name: 'twitter',
    icon: {
      name: 'Twitter',
    },
    link: `https://www.twitter.com/${idUser}`,
  },
  {
    name: 'instagram',
    icon: {
      name: 'Instagram',
    },
    link: `https://www.instagram.com/${idUser}`,
  },
];

export const generateUser = (limit: number): Member[] => {
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

export const MEMBERS = [userMe, ...generateUser(3)] as Member[];
