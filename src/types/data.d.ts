import { type nameIcon } from '@types.app/ludice';
import { HTMLAttributes } from 'react';

// --------------------
// - Type icon
// --------------------
export type iconType = {
  name: nameIcon;
  className?: string;
  strokeWidth?: string;
};

// --------------------
// - Type companyLink
// --------------------
export type companyLink = {
  name: string;
  link: string;
};

// --------------------
// - Type social
// --------------------
export type social = {
  name: string;
  icon: iconType;
  link: string;
};

// --------------------
// - Type experience
// --------------------
export type experience = {
  title: string;
  subtitle: string;
  rate: string;
};

// --------------------
// - Type popularMembers
// --------------------
export type popularMembers = {
  title: string;
  subtitle: string;
  rate: string;
};

// --------------------
// - Interface img
// --------------------
export interface Img extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

// --------------------
// - Interface Member
// --------------------
export interface Member {
  id: string | number;
  img: Img;
  name: string;
  role: string;
  socials: social[];
}

// --------------------
// - Interface Service
// --------------------
export interface Service {
  title: string;
  subtitle: string;
  icon: iconType;
}

// --------------------
// - Interface Company
// --------------------
export interface Company {
  name: string;
  links: companyLink[];
}

// --------------------
// - Interface AboutUs
// --------------------
export interface AboutUs {
  images: Img[];
  experience: experience;
  popularMembers: popularMembers;
}

// --------------------
// - Interface Testimonial
// --------------------
interface Testimonial {
  id: string | number;
  review: string;
  name: string;
  profession: string;
  img: Img;
}
