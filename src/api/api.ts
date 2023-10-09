const api = 'https://pictura.acceleratorpracticum.ru/api/v1/';
const checkResponse = (res: Response) => (res.ok ? res.json() 
// eslint-disable-next-line
  : res.json().then((err: any) => Promise.reject(err)));

export const request = (
  url: string, 
  config?: RequestInit,
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

export const registUser = (userData) => request('auth/signup/', {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify(userData),
});

export const registerConfirmUser = (userData) => request('auth/signup-confirmation/', {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
  ]),
  body: JSON.stringify(userData),
});
export const checkUserAuth = () => request('users/short_me');

export const getUsersMe = () => request('users/me/');

export const pathUsersMe = (userData) => request('users/me/', {
  method: 'PATCH',
  body: userData,
});
