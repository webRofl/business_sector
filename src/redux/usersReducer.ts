import { usersSortFunc } from '../utils/sort';
import { User, Item } from './../types/types';

export const LOAD_USERS_ASYNC = 'usersReducer/LOAD_USERS_ASYNC';
const LOAD_USERS = 'usersReducer/LOAD_USERS';
const SET_PAGE = 'usersReducer/SET_PAGE';
const FIND_USER = 'usersReducer/FIND_USER';
const USERS_SORT = 'usersReducer/USERS_SORT';
const CLEAR_FOUND_ARRAY = 'usersReducer/CLEAR_FOUND_ARRAY';

export type UsersState = {
  users: Array<User>;
  page: number | null;
  foundUsers: Array<User>;
};

const initialState: UsersState = {
  users: [],
  page: null,
  foundUsers: [],
};

type UsersAction =
  | ActionLoadUsersAsync
  | ActionLoadUsers
  | ActionSetPage
  | ActionFindUser
  | ActionUsersSort
  | ActionClearFoundArray;

const usersReducer = (
  state: UsersState = initialState,
  action: UsersAction
) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case FIND_USER:
      const search = action.search;
      const foundUsers = state.users.filter((user): User | undefined => {
        if (
          user.body.includes(search) ||
          user.id.toString().includes(search) ||
          user.title.includes(search)
        ) {
          return user;
        }
      });
      return {
        ...state,
        foundUsers,
      };
    case CLEAR_FOUND_ARRAY:
      return {
        ...state,
        foundUsers: [],
      };
    case USERS_SORT:
      return {
        ...state,
        foundUsers: usersSortFunc(action.isAscending, action.item, state.users),
      };
    default:
      return state;
  }
};

type ActionLoadUsersAsync = {
  type: typeof LOAD_USERS_ASYNC;
  page: number;
};

export const loadUsersAsync = (page: number): ActionLoadUsersAsync => ({
  type: LOAD_USERS_ASYNC,
  page,
});

export type ActionLoadUsers = {
  type: typeof LOAD_USERS;
  users: Array<User>;
};

export const loadUsers = (users: Array<User>): ActionLoadUsers => ({
  type: LOAD_USERS,
  users,
});

type ActionSetPage = {
  type: typeof SET_PAGE;
  page: number;
};

export const setPage = (page: number): ActionSetPage => ({
  type: SET_PAGE,
  page,
});

type ActionFindUser = {
  type: typeof FIND_USER;
  search: string;
};

export const findUser = (search: string): ActionFindUser => ({
  type: FIND_USER,
  search,
});

type ActionUsersSort = {
  type: typeof USERS_SORT;
  isAscending: boolean;
  item: Item;
};

export const usersSort = (
  isAscending: boolean,
  item: Item
): ActionUsersSort => ({
  type: USERS_SORT,
  isAscending,
  item,
});

type ActionClearFoundArray = {
  type: typeof CLEAR_FOUND_ARRAY;
};

export const clearFoundUsers = (): ActionClearFoundArray => ({
  type: CLEAR_FOUND_ARRAY,
});

export default usersReducer;
