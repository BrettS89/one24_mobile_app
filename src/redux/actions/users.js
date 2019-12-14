import { GET_USERS, SEARCH_USERS, ON_USERS_SCROLL } from './types';

export const getUsers = () => ({
  type: GET_USERS,
});

export const searchUsers = payload => ({
  type: SEARCH_USERS,
  payload,
});

export const onUsersScroll = () => ({
  type: ON_USERS_SCROLL,
});
