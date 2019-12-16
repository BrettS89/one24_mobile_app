import { GET_POSTS, DISCOVER_POSTS, SEARCH_POSTS, DISCOVER_SCROLL } from './types';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const discoverPosts = () => ({
  type: DISCOVER_POSTS,
});

export const searchPosts = payload => ({
  type: SEARCH_POSTS,
  payload,
});

export const discoverScroll = () => ({
  type: DISCOVER_SCROLL,
});
