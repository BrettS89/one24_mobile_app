import { SET_POSTS } from '../actions/types';

const INITIAL_STATE = {
  posts: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
      };

    default:
      return state;
  }
};
