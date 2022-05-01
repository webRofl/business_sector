import { User } from './../types/types';
export const LOAD_USERS_ASYNC = 'usersReducer/LOAD_USERS_ASYNC';

type UsersState = {
  users: Array<User>;
};

const initialState: UsersState = {
  users: [],
};

type UsersAction = ActionLoadUser;

const usersReducer = (
  state: UsersState = initialState,
  action: UsersAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

type ActionLoadUser = {
  type: typeof LOAD_USERS_ASYNC;
};

export const loadUsers = () => ({ type: LOAD_USERS_ASYNC });

export default usersReducer;
