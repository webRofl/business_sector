import { ActionLoadUsers, loadUsers } from './../usersReducer';
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
} from 'redux-saga/effects';
import { getUsers, GetUsersResponse } from '../../api/usersApi';
import { LOAD_USERS_ASYNC } from '../usersReducer';
import { User } from '../../types/types';

type LoadWorkerAction = {
  type: typeof LOAD_USERS_ASYNC;
  page: number;
};

type ResponseLoadUsers = {
  data: User[];
  status: number;
};

function* loadUsersWorker(
  action: LoadWorkerAction
): Generator<
  CallEffect<GetUsersResponse> | PutEffect<ActionLoadUsers>,
  void,
  ResponseLoadUsers
> {
  const data = yield call(() => getUsers(action.page));
  if (data.status === 200) {
    yield put(loadUsers(data.data));
  }
}

export function* loadUsersWatcher() {
  yield takeEvery(LOAD_USERS_ASYNC, loadUsersWorker);
}
