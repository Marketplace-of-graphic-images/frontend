import React from 'react';
import { PasswordInput } from '../../ui-lib/Input';
import style from './main.module.scss';
import { useDispatch } from '../../services/hooks';
import { openModalAuth } from '../../store';

const Main = () => { 
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(openModalAuth());
  };

  return (
    <main className={style.main}>
      <p className={style.test}>Test</p>
      <button type='button' onClick={openModal}>Test</button>

      {/* <PasswordInput apiError='test' /> */}
      {/* <RegistrationPage /> */}
    </main>
  );
};
export default Main;
