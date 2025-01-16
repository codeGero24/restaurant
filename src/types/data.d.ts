import { type nameIcon } from '@types.app/ludice';

// ------------
// - Type Icon
// ------------
export type iconType = {
  name: nameIcon;
  className?: string;
  strokeWidth?: string;
};

// ------------
// - Type companyLink
// ------------
export type companyLink = {
  name: string;
  link: string;
};

// ------------
// - Type Social
// ------------
export type Social = {
  name: string;
  icon: iconType;
  link: string;
};

// ------------
// - Type Member
// ------------
export type Member = {
  id: string | number;
  img: string;
  name: string;
  role: string;
  socials: Social[];
};

// ------------
// - Type Service
// ------------
export type Service = {
  title: string;
  subtitle: string;
  icon: iconType;
};

// ------------
// - Interface Company
// ------------
export interface Company {
  name: string;
  links: companyLink[];
}
