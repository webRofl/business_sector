import { Item, User } from '../types/types';
import {
  CLEAR_FOUND_ARRAY,
  FIND_USER_ASYNC,
  LOAD_USERS,
  LOAD_USERS_ASYNC,
  SET_FOUND_USERS,
  SET_PAGE,
  SET_SEARCH_VALUE,
  SET_TOTAL_USERS_COUNT,
  USERS_SORT,
} from './usersReducerActionsType';

export type UsersState = {
  users: User[];
  page: number | null;
  foundUsers: User[];
  totalUsersCount: number;
  searchValue: string;
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

export type ActionUsersSort = {
  type: typeof USERS_SORT;
  isAscending: boolean;
  item: Item;
};

export type ActionClearFoundArray = {
  type: typeof CLEAR_FOUND_ARRAY;
};

export type ActionSetTotalUsersCount = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
};

export type ActionFindUserAsync = {
  type: typeof FIND_USER_ASYNC;
  str: string;
  page: number | null;
};

export type ActionSetFoundUsers = {
  type: typeof SET_FOUND_USERS;
  foundUsers: User[];
};

export type ActionSetSearchValue = {
  type: typeof SET_SEARCH_VALUE;
  searchValue: string;
};
