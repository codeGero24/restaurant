import { User } from '@types.app/api';
import { create } from 'zustand';

type UsersState = {
  users: User[];
};

type UsersActions = {
  addUser: (review: User) => void;
  setUsers: (Users: User[]) => void;
};

const initialState: UsersState = {
  users: [],
};

const useUsersStore = create<UsersState & UsersActions>(set => ({
  ...initialState,
  setUsers: (users: User[]) => set({ users }),
  addUser: (user: User) => set(state => ({ users: [...state.users, user] })),
}));

// SETTERS
const setUsers = (state: UsersActions) => state.setUsers;
const addReview = (state: UsersActions) => state.addUser;

// GETTERS
const getUsers = (state: UsersState) => state.users;

export { setUsers, addReview, getUsers };

export default useUsersStore;
