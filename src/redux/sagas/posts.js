import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { postsState, discoverPostsState } from '../selectors';

export default [
  getPostsWatcher,
  discoverPostsWatcher,
];

function * getPostsWatcher() {
  yield takeLatest(actions.GET_POSTS, getPostsHandler);
}

function * discoverPostsWatcher() {
  yield takeLatest(actions.DISCOVER_POSTS, discoverPostsHandler);
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

function * discoverPostsHandler() {
  try {
    const posts = yield select(discoverPostsState);
    const { data } = yield call(api.discoverPosts, posts.length);
    yield put({ type: actions.SET_DISCOVER_POSTS, payload: data });
  } catch(e) {
    console.log('discoverPostsHandler error:', e);
  }
}
