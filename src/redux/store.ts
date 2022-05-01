import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadUsersWatcher } from './saga/LoadUsersSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loadUsersWatcher);

export default store;
