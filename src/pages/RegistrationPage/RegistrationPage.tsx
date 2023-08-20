import React from 'react';
import styles from './RegistrationPage.module.scss';
import { LoginWithButton, UniversalButton } from '../../ui-lib/Button';
import { YandexIcon } from '../../ui-lib/Icons';
import { EmailInput, PasswordInput, UniversalInput } from '../../ui-lib/Input';
import ClosePopupButton from '../../ui-lib/Button/ClosePopupButton/ClosePopupButton';
import Checkbox from '../../ui-lib/Checkbox/Checkbox';
import SolidLine from '../../ui-lib/Line/SolidLine/SolidLine';
import LineWithWord from '../../ui-lib/Line/LineWithWord/LineWithWord';
import LinkWordButton from '../../ui-lib/Button/LinkWordButton/LinkWordButton';

const RegistrationPage = () => (

  <div className={styles.container}>

    <ClosePopupButton onClick={() => {}} />
    <h1 className={styles.title}>Создать аккаунт</h1>

    <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
    <LineWithWord text='Или' />
    <UniversalInput label='Имя пользователя' placeholder='Введите имя...' />
    <EmailInput />
    <PasswordInput validError />
    <Checkbox checked={false} onChange={() => {}} />
    <SolidLine />
    <Checkbox checked onChange={() => {}} />
    <UniversalButton disabled> Создать аккаунт</UniversalButton>
    <LinkWordButton title='Есть аккаунт?' buttonName='Войти' path='/' />
  </div>
);

export default RegistrationPage;
