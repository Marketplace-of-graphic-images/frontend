import React, { FC } from 'react';
import styles from './OtpCodeForm.module.scss';
import { BackPopupButton, UniversalButton } from '../../ui-lib/Button';
import Timer from '../../ui-lib/Timer/Timer';
import OtpCode from '../../ui-lib/OptCode/OtpCode';

interface OtpCodeFormProps {
  code: string;
  onChange: (val: string) => void;
  onSubmitBtnClick: () => void;
  onBackClick: () => void;
  title: string;
  description: string;
  email: string;
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
    email,
    apiError = false,
  },
) => (
  <fieldset className={styles.otpCodeForm}>
    <BackPopupButton onClick={onBackClick} />

    <h1 className={styles.otpCodeForm__title}>{title}</h1>
    <p className={styles.otpCodeForm__description}>
      {description}
      <span className={styles.otpCodeForm__mailAccent}>{email}</span>
    </p>

    <OtpCode
      value={code}
      valueLength={6}
      isError={apiError}
      onChange={onChange}
      onEnterPress={onSubmitBtnClick} />

    {apiError
        && (
          <p className={styles.otpCodeForm__error}>
            Введенный код не совпадает с отправленным!
          </p>
        )}

    <div className={styles.otpCodeForm__sendPassword}>
      <Timer numberOfSeconds={3} />
    </div>

    <UniversalButton type='button' disabled={code.trim().length !== 6} onClick={onSubmitBtnClick}>
      Подтвердить
    </UniversalButton>
  </fieldset>
);

OtpCodeForm.defaultProps = {
  apiError: false,
};

export default OtpCodeForm;
