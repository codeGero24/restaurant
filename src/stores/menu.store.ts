import { create } from 'zustand';

import { plate, tabMenu } from '@types.app/index';
import { menu } from '@mock/menu';

type MenuState = {
  menu: {
    tabs: tabMenu[];
    plates: plate[];
  };
};

type MenuActions = {
  setActiveTab: (timeMenuKey: tabMenu['id']) => void;
};

const initialState: MenuState = {
  menu: {
    tabs: menu.tabs,
    plates: menu.breakfast,
  },
};

const useMenuStore = create<MenuState & MenuActions>(set => ({
  ...initialState,
  setActiveTab: (timeMenuKey: tabMenu['id']) =>
    set(state => {
      const updateActiveTab = (tabs: tabMenu[]) =>
        tabs.map(tab => ({
          ...tab,
          isActive: timeMenuKey === tab.id,
        }));

      const newTabs = updateActiveTab(state.menu.tabs);
      const activeTab = newTabs.find(tab => Boolean(tab.isActive))?.id || 'breakfast';

      return {
        ...state,
        menu: {
          tabs: newTabs,
          plates: menu[activeTab],
        },
      };
    }),
}));

// SETTERS
const setActiveTab = (state: MenuActions) => state.setActiveTab;

// GETTERS
const getTabs = (state: MenuState) => state.menu.tabs;
const getPlates = (state: MenuState) => state.menu.plates;

export { setActiveTab, getTabs, getPlates };

export default useMenuStore;
