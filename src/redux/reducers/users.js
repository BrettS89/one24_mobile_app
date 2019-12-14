import { SET_USERS, SET_NEW_USERS, SET_SEARCH_INPUT } from '../actions/types';

const INITIAL_STATE = {
  // search input only used for infinite scroll
  searchInput: '',
  users: [],
  followers: [],
  following: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...payload],
      };

    case SET_NEW_USERS:
      return {
        ...state,
        users: payload,
      };

    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: payload,
      };

    default:
      return state;
  }
};
