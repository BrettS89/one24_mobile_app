import { GET_POSTS, DISCOVER_POSTS } from './types';

export const getPosts = () => ({
  type: GET_POSTS,
});

export const discoverPosts = () => ({
  type: DISCOVER_POSTS,
});
