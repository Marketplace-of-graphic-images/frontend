/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import React from 'react';
import ErrorIcon from '../../Icons/Error/ErrorIcon';
import styles from './UniversalInput.module.scss';

interface IUniversalInput extends React.ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  label?: string;
  type?: string;
  placeholder?: string;
}

const UniversalInput: React.FC<IUniversalInput> = ({
  errorMessage, label, type = 'text', placeholder,
}) => (
  <div>
    <label className={styles.label} htmlFor='inp'>{label}</label>
    <div className={`${styles.inputContainer} ${errorMessage ? styles.warning : ''}`}>
      <input
        id='inp'
        className={styles.input}
        placeholder={placeholder}
        type={type} />
      {errorMessage && <ErrorIcon />}
    </div>
    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
  </div>
);

export default UniversalInput;
