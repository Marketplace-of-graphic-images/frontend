import React, { FC, useState } from 'react';
import styles from './CodeForm.module.scss';
import OtpCode from '../../ui-lib/OptCode/OtpCode';

const CodeForm: FC = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(true);

  return (
    <form className={styles['code-form']}>
      <OtpCode
        value={code}
        valueLength={6}
        isError={error}
        onChange={(value) => setCode(value)} />

      {error
        && (
          <p className={styles['code-form__error']}>
            Введенный код не совпадает с отправленным!
          </p>
        )}
    </form>
  );
};

export default CodeForm;
