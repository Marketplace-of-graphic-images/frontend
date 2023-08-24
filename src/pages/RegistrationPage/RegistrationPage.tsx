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
import useValidation from '../../services/useValidation';
import { useDispatch } from '../../services/hooks';
import { openModalAuth } from '../../store';
import YandexLogin from '../../services/auth/yandex/YandexLogin';

// Стили
import styles from './RegistrationPage.module.scss';
import { PATTERN_EMAIL, PATTERN_NAME, PATTERN_PASSWORD } from '../../constants/constants';
import { REG_EMAIL_ID, REG_NAME_ID, REG_PASSWORD_ID } from '../../constants/inputsId';

const clientID = '049e6b67f251461b8eec67c35cf998bc'; 

const RegistrationPage = () => {
  const {
    values,
    checkboxValues,
    handleChange,
    errors,
    isValid,
  } = useValidation();
  const dispatch = useDispatch();
  const openAuthModal = () => {
    dispatch(openModalAuth());
  };

  return (
    <form className={styles.container}>
      <h1 className={styles.title}>Создать аккаунт</h1>
      <YandexLogin clientID={clientID}>
        <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
      </YandexLogin>
      <LineWithWord text='Или' />

      <UniversalInput
        id={REG_NAME_ID}
        name='login'
        type='text'
        value={values.login || ''}
        onChange={handleChange}
        pattern={PATTERN_NAME}
        validError={errors.login}
        label='Имя пользователя'
        minLength={8}
        maxLength={254}
        required
        placeholder='Введите имя...'
        autoFocus />

      <EmailInput
        id={REG_EMAIL_ID}
        name='email'
        value={values.email || ''}
        onChange={handleChange}
        pattern={PATTERN_EMAIL}
        validError={errors.email}
        required />

      <PasswordInput
        id={REG_PASSWORD_ID}
        name='password'
        minLength={8}
        maxLength={254}
        value={values.password || ''}
        onChange={handleChange}
        pattern={PATTERN_PASSWORD}
        validError={errors.password}
        required />

      <div className={styles.checkBox}>
        <Checkbox
          name='author'
          checked={checkboxValues.author || false}
          onChange={handleChange} />
        <p>Я являюсь автором контента</p>
      </div>

      { checkboxValues.author && (
      <div className={styles.checkBox}>
        <Checkbox
          name='authorAgreement'
          checked={checkboxValues.authorAgreement || false}
          onChange={handleChange}
          required />

        <div>
          <LinkWordButton title='Я ознакомлен с законом об' buttonName='Авторском праве' />
          <LinkWordButton title='и' buttonName='Смежных правах' />
        </div>
      </div>
      )}

      <SolidLine />

      <div className={styles.checkBox}>
        <Checkbox
          name='agreement'
          checked={checkboxValues.agreement || false}
          onChange={handleChange}
          required />

        <div>
          <LinkWordButton title='Я принимаю условия' buttonName='Правил и соглашения' />
          об использовании сайта и ознакомлен
          <LinkWordButton title='с' buttonName='Политикой Конфиденциальности' />
        </div>
      </div>

      <UniversalButton disabled={!isValid}> Создать аккаунт</UniversalButton>
      <LinkWordButton onClick={openAuthModal} title='Есть аккаунт?' buttonName='Войти' />
    </form>
  );
};

export default RegistrationPage;
