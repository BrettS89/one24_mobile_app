import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { usersState, usersSearchInput } from '../selectors';

export default [
  getUsersWatcher,
  searchUsersWatcher,
  usersScrollWatcher,
];

function * getUsersWatcher() {
  yield takeLatest(actions.GET_USERS, getUsersHandler);
}

function * searchUsersWatcher() {
  yield takeLatest(actions.SEARCH_USERS, searchUsersHandler);
}

function * usersScrollWatcher() {
  yield takeLatest(actions.ON_USERS_SCROLL, usersScrollHandler);
}

function * getUsersHandler() {
  try {
    yield put({ type: actions.APP_LOADING });
    const users = yield select(usersState);
    const { data } = yield call(api.getUsers, users.length);
    yield put({ type: actions.SET_USERS, payload: data });
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('getUsersHandler error: ', e.message);
  }
}

function * searchUsersHandler({ payload }) {
  try {
    yield put({ type: actions.SET_SEARCH_INPUT, payload, })
    if (!payload.length) {
      yield put({ type: actions.SET_NEW_USERS, payload: [] });
      return yield getUsersHandler();
    }
    yield put({ type: actions.SET_NEW_USERS, payload: [] });
    const { data } = yield call(api.searchUsers, payload, 0);
    yield put({ type: actions.SET_NEW_USERS, payload: data });
  } catch(e) {
    console.log('searchUsersHandler error', e.message);
  }
}

function * usersScrollHandler() {
  try {
    const users = yield select(usersState);
    const searchInput = yield select(usersSearchInput);
    let usersArr = [];
    if (!searchInput) {
      const { data } = yield call(api.getUsers, users.length);
      usersArr = [...users, ...data];
    } else {
      const { data } = yield call(api.searchUsers, searchInput, users.length);
      usersArr = [...users, ...data];;
    }
    yield put({ type: actions.SET_NEW_USERS, payload: usersArr });
  } catch(e) {
    console.log('usersScrollHadler error: ', e);
  }
}
