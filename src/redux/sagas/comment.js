import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  addCommentWatcher,
];

function * addCommentWatcher() {
  yield takeLatest(actions.ADD_COMMENT, addCommentHandler);
}

function * addCommentHandler({ payload }) {
  try {
    const { data } = yield call(api.addComment, payload);
    yield put({ type: actions.ADD_COMMENT, payload: data });
  } catch(e) {
    console.log('addComment handler error: ', e);
  }
}
