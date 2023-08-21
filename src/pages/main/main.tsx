import React from 'react';
import { PasswordInput } from '../../ui-lib/Input';
import style from './main.module.scss';
import AuthorizationPage from '../AuthorizationPage/AuthorizationPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';

const Main = () => (
  <main className={style.main}>
    {/* <PasswordInput apiError='test' /> */}
    <AuthorizationPage />
    {/* <RegistrationPage /> */}
  </main>
);
export default Main;
