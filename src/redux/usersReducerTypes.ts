import { Item, User } from '../types/types';
import {
  CLEAR_FOUND_ARRAY,
  FIND_USER,
  LOAD_USERS,
  LOAD_USERS_ASYNC,
  SET_PAGE,
  USERS_SORT,
} from './usersReducerActionsType';

export type UsersState = {
  users: User[];
  page: number | null;
  foundUsers: User[];
};

export type ActionLoadUsersAsync = {
  type: typeof LOAD_USERS_ASYNC;
  page: number;
};

export type ActionLoadUsers = {
  type: typeof LOAD_USERS;
  users: User[];
};

export type ActionSetPage = {
  type: typeof SET_PAGE;
  page: number;
};

export type ActionFindUser = {
  type: typeof FIND_USER;
  search: string;
};

export type ActionUsersSort = {
  type: typeof USERS_SORT;
  isAscending: boolean;
  item: Item;
};

export type ActionClearFoundArray = {
  type: typeof CLEAR_FOUND_ARRAY;
};
