import { setTotalUsersCount, setFoundUsers } from './../usersReducer';
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import { findUser, getUsers, GetUsersResponse } from '../../api/usersApi';
import { User } from '../../types/types';
import { loadUsers } from '../usersReducer';
import { FIND_USER_ASYNC, LOAD_USERS_ASYNC } from '../usersReducerActionsType';
import {
  ActionLoadUsers,
  ActionSetFoundUsers,
  ActionSetTotalUsersCount,
} from '../usersReducerTypes';

type LoadWorkerAction = {
  type: typeof LOAD_USERS_ASYNC;
  page: number;
};

type ResponseLoadUsersHeaders = {
  ['x-total-count']: number;
};

type ResponseLoadUsers = {
  data: User[];
  status: number;
  headers: ResponseLoadUsersHeaders;
};

function* loadUsersWorker(
  action: LoadWorkerAction
): Generator<
  | CallEffect<GetUsersResponse>
  | PutEffect<ActionLoadUsers>
  | PutEffect<ActionSetTotalUsersCount>,
  void,
  ResponseLoadUsers
> {
  const data = yield call(() => getUsers(action.page));

  if (data.status === 200) {
    yield put(loadUsers(data.data));
    yield put(setTotalUsersCount(Number(data.headers['x-total-count'])));
  }
}

type FindUsersWorkerAction = {
  type: typeof FIND_USER_ASYNC;
  str: string;
  page: number;
};

function* findUserWorker(
  action: FindUsersWorkerAction
): Generator<
  | CallEffect<GetUsersResponse>
  | PutEffect<ActionSetFoundUsers>
  | PutEffect<ActionSetTotalUsersCount>,
  void,
  ResponseLoadUsers
> {
  const data = yield call(() => findUser(action.str, action.page));

  if (data.status === 200) {
    yield put(setFoundUsers(data.data));
    yield put(setTotalUsersCount(data.headers['x-total-count']));
  }
}

export function* loadUsersWatcher() {
  yield takeEvery(LOAD_USERS_ASYNC, loadUsersWorker);
  yield takeEvery(FIND_USER_ASYNC, findUserWorker);
}
