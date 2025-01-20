import { tabMenu, Menu } from '@types.app/data';
import { generateMenu } from './generate.data';

export const tabsMenu: tabMenu[] = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    content: 'Popular',
    nameIcon: 'Coffee',
    isActive: true,
  },
  {
    id: 'launch',
    title: 'Launch',
    content: 'Special',
    nameIcon: 'Pizza',
    isActive: false,
  },
  {
    id: 'dinner',
    title: 'Dinner',
    content: 'Lovely',
    nameIcon: 'Utensils',
    isActive: false,
  },
];

export const menu: Menu = {
  tabs: tabsMenu,
  breakfast: generateMenu(8),
  launch: generateMenu(6),
  dinner: generateMenu(4),
};
