import React from 'react';
import LoginWithButton from '../../ui-lib/Button/LoginWithButton/LoginWithButton';
import UniversalButton from '../../ui-lib/Button/UniversalButton/UniversalButton';
import ErrorIcon from '../../ui-lib/Icons/Error/ErrorIcon';
import GoogleIcon from '../../ui-lib/Icons/Google/GoogleIcon';
import NoVisionIcon from '../../ui-lib/Icons/NoVision/NoVisionIcon';
import VisionIcon from '../../ui-lib/Icons/Vision/VisionIcon';
import YandexIcon from '../../ui-lib/Icons/Yandex/YandexIcon';
import EmailInput from '../../ui-lib/Input/EmailInput/EmailInput';
import PasswordInput from '../../ui-lib/Input/PasswordInput/PasswordInput';
import style from './main.module.scss';

function press() {}

const Main = () => (
  <main className={style.main}>
    <NoVisionIcon />
    <VisionIcon />
    <ErrorIcon />
    <GoogleIcon />
    <YandexIcon />
    <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
    <LoginWithButton title='Войти с помощью Google' icon={<GoogleIcon />} />
    <UniversalButton type='submit' onClick={press}>
      Кнопка
    </UniversalButton>
    <UniversalButton disabled size='medium'>
      Кнопка2
    </UniversalButton>
    <EmailInput />
    <PasswordInput />
  </main>
);
export default Main;
