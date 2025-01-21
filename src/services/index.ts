import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@services/constants.service';
import { QueryClient, QueryFunction, QueryKey } from '@tanstack/react-query';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export async function request({ config }: { config: AxiosRequestConfig }) {
  return await instance.request(config);
}

interface fetchQueryParams {
  queryClient: QueryClient;
  queryKey: QueryKey;
  queryFn: QueryFunction;
}
export const fetchQuery = ({ queryClient, queryKey, queryFn }: fetchQueryParams) => {
  return queryClient.fetchQuery({
    queryKey,
    queryFn,
  });
};

export * from './constants.service';
export * from './reviews.service';
export * from './settings.service';
