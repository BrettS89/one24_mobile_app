import { ON_LOGIN, ON_REGISTER, IS_LOGGED_IN } from './types';

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
