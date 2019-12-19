import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import * as actions from '../actions/types';
import * as api from '../../lib/api';

export default [
  getCommentsWatcher,
];

function * getCommentsWatcher() {
  yield takeLatest(actions.GET_COMMENTS, getCommentsHandler);
}

function * getCommentsHandler() {
  try {

  } catch(e) {
    console.log('getComments handler error: ', e);
  }
}
