import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  getNotificationsWatcher,
];

function * getNotificationsWatcher() {
  yield takeLatest(actions.GET_NOTIFICATIONS, getNotificationsHandler);
}

function * getNotificationsHandler() {
  try {
    yield put({ type: actions.APP_LOADING });
    const { data } = yield call(api.getNotifications);
    yield put({ type: actions.SET_NOTIFICATIONS, payload: data });
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('getNotifications handler error: ', e);
  }
}
