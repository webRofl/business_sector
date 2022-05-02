import { User } from './../types/types';

export const LOAD_USERS_ASYNC = 'usersReducer/LOAD_USERS_ASYNC';
const LOAD_USERS = 'usersReducer/LOAD_USERS';
const UPDATE_PAGE_BACK = 'usersReducer/UPDATE_PAGE_BACK';
const UPDATE_PAGE_UP = 'usersReducer/UPDATE_PAGE_UP';

export type UsersState = {
  users: Array<User>;
  page: number;
};

const initialState: UsersState = {
  users: [],
  page: 1,
};

type UsersAction =
  | ActionLoadUsersAsync
  | ActionLoadUsers
  | ActionUpdatePageBack
  | ActionUpdatePageUp;

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
    case UPDATE_PAGE_BACK:
      return {
        ...state,
        page: (state.page -= 1),
      };
    case UPDATE_PAGE_UP:
      return {
        ...state,
        page: (state.page += 1),
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

type ActionLoadUsers = {
  type: typeof LOAD_USERS;
  users: Array<User>;
};

export const loadUsers = (users: Array<User>): ActionLoadUsers => ({
  type: LOAD_USERS,
  users,
});

type ActionUpdatePageBack = {
  type: typeof UPDATE_PAGE_BACK;
};

export const updatePageBack = (): ActionUpdatePageBack => ({
  type: UPDATE_PAGE_BACK,
});

type ActionUpdatePageUp = {
  type: typeof UPDATE_PAGE_UP;
};

export const updatePageUp = (): ActionUpdatePageUp => ({
  type: UPDATE_PAGE_UP,
});

export default usersReducer;
