/* eslint-disable camelcase */
import React, {
  FC, ReactElement, useEffect, useState, 
} from 'react';
import HiddenFrame from './HiddenFrame';

interface IYandexLogin {
  clientID: string
  children: ReactElement
}
type TUrl = {
  authorization_url: string
};
const redirectUri = 'https://pictura.acceleratorpracticum.ru/api/v1/accounts/profile/';

const YandexLogin: FC<IYandexLogin> = ({ clientID, children }) => {
  const [windowOpen, setWindowOpen] = useState('');
  const getLink = () => (fetch(decodeURIComponent(`https://pictura.acceleratorpracticum.ru/api/v1/auth/social/o/yandex-oauth2/?${new URLSearchParams(
    { redirect_uri: redirectUri },
  ).toString()}`), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }))
    .then((res: Response) => res.json())
    .then((data: TUrl) => setWindowOpen(data.authorization_url))
    .catch((err) => console.log(err));

  const getCode = () => (
    fetch(encodeURIComponent(windowOpen), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  );
  
  const onLogin = () => {
    const h = 650;
    const w = 550;
    const y = window.outerHeight / 2 + window.screenY - (h / 2);
    const x = window.outerWidth / 2 + window.screenX - (w / 2);
      
    // window.open(`${requestUrl}${clientID}`, 'popup',`width=${w},height=${h},top=${y},left=${x}`);
  };
  useEffect(() => {
    const h = 650;
    const w = 550;
    const y = window.outerHeight / 2 + window.screenY - (h / 2);
    const x = window.outerWidth / 2 + window.screenX - (w / 2);
    window.open(windowOpen, 'popup', `width=${w},height=${h},top=${y},left=${x}`);
    console.log(windowOpen);
  }, [windowOpen]);
  const cloned = React.cloneElement(children, { onClick: getLink });

  return (
    <div>
      {cloned}
    </div>
  );
};
export default YandexLogin;
