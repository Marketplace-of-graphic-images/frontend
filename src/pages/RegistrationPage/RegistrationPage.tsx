import React from 'react';

// Иконки
import { YandexIcon } from '../../ui-lib/Icons';

// ui-компоненты
import { LoginWithButton, UniversalButton } from '../../ui-lib/Button';
import { EmailInput, PasswordInput, UniversalInput } from '../../ui-lib/Input';
import ClosePopupButton from '../../ui-lib/Button/ClosePopupButton/ClosePopupButton';
import Checkbox from '../../ui-lib/Checkbox/Checkbox';
import SolidLine from '../../ui-lib/Line/SolidLine/SolidLine';
import LineWithWord from '../../ui-lib/Line/LineWithWord/LineWithWord';
import LinkWordButton from '../../ui-lib/Button/LinkWordButton/LinkWordButton';

// Стили
import styles from './RegistrationPage.module.scss';

const RegistrationPage = () => (

  <div className={styles.container}>

    <ClosePopupButton onClick={() => {}} />
    <h1 className={styles.title}>Создать аккаунт</h1>

    <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
    <LineWithWord text='Или' />
    <UniversalInput label='Имя пользователя' placeholder='Введите имя...' />
    <EmailInput />
    <PasswordInput />
    <div className={styles.checkBox}>
      <Checkbox checked={false} onChange={() => {}} />
      <p>Я являюсь автором контента</p>
    </div>
    <SolidLine />
    <div className={styles.checkBox}>

      <Checkbox checked onChange={() => {}} />
      <p>
        <LinkWordButton title='Я принимаю условия' buttonName='Правил и соглашения' path='/' />
        об использовании сайта и ознакомлен
        <LinkWordButton title='с' buttonName='Политикой Конфиденциальности' path='/' />
      </p>
    </div>
    <UniversalButton disabled> Создать аккаунт</UniversalButton>
    <LinkWordButton title='Есть аккаунт?' buttonName='Войти' path='/' />
  </div>
);

export default RegistrationPage;
