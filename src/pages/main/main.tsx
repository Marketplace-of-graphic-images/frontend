import React from 'react';
import { PasswordInput } from '../../ui-lib/Input';
import style from './main.module.scss';

const Main = () => (
  <main className={style.main}>
    <PasswordInput apiError='test' />
  </main>
);
export default Main;
