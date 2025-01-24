import { Service } from '@types.app/index';

const subtitle = 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam';

export const SERVICES: Service[] = [
  {
    subtitle,
    icon: {
      name: 'UserRoundCog',
      className: 'icon md',
      strokeWidth: '2.5px',
    },
    title: 'Master Chefs',
  },
  {
    subtitle,
    icon: {
      name: 'Utensils',
      className: 'icon md',
      strokeWidth: '2.5px',
    },
    title: 'Quality Food',
  },
  {
    subtitle,
    icon: {
      name: 'ShoppingCart',
      className: 'icon md',
      strokeWidth: '2.5px',
    },
    title: 'Online Order',
  },
  {
    subtitle,
    icon: {
      name: 'Headset',
      className: 'icon md',
      strokeWidth: '2.5px',
    },
    title: '24/7 Service',
  },
];
