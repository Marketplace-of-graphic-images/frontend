import React, { FC } from 'react';
import styles from './PasswordRecoveryForm.module.scss';
import { BackPopupButton, UniversalButton } from '../../../ui-lib/Button';
import { EmailInput } from '../../../ui-lib/Input';
import { RECOVERY_LOGIN_ID } from '../../../constants/inputsId';

interface PasswordRecoveryFormProps {
  value: string;
  inputName: string;
  inputError: boolean;
  isFormValid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitBtnClick: () => void;
  onBackClick: () => void;
  apiError?: boolean;
  errorText: string;
  errorDescription: string;
}

const PasswordRecoveryForm: FC<PasswordRecoveryFormProps> = (
  {
    value,
    inputName,
    inputError,
    isFormValid,
    onChange,
    onBackClick,
    onSubmitBtnClick,
    apiError = false,
    errorText,
    errorDescription,
  },
) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && isFormValid) {
      onSubmitBtnClick();
    }
  };

  return (
    <fieldset className={styles.passwordRecoveryForm}>

      <BackPopupButton onClick={onBackClick} />
      <h1 className={styles.passwordRecoveryForm__title}>Восстановление пароля</h1>

      <p className={styles.passwordRecoveryForm__description}>
        Для восстановления пароля введите электронную почту,
        на которую зарегистрирован аккаунт.
      </p>

      <EmailInput
        id={RECOVERY_LOGIN_ID}
        value={value}
        name={inputName}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        maxLength={254}
        required
        validError={inputError}
        errorMessage={errorText}
        errorDescription={errorDescription}
        autoFocus />

      {apiError
        && (
          <p className={styles.passwordRecoveryForm__error}>
            Электронный адрес не зарегистрирован
          </p>
        )}

      <UniversalButton type='button' disabled={!isFormValid} onClick={onSubmitBtnClick}>
        Далее
      </UniversalButton>
    </fieldset>
  );
};

PasswordRecoveryForm.defaultProps = {
  apiError: false,
};

export default PasswordRecoveryForm;
