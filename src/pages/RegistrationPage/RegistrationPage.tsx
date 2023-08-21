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

// Стили
import styles from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const {
    values,
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

      <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
      <LineWithWord text='Или' />
      <UniversalInput 
        name='login'
        type='text'
        value={values.login}
        onChange={handleChange}
        validError={errors.login}
        label='Имя пользователя'
        minLength={8}
        maxLength={254}
        placeholder='Введите имя...' />
      <EmailInput 
        name='email'
        value={values.email}
        onChange={handleChange}
        validError={errors.email} />
      <PasswordInput
        name='password'
        minLength={8}
        maxLength={254}
        value={values.password}
        onChange={handleChange}
        validError={errors.password} />
      <div className={styles.checkBox}>
        <Checkbox checked={false} onChange={() => {}} />
        <p>Я являюсь автором контента</p>
      </div>
      <SolidLine />
      <div className={styles.checkBox}>

        <Checkbox checked onChange={() => {}} />
        <div>
          <LinkWordButton title='Я принимаю условия' buttonName='Правил и соглашения' />
          об использовании сайта и ознакомлен
          <LinkWordButton title='с' buttonName='Политикой Конфиденциальности' />
        </div>
      </div>
      <UniversalButton disabled> Создать аккаунт</UniversalButton>
      <LinkWordButton onClick={openAuthModal} title='Есть аккаунт?' buttonName='Войти' />
    </form>
  );
};

export default RegistrationPage;
