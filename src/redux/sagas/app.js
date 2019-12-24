import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  appLoadWatcher,
];

function * appLoadWatcher() {
  yield takeLatest(actions.ON_APP_LOAD, appLoadHandler);
}

function * appLoadHandler({ payload }) {
  try {
    // yield put({ type: actions.APP_LOADING });
    const { data } = yield call(api.isLoggedIn);
    yield put({ type: actions.SET_USER_DATA, payload: data.user });
    // yield put({ type: actions.APP_NOT_LOADING });
    payload('success');
    // yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    // yield put({ type: actions.APP_NOT_LOADING });
    payload('failure');
    console.log(e);
  }
}
