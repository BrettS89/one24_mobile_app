import { SET_COMMENT, SET_COMMENTS, SET_SCROLL_COMMENTS, SET_POST_ID } from '../actions/types';

const INITIAL_STATE = {
  comments: [],
  postId: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_COMMENTS:
      return {
        ...state,
        comments: payload,
      };

    case SET_COMMENT:
      return {
        ...state,
        comments: [payload, ...state.comments],
      };

    case SET_SCROLL_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...payload],
      };

    case SET_POST_ID:
      return {
        ...state,
        postid: payload,
      };

    default:
      return state;
  }
};
