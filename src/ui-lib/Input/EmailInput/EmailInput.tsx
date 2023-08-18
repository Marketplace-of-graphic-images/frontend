/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import React from 'react';
import ErrorIcon from '../../Icons/Error/ErrorIcon';
import styles from './EmailInput.module.scss';

interface IEmailInput extends React.ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
}

// Как лучше состояние warning реализовать? Через пропсы или через внутреннее состояние компонента
const EmailInput: React.FC<IEmailInput> = ({ errorMessage }) => (
  <div>
    <label className={styles.label} htmlFor='email'>Адрес электронной почты</label>
    <div className={`${styles.inputContainer} ${errorMessage ? styles.warning : ''}`}>

      <input
        id='email'
        className={styles.input}
        placeholder='Введите Email...'
        type='email' />
      {errorMessage && <ErrorIcon />}
    </div>
    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
  </div>
);

export default EmailInput;
