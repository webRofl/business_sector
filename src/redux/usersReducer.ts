import { User } from './../types/types';

export const LOAD_USERS_ASYNC = 'usersReducer/LOAD_USERS_ASYNC';
const LOAD_USERS = 'usersReducer/LOAD_USERS';

export type UsersState = {
  users: Array<User>;
};

const initialState: UsersState = {
  users: [],
};

type UsersAction = ActionLoadUsersAsync | ActionLoadUsers;

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

export default usersReducer;
