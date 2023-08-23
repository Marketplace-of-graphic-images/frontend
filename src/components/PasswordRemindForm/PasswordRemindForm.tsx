import React from 'react';
import styles from './PasswordRemindForm.module.scss';
import { BackPopupButton, UniversalButton } from '../../ui-lib/Button';
import { EmailInput } from '../../ui-lib/Input';

const PasswordRemindForm = () => {
  console.log('yes');

  return (
    <div className={styles.passwordRemindForm}>
      <div className={styles.passwordRemindFormConteiner}>
        <BackPopupButton onClick={() => {}} />
        <h1 className={styles.passwordRemindFormTitle}>Восстановление пароля</h1>

        <p className={styles.passwordRemindFormText}>
          Для восстановления пароля введите вашу электронную почту или имя пользователя.
        </p>

        <EmailInput />
        <UniversalButton>Далее</UniversalButton>
      </div>
    </div>
  );
};

export default PasswordRemindForm;
