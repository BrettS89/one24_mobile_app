import { SET_NOTIFICATIONS } from '../actions/types';

const INITIAL_STATE = {
  notifications: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: payload,
      };

    default:
      return state;
  }
};
