import React, { FC, useState } from 'react';
import styles from './CodeForm.module.scss';
import CodeNumbers from '../../ui-lib/CodeNumbers/CodeNumbers';

const CodeForm: FC = () => {
  const [values, setValues] = useState(
    {
      first: '',
      second: '',
      third: '',
      fourth: '',
      fifth: '',
      sixth: '',
    },
  );
  const [error, setError] = useState(false);

  const combineNumbers = () => Object.values(values).reduce((codeStr, num) => codeStr + num, '');

  const changeValues = (newValues: Record<string, string>) => {
    setValues({ ...values, ...newValues });
  };

  return (
    <form className={styles['code-form']}>
      <CodeNumbers values={values} changeValues={changeValues} isError={error} />

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
