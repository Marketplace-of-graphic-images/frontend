import React from 'react';
import style from './header.module.scss';
import { useDispatch } from '../../services/hooks';
import { openModalAuth, openModalRegister } from '../../store';
import { UniversalButton, LinkWordButton } from '../../ui-lib/Button';

const Header = () => { 
  const dispatch = useDispatch();
  const openRgisterModal = () => {
    dispatch(openModalRegister());
  };
  const openAuthModal = () => {
    dispatch(openModalAuth());
  };

  return (
    <header className={style.main}>
      <UniversalButton onClick={openRgisterModal} type='button' size='small'> Создать аккаунт</UniversalButton>
      <LinkWordButton buttonName='Войти' onClick={openAuthModal} />
      {/* <PasswordInput apiError='test' /> */}
      {/* <RegistrationPage /> */}
    </header>
  );
};
export default Header;
