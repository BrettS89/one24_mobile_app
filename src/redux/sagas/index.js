import { all, fork } from 'redux-saga/effects';
import appSagas from './app';
import userSagas from './user';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(appSagas),
    ...forkList(userSagas),
  ]);
}
