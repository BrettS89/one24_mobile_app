import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  addPostWatcher
];

function * addPostWatcher() {
  yield takeLatest(actions.ADD_POST, addPostHandler);
}

function * addPostHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const res = yield call(api.addPost, form);
    navigate();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('addPostHandler error: ', e.message);
  }
}
