import { Company, social } from '@types.app/index';
import { generateSocials } from './generate.data';

export const COMPANY: Company = {
  name: 'Company',
  links: [
    {
      name: 'About Us',
      link: '/about',
    },
    {
      name: 'Contact Us',
      link: '/contact',
    },
    {
      name: 'Services',
      link: '/service',
    },
    {
      name: 'Privacy Policy',
      link: '/privacy-policy',
    },
    {
      name: 'Term & condiion',
      link: '/term-condition',
    },
  ],
};

const idSocial = 'peoplefirst';
const socials = ['facebook', 'twitter', 'youtube', 'linkedin'];
export const SOCIAL_FOOTER: social[] = generateSocials(idSocial, socials);
