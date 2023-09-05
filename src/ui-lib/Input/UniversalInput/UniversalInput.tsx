import React, { ReactComponentElement, FC } from 'react';
import FieldErrorIcon, { ErrorTypes } from '../../other/FieldError/FieldErrorIcon';
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
  errorType?: ErrorTypes;
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
    errorType = 'username',
    ...rest
  },
) => (
  <div>
    {label !== '' && <label className={styles.label} htmlFor={id}>{label}</label>}

    <div className={`${styles.inputContainer} ${errorMessage || validError ? styles.warning : ''}`}>
      <input
        id={id}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        {...rest} />

      { icon && icon }

      {(errorMessage || validError) && isErrorIconShow && (
        <FieldErrorIcon errorType={errorType} />
      )}
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
  errorType: 'username',
};

export default UniversalInput;
