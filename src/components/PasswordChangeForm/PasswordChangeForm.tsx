import React, { FC } from 'react';
import PasswordInput from '../../ui-lib/Input/PasswordInput/PasswordInput';
import styles from './PasswordChangeForm.module.scss';
import { RECOVERY_PASSWORD_ID, RECOVERY_REPEAT_PASSWORD_ID } from '../../constants/inputsId';
import { BackPopupButton, UniversalButton } from '../../ui-lib/Button';

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
) => (
  <fieldset className={styles.passwordChangeForm}>
    <h2 className={styles.passwordChangeForm__title}>Восстановление пароля</h2>
    <BackPopupButton onClick={onBackClick} />

    <p className={styles.passwordChangeForm__description}>
      Для восстановления пароля введите вашу электронную почту или имя пользователя.
    </p>

    <PasswordInput
      id={RECOVERY_PASSWORD_ID}
      name='password'
      value={values.password || ''}
      validError={errors.password}
      onChange={onChange}
      minLength={8}
      maxLength={254}
      required />

    <div>
      <PasswordInput
        id={RECOVERY_REPEAT_PASSWORD_ID}
        name='repeatPassword'
        value={values.repeatPassword || ''}
        validError={errors.repeatPassword}
        onChange={onChange}
        pattern={`^${values.password}$`}
        required
        label='Повторите пароль' />

      {errors.repeatPassword && (
        <p className={styles.passwordChangeForm__error}>Пароли не совпадают</p>
      )}
    </div>

    <UniversalButton type='submit' disabled={!isFormValid}>
      Подтвердить
    </UniversalButton>
  </fieldset>
);

export default PasswordChangeForm;
