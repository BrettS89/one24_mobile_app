import { SET_COMMENT, SET_COMMENTS } from '../actions/types';

const INITIAL_STATE = {
  comments: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case SET_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...payload],
      };

    case SET_COMMENT:
      return {
        ...state,
        comments: [payload, ...state.comments],
      };

    default:
      return state;
  }
};
