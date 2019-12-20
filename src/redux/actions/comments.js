import { GET_COMMENTS, SCROLL_COMMENTS, SET_POST_ID } from './types';

export const getComments = () => ({
  type: GET_COMMENTS,
});

export const scrollComments = () => ({
  type: SCROLL_COMMENTS,
});

export const setPostId = payload => ({
  type: SET_POST_ID,
  payload,
});
