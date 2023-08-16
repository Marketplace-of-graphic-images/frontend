import React from 'react';
import ErrorIcon from '../../Icons/Error/ErrorIcon';
import styles from './EmailInput.module.scss';

interface IEmailInput extends React.ComponentPropsWithoutRef<'input'> {
  warning?: boolean;
}

// Как лучше состояние warning реализовать? Через пропсы или через внутреннее состояние компонента
const EmailInput: React.FC<IEmailInput> = ({ warning = false }) => (
  <div className={`${styles.inputContainer} ${warning ? styles.warning : ''}`}>
    <input
      className={styles.input}
      placeholder='Введите Email...'
      type='email' />
    {warning && <ErrorIcon />}
  </div>
);

export default EmailInput;
