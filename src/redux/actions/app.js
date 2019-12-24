import { ON_APP_LOAD, SET_PREV_SCREEN, APP_LOADING, APP_NOT_LOADING } from './types';

export const appLoad = payload => ({
  type: ON_APP_LOAD,
  payload,
});

export const setPrevScreen = payload => ({
  type: SET_PREV_SCREEN,
  payload,
});

export const appIsLoading = () => ({
  type: APP_LOADING,
});

export const appIsNotLoading = () => ({
  type: APP_NOT_LOADING,
});
