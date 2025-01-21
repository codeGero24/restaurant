import { create } from 'zustand';

import { Settings } from '@types.app/api';

type SettingsState = {
  settings: Settings;
};

type SettingsActions = {
  setSettings: (settings: Settings) => void;
};

const initialState: SettingsState = {
  settings: {
    appName: 'Beije Restaurant',
    bookingFormFields: [],
    headerItems: [],
  },
};

const useSettingsStore = create<SettingsState & SettingsActions>(set => ({
  ...initialState,
  setSettings: (settings: Settings) => set({ settings }),
}));

// SETTERS
const setSettings = (state: SettingsActions) => state.setSettings;

// GETTERS
const getSettings = (state: SettingsState) => state.settings;

export { setSettings, getSettings };

export default useSettingsStore;
