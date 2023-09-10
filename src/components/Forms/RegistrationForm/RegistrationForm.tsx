import React, { useState } from 'react';
import styles from './RegistrationForm.module.scss';
import { YandexIcon } from '../../../ui-lib/Icons';
import { LoginWithButton, UniversalButton } from '../../../ui-lib/Button';
import { EmailInput, PasswordInput, UniversalInput } from '../../../ui-lib/Input';
import Checkbox from '../../../ui-lib/Checkbox/Checkbox';
import SolidLine from '../../../ui-lib/Line/SolidLine/SolidLine';
import LineWithWord from '../../../ui-lib/Line/LineWithWord/LineWithWord';
import LinkWordButton from '../../../ui-lib/Button/LinkWordButton/LinkWordButton';
import useValidation from '../../../services/useValidation';
import { useDispatch } from '../../../services/hooks';
import { closeModal, openModalAuth } from '../../../store';
import { PATTERN_EMAIL, PATTERN_USERNAME, PATTERN_PASSWORD } from '../../../constants/constants';
import { REG_EMAIL_ID, REG_NAME_ID, REG_PASSWORD_ID } from '../../../constants/inputsId';
import YandexLogin from '../../../services/auth/yandex/YandexLogin';
import OtpCodeForm from '../OtpCodeForm/OtpCodeForm';

const clientID = '049e6b67f251461b8eec67c35cf998bc';

/* eslint-disable spaced-comment */

const RegistrationForm = () => {
  const {
    values,
    checkboxValues,
    handleChange,
    errors,
    errorsText,
    errorsDescription,
    isValid,
  } = useValidation();

  const dispatch = useDispatch();

  const openAuthModal = () => {
    dispatch(openModalAuth());
  };

  const [formStep, setFormStep] = useState(1);
  const [code, setCode] = useState('');

  const handleRegisterButtonClick = () => {
    setFormStep(2);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formStep === 2) {
      console.log(
        'submit data', (
          {
            username: values.username,
            email: values.email,
            password: values.password,
            code,
          }),
      );
      dispatch(closeModal());
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      {formStep === 1 && (
        <fieldset className={styles.container}>
          <h1 className={styles.title}>Создать аккаунт</h1>
          <YandexLogin clientID={clientID}>
            <LoginWithButton title='Войти с помощью Яндекс ID' icon={<YandexIcon />} />
          </YandexLogin>
          <LineWithWord text='Или' />

          <UniversalInput
            id={REG_NAME_ID}
            name='username'
            type='text'
            value={values.username || ''}
            onChange={handleChange}
            pattern={PATTERN_USERNAME}
            validError={errors.username}
            errorMessage={errorsText.username || ''}
            errorDescription={errorsDescription.username || ''}
            label='Имя пользователя'
            placeholder='Введите имя...'
            required
            autoFocus />

          <EmailInput
            id={REG_EMAIL_ID}
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            pattern={PATTERN_EMAIL}
            validError={errors.email}
            errorMessage={errorsText.email || ''}
            errorDescription={errorsDescription.email || ''}
            required />

          <PasswordInput
            id={REG_PASSWORD_ID}
            name='password'
            value={values.password || ''}
            onChange={handleChange}
            pattern={PATTERN_PASSWORD}
            validError={errors.password}
            errorMessage={errorsText.password || ''}
            errorDescription={errorsDescription.password || ''}
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

          <UniversalButton disabled={!isValid} type='button' onClick={handleRegisterButtonClick}>
            Создать аккаунт
          </UniversalButton>

          <LinkWordButton onClick={openAuthModal} title='Есть аккаунт?' buttonName='Войти' />
        </fieldset>
      )}

      {formStep === 2 && (
        <OtpCodeForm
          code={code}
          onChange={(val) => setCode(val)}
          onBackClick={() => setFormStep(1)}
          buttonType='submit'
          email='example@yandex.ru'
          title='Подтвердите адрес электронной почты'
          description='Для завершения регистрации введите код, отправленный на почту' />
      )}
    </form>
  );
};

export default RegistrationForm;
