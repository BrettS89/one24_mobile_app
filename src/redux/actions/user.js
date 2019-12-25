import { ON_LOGIN, ON_REGISTER, IS_LOGGED_IN, ON_FOLLOW, ON_UNFOLLOW, FINISH_ACCOUNT_SETUP, ADD_USERNAME, SET_USERNAME } from './types';

export const onLogin = payload => ({
  type: ON_LOGIN,
  payload,
});

export const onRegister = payload => ({
  type: ON_REGISTER,
  payload,
});

export const setUsername = payload => ({
  type: SET_USERNAME,
  payload,
});

export const addUsername = payload => ({
  type: ADD_USERNAME,
  payload,
});

export const finishAccountSetup = payload => ({
  type: FINISH_ACCOUNT_SETUP,
  payload,
});

export const isLoggedIn = () => ({
  type: IS_LOGGED_IN,
});

export const follow = payload => ({
  type: ON_FOLLOW,
  payload,
});

export const unfollow = payload => ({
  type: ON_UNFOLLOW,
  payload,
});
