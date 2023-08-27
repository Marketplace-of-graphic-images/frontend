import React from 'react';
import styles from './AuthorizationForm.module.scss';
import { LoginWithButton, UniversalButton } from '../../../ui-lib/Button';
import { PasswordInput, UniversalInput } from '../../../ui-lib/Input';
import LineWithWord from '../../../ui-lib/Line/LineWithWord/LineWithWord';
import LinkWordButton from '../../../ui-lib/Button/LinkWordButton/LinkWordButton';
import { YandexIcon } from '../../../ui-lib/Icons';
import useValidation from '../../../services/useValidation';
import { useDispatch } from '../../../services/hooks';
import { openModalPassRecovery, openModalRegister } from '../../../store';
import YandexLogin from '../../../services/auth/yandex/YandexLogin';
import { AUTH_LOGIN_ID, AUTH_PASSWORD_ID } from '../../../constants/inputsId';

const clientID = '049e6b67f251461b8eec67c35cf998bc'; // Нужно записать в process.env

const AuthorizationForm = () => {
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

  const openPassRecoveryModal = () => {
    dispatch(openModalPassRecovery());
  };
  /* eslint-disable spaced-comment */
  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Авторизация</h1>
      <YandexLogin clientID={clientID}>
        <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
      </YandexLogin>
      *
      <LineWithWord text='Или' />

      <UniversalInput
        id={AUTH_LOGIN_ID}
        name='login'
        type='text'
        maxLength={254}
        value={values.login || ''}
        onChange={handleChange}
        validError={errors.login}
        isErrorIconShow={false}
        required
        placeholder='Введите имя или Email...'
        label='Адрес электронной почты или имя пользователя'
        autoFocus />

      <PasswordInput
        id={AUTH_PASSWORD_ID}
        name='password'
        maxLength={254}
        value={values.password || ''}
        onChange={handleChange}
        validError={errors.password}
        isErrorIconShow={false}
        required />

      <div className={styles.forgotPassword}>
        <LinkWordButton buttonName='Забыли пароль?' onClick={openPassRecoveryModal} />
      </div>

      <UniversalButton disabled={!isValid}>Войти</UniversalButton>
      <LinkWordButton title='Нет аккаунта?' buttonName='Создать аккаунт' onClick={openRegisterModal} />
    </form>
  );
};

export default AuthorizationForm;
