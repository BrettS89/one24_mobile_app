import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { postsState } from '../selectors';

export default [
  getPostsWatcher
];

function * getPostsWatcher() {
  yield takeLatest(actions.GET_POSTS, getPostsHandler);
}

function * getPostsHandler() {
  try {
    yield put({ type: actions.APP_LOADING });
    const posts = yield select(postsState);
    const { data } = yield call(api.getPosts, posts.length);
    yield put({ type: actions.SET_POSTS, payload: data });
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('getPosts error: ', e.message);
  }
}
