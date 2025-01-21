import { request } from '.';
import { AxiosRequestConfig } from 'axios';

// - Types
import { Settings } from '@types.app/api';

export const getSettings = async (): Promise<Settings> => {
  const config: AxiosRequestConfig = {
    url: '/settings',
    method: 'get',
  };
  const res = await request({ config });
  return res.data;
};
