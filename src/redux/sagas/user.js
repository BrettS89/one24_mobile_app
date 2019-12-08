import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  loginWatcher,
  registerWatcher,
];

function * registerWatcher() {
  yield takeLatest(actions.ON_REGISTER, registerHandler);
}

function * loginWatcher() {
  yield takeLatest(actions.ON_LOGIN, loginHandler);
}

function * loginHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.CLEAR_AUTH_ERRORS });
    yield put({ type: actions.APP_LOADING });
    const res = yield call(api.login, form);
    yield AsyncStorage.setItem('token', res.token);
    navigate();
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
    const res = yield call(api.register, form);
    yield AsyncStorage.setItem('token', res.token);
    navigate();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.SET_REGISTRATION_ERROR, payload: e.message });
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('registerHandler error: ', e.message);
  }
}

