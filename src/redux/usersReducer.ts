import { usersSortFunc } from '../utils/sort';
import { User, Item } from './../types/types';
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
import {
  ActionClearFoundArray,
  ActionFindUserAsync,
  ActionLoadUsers,
  ActionLoadUsersAsync,
  ActionSetFoundUsers,
  ActionSetPage,
  ActionSetSearchValue,
  ActionSetTotalUsersCount,
  ActionUsersSort,
  UsersState,
} from './usersReducerTypes';

const initialState: UsersState = {
  users: [],
  page: null,
  foundUsers: [],
  totalUsersCount: 0,
  searchValue: '',
};

type UsersAction =
  | ActionLoadUsers
  | ActionSetPage
  | ActionUsersSort
  | ActionClearFoundArray
  | ActionSetTotalUsersCount
  | ActionSetFoundUsers
  | ActionSetSearchValue;

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
    case CLEAR_FOUND_ARRAY:
      return {
        ...state,
        foundUsers: [],
      };
    case USERS_SORT:
      if (state.foundUsers.length) {
        return {
          ...state,
          foundUsers: usersSortFunc(
            action.isAscending,
            action.item,
            state.foundUsers
          ),
        };
      }

      return {
        ...state,
        foundUsers: usersSortFunc(action.isAscending, action.item, state.users),
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case SET_FOUND_USERS:
      return {
        ...state,
        foundUsers: action.foundUsers,
      };
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
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

export const setTotalUsersCount = (
  totalUsersCount: number
): ActionSetTotalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const findUserAsync = (
  str: string,
  page: number | null
): ActionFindUserAsync => ({
  type: FIND_USER_ASYNC,
  str,
  page,
});

export const setFoundUsers = (foundUsers: User[]): ActionSetFoundUsers => ({
  type: SET_FOUND_USERS,
  foundUsers,
});

export const setSearchValue = (searchValue: string): ActionSetSearchValue => ({
  type: SET_SEARCH_VALUE,
  searchValue,
});

export default usersReducer;
