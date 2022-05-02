import { loadUsers } from './../usersReducer';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getUsers } from '../../api/usersApi';
import { LOAD_USERS_ASYNC } from '../usersReducer';

type LoadWorkerAction = {
  type: typeof LOAD_USERS_ASYNC;
  page: number;
};

function* loadUsersWorker(action: LoadWorkerAction) {
  //@ts-ignore
  const data = yield call(() => getUsers(action.page));
  if (data.status === 200) {
    yield put(loadUsers(data.data));
  }
}

export function* loadUsersWatcher() {
  yield takeEvery(LOAD_USERS_ASYNC, loadUsersWorker);
}
