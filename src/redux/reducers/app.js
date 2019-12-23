import { APP_LOADING, APP_NOT_LOADING, SET_PREV_SCREEN } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  prevScreen: 'Feed',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case APP_LOADING:
      return {
        ...state,
        loading: true,
      };

    case APP_NOT_LOADING:
      return {
        ...state,
        loading: false,
      };

    case SET_PREV_SCREEN:
      return {
        ...state,
        prevScreen: payload,
      }

    default:
      return state;
  }
};
