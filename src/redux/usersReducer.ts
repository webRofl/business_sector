import { usersSortFunc } from '../utils/sort';
import { User, Item } from './../types/types';
import {
  CLEAR_FOUND_ARRAY,
  FIND_USER,
  LOAD_USERS,
  LOAD_USERS_ASYNC,
  SET_PAGE,
  USERS_SORT,
} from './usersReducerActionsType';
import {
  ActionClearFoundArray,
  ActionFindUser,
  ActionLoadUsers,
  ActionLoadUsersAsync,
  ActionSetPage,
  ActionUsersSort,
  UsersState,
} from './usersReducerTypes';

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

export const loadUsersAsync = (page: number): ActionLoadUsersAsync => ({
  type: LOAD_USERS_ASYNC,
  page,
});

export const loadUsers = (users: User[]): ActionLoadUsers => ({
  type: LOAD_USERS,
  users,
});

export const setPage = (page: number): ActionSetPage => ({
  type: SET_PAGE,
  page,
});

export const findUser = (search: string): ActionFindUser => ({
  type: FIND_USER,
  search,
});

export const usersSort = (
  isAscending: boolean,
  item: Item
): ActionUsersSort => ({
  type: USERS_SORT,
  isAscending,
  item,
});

export const clearFoundUsers = (): ActionClearFoundArray => ({
  type: CLEAR_FOUND_ARRAY,
});

export default usersReducer;
