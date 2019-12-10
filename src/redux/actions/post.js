import { ADD_POST } from './types';

export const addPost = payload => ({
  type: ADD_POST,
  payload,
});
