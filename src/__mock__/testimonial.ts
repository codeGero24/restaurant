import { Testimonial } from '@types.app/data';
import { generateTestimonial } from './generate.data';

export const review =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const profession = 'Designation';

export const me = {
  id: 999,
  review,
  name: 'Calogero Messina',
  profession: 'Fe developer',
  img: {
    src: '/img/me.png',
    alt: 'calogero',
  },
};

export const TESTIMONIAL: Testimonial[] = [me, ...generateTestimonial(4)];
