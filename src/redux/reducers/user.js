import { SET_LOGIN_ERROR, SET_REGISTRATION_ERROR, CLEAR_AUTH_ERRORS, SET_USER_DATA } from '../actions/types';

const INITIAL_STATE = {
  user: {},
  loginError: null,
  registrationError: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: payload,
      };

    case SET_REGISTRATION_ERROR:
      return {
        ...state,
        registrationError: payload,
      };

    case CLEAR_AUTH_ERRORS:
      return {
        ...state,
        registrationError: null,
        loginError: null,
      };

    case SET_USER_DATA:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
