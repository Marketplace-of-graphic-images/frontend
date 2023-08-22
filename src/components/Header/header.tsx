import React from 'react';
import style from './header.module.scss';
import { useDispatch, useSelector } from '../../services/hooks';
import { openModalAuth, openModalRegister } from '../../store';
import { UniversalButton, LinkWordButton } from '../../ui-lib/Button';

const Header = () => { 
  const dispatch = useDispatch();
  const openModal1 = () => {
    dispatch(openModalRegister());
  };
  const openModal2 = () => {
    dispatch(openModalAuth());
  };

  return (
    <header className={style.main}>
      <UniversalButton onClick={openModal1} type='button' size='small'> Создать аккаунт</UniversalButton>
      <LinkWordButton buttonName='Войти' onClick={openModal2} />
      {/* <PasswordInput apiError='test' /> */}
      {/* <RegistrationPage /> */}
    </header>
  );
};
export default Header;
