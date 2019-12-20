import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { commentPost } from '../selectors';

export default [
  addCommentWatcher,
];

function * addCommentWatcher() {
  yield takeLatest(actions.ADD_COMMENT, addCommentHandler);
}

function * addCommentHandler({ payload }) {
  try {
    const postId = yield select(commentPost);
    payload.post = postId;
    const { data } = yield call(api.addComment, payload);
    yield put({ type: actions.ADD_COMMENT, payload: data });
  } catch(e) {
    console.log('addComment handler error: ', e);
  }
}
