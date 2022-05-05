import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadUsersWatcher } from './saga/LoadUsersSaga';
import usersReducer from './usersReducer';
import { UsersState } from './usersReducerTypes';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  users: usersReducer,
});

export type GlobalState = {
  users: UsersState;
};

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loadUsersWatcher);

export default store;
