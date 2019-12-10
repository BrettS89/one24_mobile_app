import { SET_USERS } from '../actions/types';

const INITIAL_STATE = {
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

    default:
      return state;
  }
};
