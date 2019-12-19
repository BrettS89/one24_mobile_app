import { ADD_COMMENT } from './types';

export const addComment = payload => ({
  type: ADD_COMMENT,
  payload,
});
