import { request } from '@services/index';
import { AxiosRequestConfig } from 'axios';

// - Types
import { Settings } from '@types.app/api';

export const normalizeHeaderItem = (settings: Settings) =>
  settings?.headerItems?.map(item => {
    const path = item.path === 'home' ? '' : item.path;
    return {
      path: '/' + path,
      name: item.label,
      title: item.title,
      group: item.group,
    };
  });

export const normalizeSettings = (settings: Settings) => ({
  ...settings,
  headerItems: normalizeHeaderItem(settings),
});

export const getSettings = async (): Promise<Settings> => {
  const config: AxiosRequestConfig = {
    url: '/settings',
    method: 'get',
  };
  const res = await request({ config });
  return res.data;
};
