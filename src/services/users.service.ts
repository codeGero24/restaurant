import { request } from '.';
import { AxiosRequestConfig } from 'axios';

import { review, profession } from '@mock/index';

// - Types
import { Users, User } from '@types.app/api';

export const normalizeUser = (res: Users): Array<User> | undefined => {
  if (res.users) {
    return res.users.map(item => ({
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      name: item.firstName + item.lastName,
      review: item.review || review,
      profession: item.profession || profession,
      role: item.role,
      email: item.email,
      img: {
        src: item.image || 'https://placehold.co/60x60',
        alt: `user-${item.firstName + item.lastName}`,
      },
    }));
  }
};

// ----------------
// -     GET      -
// ----------------
export const getUsers = async (): Promise<User[] | undefined> => {
  const config: AxiosRequestConfig = {
    url: '/users',
    method: 'get',
  };
  const res = await request({ config });
  const users = normalizeUser(res.data);
  return users;
};

export const getFilterUsers = async (): Promise<User[] | undefined> => {
  const config: AxiosRequestConfig = {
    url: '/users/filter',
    method: 'get',
  };
  const res = await request({ config });
  const users = normalizeUser(res.data);
  return users;
};

export const getSearchrUsers = async (): Promise<User[] | undefined> => {
  const config: AxiosRequestConfig = {
    url: '/users/search',
    method: 'get',
  };
  const res = await request({ config });
  const users = normalizeUser(res.data);
  return users;
};

// ----------------
// -     POST     -
// ----------------

// ----------------
// -     PUT      -
// ----------------

// ----------------
// -     DELETE   -
// ----------------
