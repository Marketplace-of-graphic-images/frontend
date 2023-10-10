import { baseUrl as api } from 'constants/baseUrl';

const checkResponse = (res: Response) => (res.ok ? res.json() 
// eslint-disable-next-line
  : res.json().then((err: any) => Promise.reject(err)));

export const request = (
  url: string, 
  config: RequestInit,
): Promise<any> => fetch(
  `${process.env.API || api}${url}`,
  { ...config, credentials: 'include' }, 
).then(checkResponse);

export const authUser = (userData) => request('auth/signin/', {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify(userData),
});

export const getPopularTags = () => request('tags/', { method: 'GET' });

export const getPopularPics = (category : string) => request(`image/?category=${category}`, { method: 'GET' });

export const putLike = (id) => request(`image/${id}/favorite/`, {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify(id),
});

export const removeLike = (id) => request(`image/${id}/favorite/`, { method: 'DELETE' });
