import React from 'react';
import style from './PasswordRemindForm.module.scss';
import ClosePopupButton from '../../ui-lib/Button/ClosePopupButton/ClosePopupButton';
import { BackPopupButton, UniversalButton } from '../../ui-lib/Button';
import { EmailInput } from '../../ui-lib/Input';

const PasswordRemindForm = () => {
  console.log('yes');
  return (
    <div className={style.passwordRemindForm}>
      <div className={style.passwordRemindFormConteiner}>
        <BackPopupButton onClick={() => {}} />
        <ClosePopupButton onClick={() => {}} />
        <h1 className={style.passwordRemindFormTitle}>Восстановление пароля</h1>
        <p className={style.passwordRemindFormText}>
          Для восстановления пароля введите вашу электронную почту или имя пользователя.
        </p>
        <EmailInput />
        <UniversalButton>Далее</UniversalButton>
      </div>
    </div>
  );
};

export default PasswordRemindForm;
