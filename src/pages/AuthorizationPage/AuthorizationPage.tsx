import React from 'react';

// Иконки
import { YandexIcon } from '../../ui-lib/Icons';

// ui-компоненты
import { LoginWithButton, UniversalButton } from '../../ui-lib/Button';
import { PasswordInput, UniversalInput } from '../../ui-lib/Input';
import LineWithWord from '../../ui-lib/Line/LineWithWord/LineWithWord';
import LinkWordButton from '../../ui-lib/Button/LinkWordButton/LinkWordButton';
import useValidation from '../../services/useValidation';
import { useDispatch } from '../../services/hooks';
import { openModalRegister } from '../../store';
// Стили
import styles from './AuthorizationPage.module.scss';

const AuthorizationPage = () => {
  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useValidation();
  const dispatch = useDispatch();
  const openRegisterModal = () => {
    dispatch(openModalRegister());
  };

  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Авторизация</h1>
      <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
      <LineWithWord text='Или' />
      <UniversalInput
        name='login'
        type='text'
        minLength={8}
        maxLength={254}
        value={values.login}
        onChange={handleChange}
        validError={errors.login}
        label='Адрес электронной почты или имя пользователя' />
      <PasswordInput   
        minLength={8}
        maxLength={254} />
      <div className={styles.forgotPassword}>
        <LinkWordButton buttonName='Забыли пароль?' />
      </div>
      <UniversalButton disabled={!isValid}> Войти</UniversalButton>
      <LinkWordButton title='Нет аккаунта?' buttonName='Создать аккаунт' onClick={openRegisterModal} />
    </form>
  );
};

export default AuthorizationPage;
