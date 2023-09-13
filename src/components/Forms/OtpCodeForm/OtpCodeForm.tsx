import React, { FC } from 'react';
import styles from './OtpCodeForm.module.scss';
import { BackPopupButton, LinkWordButton, UniversalButton } from '../../../ui-lib/Button';
import Timer from '../../../ui-lib/Timer/Timer';
import OtpCode from '../../../ui-lib/OptCode/OtpCode';

interface OtpCodeFormProps {
  code: string;
  onChange: (val: string) => void;
  onSubmitBtnClick?: () => void;
  onBackClick: () => void;
  title: string;
  description: string;
  buttonType: 'button' | 'submit' | 'reset';
  apiError?: boolean;
}

const OtpCodeForm: FC<OtpCodeFormProps> = (
  {
    code,
    onChange,
    onSubmitBtnClick,
    onBackClick,
    title,
    description,
    buttonType,
    apiError = false,
  },
) => (
  <div className={styles.otpCodeForm}>

    <h1 className={styles.otpCodeForm__title}>{title}</h1>
    <p className={styles.otpCodeForm__description}>
      {description}
      <LinkWordButton buttonName='Изменить' onClick={onBackClick} />
    </p>

    <OtpCode
      value={code}
      valueLength={6}
      isError={apiError}
      onChange={onChange}
      onEnterPress={onSubmitBtnClick || (() => {})} />

    {apiError
        && (
          <p className={styles.otpCodeForm__error}>
            Введенный код не совпадает с отправленным!
          </p>
        )}

    <div className={styles.otpCodeForm__sendPassword}>
      <Timer numberOfMinutes={0} numberOfSeconds={59} />
    </div>

    <UniversalButton
      type={buttonType}
      disabled={code.trim().length !== 6}
      onClick={onSubmitBtnClick}>
      Подтвердить
    </UniversalButton>
  </div>
);

OtpCodeForm.defaultProps = {
  apiError: false,
  onSubmitBtnClick: undefined,
};

export default OtpCodeForm;
