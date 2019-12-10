import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  getUsersWatcher,
];

function * getUsersWatcher() {
  yield takeLatest(actions.GET_USERS, getUsersHandler);
}


function * getUsersHandler({ payload }) {
  try {
    yield put({ type: actions.APP_LOADING });
    // do stuff
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('getUsersHandler error: ', e.message);
  }
}
