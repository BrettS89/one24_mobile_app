import { Alert } from 'react-native';
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
    yield put({ type: actions.SET_COMMENT, payload: data });
  } catch(e) {
    Alert.alert('You already commented today', 'You can only leave one comment a day :)', 
      [
        {text: 'Okay', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false },
    );
    console.log('addComment handler error: ', e);
  }
}
