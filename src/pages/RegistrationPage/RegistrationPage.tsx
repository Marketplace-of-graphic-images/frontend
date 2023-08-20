import React from 'react';
import styles from './RegistrationPage.module.scss';
import { LoginWithButton, UniversalButton } from '../../ui-lib/Button';
import { YandexIcon } from '../../ui-lib/Icons';
import { EmailInput, PasswordInput, UniversalInput } from '../../ui-lib/Input';

const RegistrationPage = () => (

  <div className={styles.container}>
    <h1 className={styles.title}>Создать аккаунт</h1>
    <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
    <UniversalInput label='Имя пользователя' placeholder='Введите имя...' validError />
    <EmailInput />
    <PasswordInput />
    <UniversalButton disabled> Создать аккаунт</UniversalButton>
  </div>
);

export default RegistrationPage;
