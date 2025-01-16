import { Testimonial } from '@types.app/data';
import { generateTestimonial } from './generate.data';

const review =
  'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam';

const me = {
  id: 999,
  review,
  name: 'Calogero Messina',
  profession: 'Fe developer',
  img: {
    src: '/img/me.jpg',
    alt: 'calogero',
  },
};

export const TESTIMONIAL: Testimonial[] = [me, ...generateTestimonial(4)];
