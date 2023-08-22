import React, { ReactComponentElement, FC } from 'react';
import FieldErrorIcon from '../../other/FieldError/FieldErrorIcon';
import styles from './UniversalInput.module.scss';

interface IUniversalInput extends React.ComponentPropsWithoutRef<'input'> {
  errorMessage?: string | null;
  label?: string;
  type?: string;
  validError?: boolean;
  placeholder?: string;
  icon?: ReactComponentElement<FC> | null;
  isErrorIconShow?: boolean;
  id: string;
}

const UniversalInput: React.FC<IUniversalInput> = (
  {
    errorMessage,
    label,
    id,
    type = 'text',
    placeholder,
    validError = false,
    icon = null,
    isErrorIconShow = true,
    ...rest
  },
) => (
  <div>
    <label className={styles.label} htmlFor={id}>{label}</label>
    <div className={`${styles.inputContainer} ${errorMessage || validError ? styles.warning : ''}`}>
      <input
        id={id}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        {...rest} />
      { icon && icon }
      {(errorMessage || validError) && isErrorIconShow && <FieldErrorIcon type={type} />}
    </div>
    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
  </div>
);

UniversalInput.defaultProps = {
  errorMessage: '',
  label: '',
  type: 'text',
  validError: false,
  placeholder: '',
  icon: null,
  isErrorIconShow: true,
};

export default UniversalInput;
