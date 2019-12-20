import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { commentsState, commentPost } from '../selectors';

export default [
  getCommentsWatcher,
  scrollCommentsWatcher,
];

function * getCommentsWatcher() {
  yield takeLatest(actions.GET_COMMENTS, getCommentsHandler);
}

function * scrollCommentsWatcher() {
  yield takeLatest(actions.SCROLL_COMMENTS, scrollCommentsHandler);
}

function * getCommentsHandler() {
  try {
    const postId = yield select(commentPost);
    const { data } = yield call(api.getComments, postId, 0);
    yield put({ type: actions.SET_COMMENTS, payload: data });
  } catch(e) {
    console.log('getComments handler error: ', e);
  }
}

function * scrollCommentsHandler() {
  try {
    const postId = yield select(commentPost);
    const comments = yield select(commentsState);
    const { data } = yield call(api.getComments, postId, comments.length);
    yield put({ type: actions.SET_SCROLL_COMMENTS, payload: data });
  } catch(e) {
    console.log('scrollCommentsHandler error: ', e);
  }
}
