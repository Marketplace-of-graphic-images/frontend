import React from 'react';
import { PasswordInput } from '../../ui-lib/Input';
import style from './main.module.scss';
import AuthorizationPage from '../RegistrationPage/RegistrationPage';

const Main = () => (
  <main className={style.main}>
    {/* <PasswordInput apiError='test' /> */}
    <AuthorizationPage />
  </main>
);
export default Main;
