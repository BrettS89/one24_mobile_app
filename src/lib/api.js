import { AsyncStorage } from 'react-native';
import { URI } from '../config';
import errorThrower from '../utils/errorThrower';

async function getToken() {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('no token');
  return token;
}

export async function isLoggedIn() {
  const res = await fetch(`${URI}/user/isloggedin`, {
    method: 'get',
    headers: {
      'authorization': await getToken(),
      'Content-Type': 'application/json',
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function register(body) {
  const res = await fetch(`${URI}/user/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function login(body) {
  const res = await fetch(`${URI}/user/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function addPost(body) {
  const res = await fetch(`${URI}/post/add`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function getPosts(offset) {
  const res = await fetch(`${URI}/posts/get?offset=${offset}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function discoverPosts(offset) {
  const res = await fetch(`${URI}/posts/discover?offset=${offset}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function searchPosts(term, offset) {
  const res = await fetch(`${URI}/posts/search?term=${term}&offset=${offset}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function follow(body) {
  const res = await fetch(`${URI}/user/follow`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function unFollow(body) {
  const res = await fetch(`${URI}/user/unfollow?id=${body}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function getUsers(offset) {
  const res = await fetch(`${URI}/users/get?offset=${offset}`, {
    mehtod: 'get',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function searchUsers(name, offset) {
  const res = await fetch(`${URI}/users/search?name=${name}&offset=${offset}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function likePost(body) {
  const res = await fetch(`${URI}/post/like`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}

export async function addComment(body) {
  const res = await fetch(`${URI}/comment/add`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response;
}
