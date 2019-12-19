import { all, fork } from 'redux-saga/effects';
import appSagas from './app';
import userSagas from './user';
import usersSagas from './users';
import postSagas from './post';
import postsSagas from './posts';
import commentSagas from './comment';
import commentsSagas from './comments';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(appSagas),
    ...forkList(userSagas),
    ...forkList(usersSagas),
    ...forkList(postSagas),
    ...forkList(postsSagas),
    ...forkList(commentSagas),
    ...forkList(commentsSagas),
  ]);
}
