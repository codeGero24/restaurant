// -- HOOKS
import { useQuery } from '@tanstack/react-query';
import {
  GET_USERS_KEY,
  INVALIDATION_KEY,
  getUsers,
  getFilterUsers,
} from '@services/index';

// - Types
import { User } from '@types.app/api';

export interface paramsGetUser {
  limit?: number;
  select?: string;
  skip?: number;
  sortBy?: keyof User;
  order?: 'asc' | 'dsc';
}

export const useGetUsers = ({ params }: { params: paramsGetUser }) => {
  return useQuery({
    queryKey: [INVALIDATION_KEY, GET_USERS_KEY, params],
    queryFn: getUsers,
  });
};

export interface paramsFilterUser {
  limit?: number;
  select?: string;
  skip?: number;
  sortBy?: keyof User;
  order?: 'asc' | 'dsc';
}

export const useFilterUsers = ({ params }: { params: paramsFilterUser }) => {
  return useQuery({
    queryKey: [INVALIDATION_KEY, GET_USERS_KEY, params],
    queryFn: getFilterUsers,
  });
};
