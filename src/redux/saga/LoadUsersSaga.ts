import { takeEvery } from 'redux-saga/effects';
import { LOAD_USERS_ASYNC } from '../usersReducer';

function* loadUsersWorker() {}

export function* loadUsersWatcher() {
  yield takeEvery(LOAD_USERS_ASYNC, loadUsersWorker);
}
