const api = 'https://pictura.acceleratorpracticum.ru/api/v1/auth/signin';
/* eslint-disable */
const defaultRequestConfig = {
};
interface Trequest {
  url: string,
  config: RequestInit
}
const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err: any) => Promise.reject(err));
}

export const request = async <T>(
  url: string, 
  config: RequestInit,
): Promise<T> => {
  const res = await fetch(url, config);
  console.log(res)
  const resJson = await res.json();
  if (!res.ok) {
    throw new Error(resJson.message || 'error');
  }
  return resJson;
};
export const authUser1 = (userData) => {

 return request(api, {
  method: 'POST',
  headers: new Headers([
    ['Content-Type', 'application/json'],
]),
  body: JSON.stringify(userData),
  credentials: 'include',
  mode: 'cors',
  cache: 'no-cache',
})
}

export const autchUser = (userData) => {
  return fetch(api, {
      method: 'POST',
      headers: new Headers([
          ['Content-Type', 'application/json'],
      ]),
      body: JSON.stringify(userData),
      credentials: 'include',
  })
      .then(checkResponse)
}


/*
const requestFunc = async (url:string, option) => {
  const res = await fetch((process.env.API || api) + url, { ...option, credentials: 'include' });
  const resJson = await res.json();
  if (!res.ok) {
    throw new Error(resJson.message);
  }
};

const useHttp = () => {
  let request: <T>(url: string,
    method?: string, body?: null | string, headers?: HeadersInit) => Promise<T>;

  request = async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
    try {
      const response = await fetch(url, { method, body, headers });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      throw new Error(response.message);
    }
  };

  return { request };
}; */
