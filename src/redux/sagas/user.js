import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import validateEmail from '../../utils/validateEmail';
import { usernameInput } from '../selectors';
import { validateCharacters, validateCharCount } from '../../utils/validateUsername';

export default [
  loginWatcher,
  registerWatcher,
  followWatcher,
  unfollowWatcher,
  finishAccountSetupWatcher,
  addUsernameWatcher,
];

function * registerWatcher() {
  yield takeLatest(actions.ON_REGISTER, registerHandler);
}

function * loginWatcher() {
  yield takeLatest(actions.ON_LOGIN, loginHandler);
}

function * followWatcher() {
  yield takeLatest(actions.ON_FOLLOW, followHandler);
}

function * unfollowWatcher() {
  yield takeLatest(actions.ON_UNFOLLOW, unfollowHandler);
}

function * addUsernameWatcher() {
  yield takeLatest(actions.ADD_USERNAME, addUsernameHandler);
}

function * finishAccountSetupWatcher() {
  yield takeLatest(actions.FINISH_ACCOUNT_SETUP, finishAccountSetupHandler);
}

function * loginHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.CLEAR_AUTH_ERRORS });
    yield put({ type: actions.APP_LOADING });
    const { data, token } = yield call(api.login, form);
    yield AsyncStorage.setItem('token', token);
    yield put({ type: actions.SET_USER_DATA, payload: data });
    if (!data.username) {
      navigate('AddUsername');
      yield put({ type: actions.APP_NOT_LOADING });
      return;
    }
    navigate('Feed');
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.SET_LOGIN_ERROR, payload: e.message });
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('loginHandler error: ', e.message);
  }
}

function * registerHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.CLEAR_AUTH_ERRORS });
    yield put({ type: actions.APP_LOADING });
    if (!validateEmail(form.email)) {
      throw new Error('Must provide a valid email');
    }
    const { data, token } = yield call(api.register, form);
    yield AsyncStorage.setItem('token', token);
    navigate();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.SET_REGISTRATION_ERROR, payload: e.message });
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('registerHandler error: ', e.message);
  }
}

function * followHandler({ payload }) {
  try {
    yield call(api.follow, payload);
  } catch(e) {
    console.log('follow error: ', e.message);
  }
}

function * unfollowHandler({ payload }) {
  try {
    yield call (api.unFollow, payload);
  } catch(e) {
    console.log('unfollow error: ', e.message);
  }
}

function * finishAccountSetupHandler({ payload }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const { data } = yield call(api.getUserData);
    yield put({ type: actions.SET_USER_DATA, payload: data });
    // payload is a navigate function
    payload();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('finishAccountSetupHandler error: ', e);
  }
}

function * addUsernameHandler({ payload }) {
  try {
    yield put({ type: actions.APP_LOADING });
    yield put({ type: actions.SET_USERNAME_ERROR, payload: null });
    const username = yield select(usernameInput);
    validateCharCount(username);
    validateCharacters(username);
    const { data } = yield call(api.addUsername, { username });
    yield put({ type: actions.SET_USER_DATA, payload: data });
    yield put({ type: actions.SET_USERNAME, payload: '' });
    payload();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.SET_USERNAME_ERROR, payload: e.message });
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('addUsernameHandler error: ', e);
  }
}
