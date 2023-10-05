import React, { useState } from 'react';
import styles from './RegistrationForm.module.scss';
import { YandexIcon } from '../../../ui-lib/Icons';
import { LoginWithButton, UniversalButton } from '../../../ui-lib/Button';
import { useSelector, useDispatch } from '../../../services/hooks';
import { EmailInput, PasswordInput, UniversalInput } from '../../../ui-lib/Input';
import Checkbox from '../../../ui-lib/Checkbox/Checkbox';
import SolidLine from '../../../ui-lib/Line/SolidLine/SolidLine';
import LineWithWord from '../../../ui-lib/Line/LineWithWord/LineWithWord';
import LinkWordButton from '../../../ui-lib/Button/LinkWordButton/LinkWordButton';
import useValidation from '../../../services/useValidation';
import { closeModal, openModalAuth } from '../../../store';
import { PATTERN_EMAIL, PATTERN_USERNAME, PATTERN_PASSWORD } from '../../../constants/constants';
import { REG_EMAIL_ID, REG_NAME_ID, REG_PASSWORD_ID } from '../../../constants/inputsId';
import YandexLogin from '../../../services/auth/yandex/YandexLogin';
import OtpCodeForm from '../OtpCodeForm/OtpCodeForm';
import registerUserThunk from '../../../thunks/register-user-thunk';
import chekEmailThunk from '../../../thunks/check-email-thunk';

const clientID = '049e6b67f251461b8eec67c35cf998bc';

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
  const { userDataTemp } = useSelector((state) => state.user);

  const openAuthModal = () => {
    dispatch(openModalAuth());
  };

  const [formStep, setFormStep] = useState(1);
  const [code, setCode] = useState('');
  const [userData, setUserData] = useState(null);

  const handleRegisterButtonClick = () => {
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
      // eslint-disable-next-line
      is_author: checkboxValues.author
    };
    console.log(data);
    dispatch(registerUserThunk(data, setFormStep));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formStep === 2) {
      console.log(
        userDataTemp,
      ); 
      dispatch(chekEmailThunk({ ...userDataTemp, confirmation_code: code }));
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      {formStep === 1 && (
        <div className={styles.container}>
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
            autoComplete='new-password'
            required />

          <div className={styles.checkBoxContainer}>
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
                  <LinkWordButton
                    title='Я ознакомлен с законом об'
                    buttonName='Авторском праве и Смежных правах'
                    className={styles.linkWordButton} />
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
                Я принимаю условия
                <LinkWordButton
                  buttonName='Правил и соглашений об использовании сайта'
                  className={styles.linkWordButton} />
                <span> и ознакомлен с </span>
                <LinkWordButton
                  buttonName='Политикой Конфиденциальности'
                  className={styles.linkWordButton} />
              </div>
            </div>
          </div>

          <UniversalButton disabled={!isValid} type='button' onClick={handleRegisterButtonClick}>
            Создать аккаунт
          </UniversalButton>

          <LinkWordButton onClick={openAuthModal} title='Есть аккаунт?' buttonName='Войти' />
        </div>
      )}

      {formStep === 2 && (
        <OtpCodeForm
          code={code}
          onChange={(val) => setCode(val)}
          onBackClick={() => setFormStep(1)}
          buttonType='submit'
          title='Подтвердите электронную почту'
          description='Введите код, отправленный по указанному при регистрации адресу электронной почты ' />
      )}
    </form>
  );
};

export default RegistrationForm;
