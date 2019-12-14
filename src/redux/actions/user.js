import { ON_LOGIN, ON_REGISTER, IS_LOGGED_IN, ON_FOLLOW, ON_UNFOLLOW } from './types';

export const onLogin = payload => ({
  type: ON_LOGIN,
  payload,
});

export const onRegister = payload => ({
  type: ON_REGISTER,
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
