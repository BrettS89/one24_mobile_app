import { ON_APP_LOAD } from './types';

export const appLoad = payload => ({
  type: ON_APP_LOAD,
  payload,
});
