import React, { SyntheticEvent } from 'react';
import styles from './AuthorizationForm.module.scss';
import { LoginWithButton, UniversalButton } from '../../../ui-lib/Button';
import { EmailInput, PasswordInput } from '../../../ui-lib/Input';
import LineWithWord from '../../../ui-lib/Line/LineWithWord/LineWithWord';
import LinkWordButton from '../../../ui-lib/Button/LinkWordButton/LinkWordButton';
import { YandexIcon } from '../../../ui-lib/Icons';
import useValidation from '../../../services/useValidation';
import { useDispatch, useSelector } from '../../../services/hooks';
import loginUserThunk from '../../../thunks/login-user-thunk';
import {
  clearAuthErr,
  openModalPassRecovery, openModalRegister,
} from '../../../store';
import YandexLogin from '../../../services/auth/yandex/YandexLogin';
import { AUTH_LOGIN_ID, AUTH_PASSWORD_ID } from '../../../constants/inputsId';

const clientID = '049e6b67f251461b8eec67c35cf998bc'; // Нужно записать в process.env

const AuthorizationForm = () => {
  const {
    values,
    handleChange,
    errors,
    errorsText,
    errorsDescription,
    isValid,
  } = useValidation();
  const dispatch = useDispatch();
  const { emailAuthErr, passwordAuthErr, generalAuthErr } = useSelector((state) => state.apiError);

  const openRegisterModal = () => {
    dispatch(openModalRegister());
  };

  const openPassRecoveryModal = () => {
    dispatch(openModalPassRecovery());
  };
  const authUserRequest = (e:SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUserThunk({ email: values.email, password: values.password }));
  };

  const resetApiErrors = () => {
    dispatch(clearAuthErr());
  };

  return (
    <form onSubmit={authUserRequest} className={styles.container}>
      <h1 className={styles.title}>Авторизация</h1>

      <YandexLogin clientID={clientID}>
        <LoginWithButton title='Войти с Яндекс ID' icon={<YandexIcon />} />
      </YandexLogin>

      <LineWithWord text='Или' />

      <EmailInput
        id={AUTH_LOGIN_ID}
        name='email'
        maxLength={254}
        value={values.email || ''}
        onChange={handleChange}
        onFocus={resetApiErrors}
        validError={errors.email}
        apiErrorMessage={emailAuthErr}
        errorMessage={errorsText.email || ''}
        errorDescription={errorsDescription.email || ''}
        pattern={undefined}
        required
        autoFocus />
        
      <div className={styles.password}>
        <PasswordInput
          id={AUTH_PASSWORD_ID}
          name='password'
          maxLength={254}
          value={values.password || ''}
          onChange={handleChange}
          onFocus={resetApiErrors}
          apiErrorMessage={passwordAuthErr}
          validError={errors.password}
          errorMessage={errorsText.password || ''}
          errorDescription={errorsDescription.password || ''}
          pattern={undefined}
          required />

        <LinkWordButton buttonName='Забыли пароль?' onClick={openPassRecoveryModal} />
      </div>

      {generalAuthErr && <p className={styles.globalError}>{generalAuthErr}</p>}

      <div className={styles.buttons}>
        <UniversalButton type='submit' disabled={!isValid}>Войти</UniversalButton>
        <LinkWordButton title='Нет аккаунта?' buttonName='Создать аккаунт' onClick={openRegisterModal} />
      </div>

    </form>
  );
};

export default AuthorizationForm;
