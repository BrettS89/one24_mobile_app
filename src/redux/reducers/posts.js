import { SET_POSTS, SET_DISCOVER_POSTS, SET_NEW_DISCOVER_POSTS, SET_DISCOVER_INPUT } from '../actions/types';

const INITIAL_STATE = {
  searchInput: '',
  posts: [],
  discoverPosts: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...payload],
      };

    case SET_DISCOVER_POSTS:
      return {
        ...state,
        discoverPosts: [...state.discoverPosts, ...payload],
      };

    case SET_NEW_DISCOVER_POSTS:
      return {
        ...state,
        discoverPosts: payload,
      };

    case SET_DISCOVER_INPUT:
      return {
        ...state,
        searchInput: payload,
      };

    default:
      return state;
  }
};
