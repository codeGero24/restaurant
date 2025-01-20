import { Img, Member, Testimonial, plate, social } from '@types.app/index';
// --------------------------
// - Function Generate data
// --------------------------

export const generateSocials = (
  idUser: string | number,
  socials?: string[]
): social[] => {
  const defaultSocials = ['facebook', 'twitter', 'instagram'];
  socials = socials || defaultSocials;

  return socials.map(social => ({
    name: social,
    icon: {
      name: (social.charAt(0).toUpperCase() + social.slice(1)) as social['icon']['name'],
    },
    link: `https://www.${social}.com/${idUser}`,
  }));
};

export const generatePathImg = (file: string, index: string | number) =>
  `https://themewagon.github.io/restoran/img/${file}-${index}.jpg`;

export const generateImage = (limit: number, file: string): Img[] => {
  return Array.from({ length: limit }, (_, i) => ({
    src: generatePathImg(file, i + 1),
    alt: `${file}-${i + 1}`,
  }));
};

export const generateMember = (limit: number): Member[] => {
  return Array.from({ length: limit }, (_, i) => ({
    id: i + 1,
    img: {
      src: generatePathImg('team', i + 1),
      alt: `team-${i + 1}`,
    },
    name: `Full Name ${i + 1}`,
    role: 'Designation',
    socials: generateSocials(i + 1),
  }));
};

export const generateTestimonial = (limit: number): Testimonial[] => {
  return Array.from({ length: limit }, (_, i) => ({
    id: i + 1,
    img: {
      src: generatePathImg('testimonial', i + 1),
      alt: `testimonial-${i + 1}`,
    },
    name: `Client Name ${i + 1}`,
    profession: 'Profession',
    review:
      'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
  }));
};

export const generateMenu = (limit: number): plate[] => {
  return Array.from({ length: limit }, (_, i) => ({
    id: i + 1,
    img: {
      src: generatePathImg('menu', i + 1),
      alt: `menu-${i + 1}`,
    },
    name: `Chicken Burger ${i + 1}`,
    description: 'Ipsum ipsum clita erat amet dolor justo diam',
    prince: '115',
  }));
};
