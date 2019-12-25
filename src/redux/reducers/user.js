import { SET_LOGIN_ERROR, SET_REGISTRATION_ERROR, CLEAR_AUTH_ERRORS, SET_USER_DATA, SET_USERNAME, SET_USERNAME_ERROR } from '../actions/types';

const INITIAL_STATE = {
  user: {},
  loginError: null,
  registrationError: null,
  usernameInput: '',
  usernameError: null,
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

    case SET_USERNAME:
      return {
        ...state,
        usernameInput: payload,
      };
    
    case SET_USERNAME_ERROR:
      return {
        ...state,
        usernameError: payload,
      };

    default:
      return state;
  }
};
