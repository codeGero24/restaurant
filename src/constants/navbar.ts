import { page } from '@types.app/constants';

export const navPages: page[] = [
  {
    path: '/',
    name: 'Home',
    title: 'Home',
    order: 1,
  },
  {
    path: '/about',
    name: 'About',
    title: 'About Us',
    order: 2,
  },
  {
    path: '/service',
    name: 'Service',
    title: 'Services',
    order: 3,
  },
  {
    path: '/menu',
    name: 'Menu',
    title: 'Food Menu',
    order: 4,
  },
  {
    path: '/booking',
    name: 'Booking',
    title: 'Booking',
    order: 5,
    group: 'Pages',
  },
  {
    path: '/team',
    name: 'Our Team',
    title: 'Our Team',
    order: 6,
    group: 'Pages',
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    title: 'Testimonial',
    order: 7,
    group: 'Pages',
  },
  {
    path: '/contact',
    name: 'Contact',
    title: 'Contact',
    group: 'Contact',
    order: 8,
  },
];

export const navPagesGroup: page[] = [
  {
    path: '/booking',
    name: 'Booking',
    title: 'Booking',
    order: 5,
    group: 'Pages',
  },
  {
    path: '/team',
    name: 'Our Team',
    title: 'Our Team',
    order: 6,
    group: 'Pages',
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    title: 'Testimonial',
    order: 7,
    group: 'Pages',
  },
];
