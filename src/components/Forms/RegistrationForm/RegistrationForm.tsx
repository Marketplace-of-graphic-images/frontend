import React, { useState, useEffect } from 'react';
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
import { openModalAuth, clearApiErr } from '../../../store';
import { PATTERN_USERNAME, PATTERN_PASSWORD } from '../../../constants/constants';
import { REG_EMAIL_ID, REG_NAME_ID, REG_PASSWORD_ID } from '../../../constants/inputsId';
import YandexLogin from '../../../services/auth/yandex/YandexLogin';
import OtpCodeForm from '../OtpCodeForm/OtpCodeForm';
import registerUserThunk from '../../../thunks/register-user-thunk';
import checkEmailThunk from '../../../thunks/check-email-thunk';

const clientID = '049e6b67f251461b8eec67c35cf998bc';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
  const {
    emailApiErr,
    passwordApiErr, 
    generalApiErr,
    usernameApiErr, 
    confirmCodeApiErr,
  } = useSelector((state) => state.apiError);
  const openAuthModal = () => {
    dispatch(openModalAuth());
  };

  const [formStep, setFormStep] = useState(1);
  const [code, setCode] = useState('');

  const newRegisterCode = () => {
    dispatch(registerUserThunk(userDataTemp, setFormStep));
  };
  useEffect(() => {
    if (code.length > 5 && formStep === 2) {
      dispatch(checkEmailThunk({ ...userDataTemp, confirmation_code: code }, setCode));
    }
    // eslint-disable-next-line
  }, [code]);
  
  const resetApiErrors = () => {
    dispatch(clearApiErr());
  };

  const handleRegisterButtonClick = () => {
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
      // eslint-disable-next-line
      is_author: checkboxValues.author
    };
    dispatch(registerUserThunk(data, setFormStep));
  };

  return (
    <form autoComplete='off'>
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
            onFocus={resetApiErrors}
            validError={errors.username}
            errorMessage={errorsText.username || ''}
            errorDescription={errorsDescription.username || ''}
            apiErrorMessage={usernameApiErr}
            label='Имя пользователя'
            placeholder='Введите имя...'
            required
            autoFocus />

          <EmailInput
            id={REG_EMAIL_ID}
            name='email'
            value={values.email || ''}
            onChange={handleChange}
            onFocus={resetApiErrors}
            validError={errors.email}
            apiErrorMessage={emailApiErr}
            errorMessage={errorsText.email || ''}
            errorDescription={errorsDescription.email || ''}
            required />

          <PasswordInput
            id={REG_PASSWORD_ID}
            name='password'
            value={values.password || ''}
            onChange={handleChange}
            pattern={PATTERN_PASSWORD}
            onFocus={resetApiErrors}
            validError={errors.password}
            apiErrorMessage={passwordApiErr}
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
          {generalApiErr && <p className={styles.globalError}>{generalApiErr}</p>}

          <UniversalButton disabled={!isValid} type='button' onClick={handleRegisterButtonClick}>
            Создать аккаунт
          </UniversalButton>

          <LinkWordButton onClick={openAuthModal} title='Есть аккаунт?' buttonName='Войти' />
        </div>
      )}

      {formStep === 2 && (
        <OtpCodeForm
          code={code}
          getNewCode={newRegisterCode}
          onChange={(val) => setCode(val)}
          onBackClick={() => setFormStep(1)}
          title='Подтвердите электронную почту'
          apiError={confirmCodeApiErr}
          description='Введите код, отправленный по указанному при регистрации адресу электронной почты ' />
      )}
    </form>
  );
};

export default RegistrationForm;
