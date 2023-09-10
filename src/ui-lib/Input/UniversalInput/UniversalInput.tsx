import React, { ReactComponentElement, FC } from 'react';
import styles from './UniversalInput.module.scss';

export interface IUniversalInput extends React.ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  errorDescription?: string;
  apiErrorMessage?: string;
  label?: string;
  type?: string;
  validError?: boolean;
  icon?: ReactComponentElement<FC> | null;
  id: string;
  borderColor?: 'black' | 'white';
  className?: string;
}

const UniversalInput: React.FC<IUniversalInput> = (
  {
    errorMessage = '',
    errorDescription = '',
    apiErrorMessage = '',
    label,
    id,
    type = 'text',
    validError = false,
    icon = null,
    borderColor = 'black',
    className = '',
    ...rest
  },
) => {
  const borderColorClass = (color) => {
    switch (true) {
      case color === 'white':
        return styles.universalInput_border_white;
      
      default:
        return styles.universalInput_border_black;
    }
  };
  
  return (
    <div className={styles.universalInput__container}>

      <div
        className={`
          ${styles.universalInput} ${apiErrorMessage || validError ? styles.universalInput__warning : ''} 
          ${borderColorClass(borderColor)} ${className}`}>

        <input
          id={id}
          className={styles.universalInput__input}
          placeholder='input'
          type={type}
          {...rest} />

        {label !== '' && <label className={styles.universalInput__label} htmlFor={id}>{label}</label>}

        {icon && icon}
        
      </div>

      {(validError || apiErrorMessage) && (
        <div className={styles.universalInput__errorContainer}>

          <p className={styles.universalInput__errorMessage}>
            {apiErrorMessage !== '' ? apiErrorMessage : errorMessage}
          </p>

          {errorDescription && (
            <p className={styles.universalInput__errorDescription}>{errorDescription}</p>
          )}

        </div>
      )}

    </div>
  );
};

UniversalInput.defaultProps = {
  errorMessage: '',
  errorDescription: '',
  apiErrorMessage: '',
  label: '',
  type: 'text',
  validError: false,
  icon: null,
  borderColor: 'black',
  className: '',
};

export default UniversalInput;
