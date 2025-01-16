import { AboutUs, Member } from '@types.app/index';
import { generateImage, generateMember, generateSocials } from './generate.data';

// --------------------------
// - Mock data
// --------------------------

const userMe: Member = {
  id: 999,
  img: { src: '/img/me.jpg', alt: 'calogero' },
  name: 'Calogero Messina',
  role: 'Fe-developer',
  socials: generateSocials('michaelmess_97'),
};

export const MEMBERS: Member[] = [userMe, ...generateMember(3)];

export const IMAGES = generateImage(4, 'about');

export const ABOUT_DATA: AboutUs = {
  images: IMAGES,
  experience: {
    title: 'Years of',
    subtitle: 'Experience',
    rate: '10+',
  },
  popularMembers: {
    title: 'Popular',
    subtitle: 'Master Chefs',
    rate: '50+',
  },
};
