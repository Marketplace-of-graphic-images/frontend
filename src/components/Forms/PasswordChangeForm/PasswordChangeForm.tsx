import React, { FC, useState } from 'react';
import PasswordInput from '../../../ui-lib/Input/PasswordInput/PasswordInput';
import styles from './PasswordChangeForm.module.scss';
import { RECOVERY_PASSWORD_ID, RECOVERY_REPEAT_PASSWORD_ID } from '../../../constants/inputsId';
import { BackPopupButton, UniversalButton } from '../../../ui-lib/Button';

interface PasswordChangeFormProps {
  values: Record<string, string>;
  errors: Record<string, boolean>;
  isFormValid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBackClick: () => void;
}

const PasswordChangeForm: FC<PasswordChangeFormProps> = (
  {
    values,
    errors,
    isFormValid,
    onChange,
    onBackClick,
  },
) => {
  const [inputState, setInputState] = useState({
    type: 'password',
    visionIcon: false,
  });

  const toggleInputType = () => {
    if (inputState.type === 'password') {
      setInputState({ type: 'text', visionIcon: true });
    } else {
      setInputState({ type: 'password', visionIcon: false });
    }
  };

  return (
    <fieldset className={styles.passwordChangeForm}>
      <h2 className={styles.passwordChangeForm__title}>Восстановление пароля</h2>
      <BackPopupButton onClick={onBackClick} />
      <PasswordInput
        id={RECOVERY_PASSWORD_ID}
        name='password'
        value={values.password || ''}
        validError={errors.password}
        onChange={onChange}
        minLength={8}
        maxLength={254}
        required
        customInputState={inputState}
        customToggleType={toggleInputType}
        autoFocus />

      <div>
        <PasswordInput
          id={RECOVERY_REPEAT_PASSWORD_ID}
          name='repeatPassword'
          value={values.repeatPassword || ''}
          validError={errors.repeatPassword}
          onChange={onChange}
          pattern={`^${values.password}$`}
          required
          label='Повторите пароль'
          customInputState={inputState}
          customToggleType={toggleInputType} />

        {errors.repeatPassword && (
          <p className={styles.passwordChangeForm__error}>Пароли не совпадают</p>
        )}
      </div>

      <UniversalButton type='submit' disabled={!isFormValid}>
        Подтвердить
      </UniversalButton>
    </fieldset>
  );
};

export default PasswordChangeForm;
