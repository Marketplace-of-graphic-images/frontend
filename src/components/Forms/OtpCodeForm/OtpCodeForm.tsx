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
  apiError?: string;
  getNewCode: () => void;
}

const OtpCodeForm: FC<OtpCodeFormProps> = (
  {
    code,
    onChange,
    onSubmitBtnClick,
    onBackClick,
    title,
    description,
    apiError = '',
    getNewCode,
  },
) => (
  <div className={styles.otpCodeForm}>

    <h1 className={styles.otpCodeForm__title}>{title}</h1>
    <div className={styles.otpCodeForm__description}>
      {description}
      <LinkWordButton buttonName='Изменить' onClick={onBackClick} />
    </div>

    <OtpCode
      value={code}
      valueLength={6}
      isError={apiError}
      onChange={onChange}
      onEnterPress={onSubmitBtnClick || (() => {})} />

    {apiError
        && (
          <p className={styles.otpCodeForm__error}>
            {apiError}
          </p>
        )}

    <div className={styles.otpCodeForm__sendPassword}>
      <Timer numberOfMinutes={0} numberOfSeconds={59} getNewCode={getNewCode} />
    </div>
  </div>
);

OtpCodeForm.defaultProps = {
  apiError: '',
  onSubmitBtnClick: undefined,
};

export default OtpCodeForm;
