import { combineReducers } from 'redux';
import userReducer from './user';
import appReducer from './app';
import postsReducer from './posts';
import usersReducer from './users';
import commentsReducer from './comments';
import notificationsReducer from './notifications';

export default combineReducers({
  app: appReducer,
  user: userReducer,
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  notifications: notificationsReducer,
});
