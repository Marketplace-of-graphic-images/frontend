import React from 'react';

// Иконки
import { YandexIcon } from '../../ui-lib/Icons';

// ui-компоненты
import { LoginWithButton, UniversalButton } from '../../ui-lib/Button';
import { PasswordInput, UniversalInput } from '../../ui-lib/Input';
import ClosePopupButton from '../../ui-lib/Button/ClosePopupButton/ClosePopupButton';
import LineWithWord from '../../ui-lib/Line/LineWithWord/LineWithWord';
import LinkWordButton from '../../ui-lib/Button/LinkWordButton/LinkWordButton';

// Стили
import styles from './AuthorizationPage.module.scss';

const AuthorizationPage = () => (

  <div className={styles.container}>

    <ClosePopupButton onClick={() => {}} />
    <h1 className={styles.title}>Авторизация</h1>
    <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
    <LineWithWord text='Или' />
    <UniversalInput label='Адрес электронной почты или имя пользователя' />
    <PasswordInput />
    <div className={styles.forgotPassword}>
      <LinkWordButton buttonName='Забыли пароль?' path='/' />
    </div>
    <UniversalButton disabled> Войти</UniversalButton>
    <LinkWordButton title='Нет аккаунта?' buttonName='Создать аккаунт' path='/' />
  </div>
);

export default AuthorizationPage;
