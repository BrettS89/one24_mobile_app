import errorThrower from './errorThrower';

export default async (url, file, type) => {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': type,
    },
    body: file,
  });
  const response = await res.blob();
  errorThrower(res, response);
  return response;
};
