import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@services/constants.service';


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

export async function request({ config }: { config: AxiosRequestConfig }) {
    return await instance.request(config);
}

export * from './constants.service';
export * from './reviews.service';