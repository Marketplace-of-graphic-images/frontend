import React, { ReactComponentElement, FC } from 'react';
import styles from './UniversalInput.module.scss';

export interface IUniversalInput extends React.ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
  errorDescription?: string;
  apiErrorMessage?: string;
  label?: string;
  type?: string;
  pattern?: string | undefined;
  validError?: boolean;
  icon?: ReactComponentElement<FC> | null;
  id: string;
  borderColor?: 'black' | 'white' | 'grey';
  borderStyle?: 'bottom' | 'full';
  staticLabel?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

const UniversalInput: React.FC<IUniversalInput> = (
  {
    errorMessage = '',
    errorDescription = '',
    apiErrorMessage = '',
    label,
    id,
    type = 'text',
    pattern,
    validError = false,
    icon = null,
    borderColor = 'black',
    borderStyle = 'bottom',
    staticLabel = false,
    className = '',
    width = 484,
    height = 46,
    ...rest
  },
) => {
  const borderClass = (color: string, style: string) => {
    const colorClass: Record<string, string> = {
      white: styles.universalInput_border_white,
      grey: styles.universalInput_border_grey,
      black: styles.universalInput_border_black,
    };

    const styleClass: Record<string, string> = {
      full: styles.universalInput_border_full,
      bottom: styles.universalInput_border_bottom,
    };

    return `${colorClass[color]} ${styleClass[style]}`;
  };

  return (
    <div className={styles.universalInput__container} style={{ maxWidth: width }}>

      <div
        className={`
          ${styles.universalInput} ${apiErrorMessage || validError ? styles.universalInput__warning : ''} 
          ${borderClass(borderColor, borderStyle)} ${className}`}>

        {staticLabel && label !== '' && (
          <label className={styles.universalInput__staticLabel} htmlFor={id}>
            {label}
          </label>
        )}

        <input
          id={id}
          className={styles.universalInput__input}
          placeholder='input'
          type={type}
          pattern={pattern}
          style={{ height }}
          {...rest} />

        {!staticLabel && label !== '' && (
          <label className={styles.universalInput__label} htmlFor={id}>
            {label}
          </label>
        )}

        {icon && icon}
        
      </div>

      {(apiErrorMessage || validError) && (
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
  borderStyle: 'bottom',
  staticLabel: false,
  className: '',
  pattern: undefined,
  width: 484,
  height: 46,
};

export default UniversalInput;
