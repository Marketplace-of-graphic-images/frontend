/* eslint-disable camelcase */
import React, { FC, ReactElement, useEffect } from 'react';
import HiddenFrame from './HiddenFrame';

interface IYandexLogin {
  clientID: string
  children: ReactElement
}

const requestUrl = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=';

const YandexLogin: FC<IYandexLogin> = ({ clientID, children }) => {
  const getUserData = (token: string) => (fetch(`https://login.yandex.ru/info?oauth_token=${token}&format=json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }));
 
  const handleMessageFromPopup = (event: MessageEvent) => {
    const userKey = (event.data);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const userObj = userKey.payload;
    if (userObj) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const userToken: string = userObj.access_token;
      getUserData(userToken)
        // eslint-disable-next-line promise/no-nesting
        .then((res) => res.json()
          .then((data) => console.log(data)))
        .catch((err) => console.log(err));
    }
  }; 
 
  const getToken = () => {
    const parts = window.location.href.split('#');
    const queryPartUrl = parts.length > 1 && parts[1] !== 'frame' ? parts[1] : null;
    if (!queryPartUrl) {
      return null;
    }
    const result = {};
    queryPartUrl.split('&').forEach((part) => {
      const item = part.split('=');
      result[item[0]] = decodeURIComponent(item[1]);
    }); 
    return result;
  };
  
  const onLogin = () => {
    const h = 650;
    const w = 550;
    const y = window.outerHeight / 2 + window.screenY - (h / 2);
    const x = window.outerWidth / 2 + window.screenX - (w / 2);
    window.open(`${requestUrl}${clientID}`, 'popup', `width=${w},height=${h},top=${y},left=${x}`);
    window.addEventListener('message', handleMessageFromPopup, { once: true });
  };
  let frameRedirectTo: null | string = null;

  const accessKey = getToken();
  const receiver: Window = window.parent !== window
    ? window.parent
    : window.opener;

  useEffect(() => {
    if (accessKey && receiver) {
      receiver.postMessage({
        source: 'yandex-login',
        payload: accessKey,
      }, window.location.origin);
      window.close();
    }
  });

  if (!accessKey && !receiver) {
    const autoLoginDIsabled = sessionStorage.getItem('yandexAutoLoginDisabled');
    frameRedirectTo = autoLoginDIsabled !== 'true' 
      ? requestUrl
      : null;
    window.addEventListener('message', handleMessageFromPopup, { once: false });
  }

  const cloned = React.cloneElement(children, { onClick: onLogin });

  return (
    <div>
      {cloned}
      {frameRedirectTo && <HiddenFrame redirectTo={frameRedirectTo} />}
    </div>
  );
};
export default YandexLogin;
