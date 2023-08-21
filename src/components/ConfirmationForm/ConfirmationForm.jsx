import React from 'react';
import style from './ConfirmationForm.module.scss';
import ClosePopupButton from '../../ui-lib/Button/ClosePopupButton/ClosePopupButton';
import CodeNumbers from '../../ui-lib/CodeNumbers/CodeNumbers';
import { BackPopupButton, UniversalButton } from '../../ui-lib/Button';

const ConfirmationForm = () => {
  console.log('yes');
  return (
    <div className={style.confirmationForm}>
      <div className={style.confirmationFormConteiner}>
        <BackPopupButton onClick={() => {}} />
        <ClosePopupButton onClick={() => {}} />
        <h1 className={style.confirmationFormTitle}>Подтвердите адрес электронной почты</h1>
        <p className={style.confirmationFormText}>
          Для завершения регистрации введите код, отправленный на почту example@yandex.ru
        </p>
        <CodeNumbers values={123456} />
        <div className={style.confirmationFormSendPassword}>
          <p className={style.confirmationFormTextSend}>Запросить новый код:</p>
          <button className={style.confirmationFormButtonLink} type='button'>Отправить</button>
        </div>
        <UniversalButton disabled>Подтвердить</UniversalButton>
      </div>
    </div>
  );
};

export default ConfirmationForm;
