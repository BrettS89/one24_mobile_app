import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';
import { postsState, discoverPostsState, discoverSearchInput } from '../selectors';

export default [
  getPostsWatcher,
  discoverPostsWatcher,
  searchPostsWatcher,
  discoverScrollWatcher,
];

function * getPostsWatcher() {
  yield takeLatest(actions.GET_POSTS, getPostsHandler);
}

function * discoverPostsWatcher() {
  yield takeLatest(actions.DISCOVER_POSTS, discoverPostsHandler);
}

function * searchPostsWatcher() {
  yield takeLatest(actions.SEARCH_POSTS, searchPostsHandler);
}

function * discoverScrollWatcher() {
  yield takeLatest(actions.DISCOVER_SCROLL, discoverScrollHanlder);
}

function * getPostsHandler() {
  try {
    // yield put({ type: actions.APP_LOADING });
    const posts = yield select(postsState);
    const { data } = yield call(api.getPosts, posts.length);
    yield put({ type: actions.SET_POSTS, payload: data });
    // yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    // yield put({ type: actions.APP_NOT_LOADING });
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

function * searchPostsHandler({ payload }) {
  try {
    yield put({ type: actions.SET_DISCOVER_INPUT, payload, });
    if (!payload.length) {
      yield put({ type: actions.SET_NEW_DISCOVER_POSTS, payload: [] });
      return yield discoverPostsHandler();
    }
    yield put({ type: actions.SET_NEW_DISCOVER_POSTS, payload: [] });
    const { data } = yield call(api.searchPosts, payload, 0);
    yield put({ type: actions.SET_NEW_DISCOVER_POSTS, payload: data });
  } catch(e) {
    console.log('searchPostsHandler', e);
  }
}

function * discoverScrollHanlder() {
  try {
    const posts = yield select(discoverPostsState);
    const searchInput = yield select(discoverSearchInput);
    if (!searchInput) {
      const { data } = yield call(api.discoverPosts, posts.length);
      yield put({ type: actions.SET_DISCOVER_POSTS, payload: data });
    } else {
      const { data } = yield call(api.searchPosts, searchInput, posts.length);
      yield put({ type: actions.SET_DISCOVER_POSTS, payload: data });
    }
  } catch(e) {
    console.log('discoverScrollHandler error: ', e);
  }
}
