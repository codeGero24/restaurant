import { Company, Social } from '@types.app/index';

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

export const SOCIAL_FOOTER: Social[] = [
  {
    name: 'facebook',
    icon: {
      name: 'Facebook',
    },
    link: 'https://www.facebook.com/',
  },
  {
    name: 'twitter',
    icon: {
      name: 'Twitter',
    },
    link: 'https://twitter.com/',
  },
  {
    name: 'youtube',
    icon: {
      name: 'Youtube',
    },

    link: 'https://www.youtibe.com/',
  },
  {
    name: 'linkedin',
    icon: {
      name: 'Linkedin',
    },
    link: 'https://www.linkedin.com/',
  },
];
