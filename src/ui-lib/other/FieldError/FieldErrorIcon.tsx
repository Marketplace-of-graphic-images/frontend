import React, { useState, FC } from 'react';
import { ErrorIcon } from '../../Icons';
import styles from './FieldErrorIcon.module.scss';
import {
  EmailErrorTooltip,
  PasswordErrorTooltip,
  NameErrorTooltip,
  UsernameErrorTooltip,
}
  from '../../ErrorTooltips';

export type ErrorTypes = 'username' | 'email' | 'password' | 'name';

interface IFieldErrorIcon {
  errorType: ErrorTypes;
}

const FieldErrorIcon: FC<IFieldErrorIcon> = ({ errorType }) => {
  const [showMessage, setShowMessage] = useState(false);

  const checkTypeForm = () => {
    switch (errorType) {
      case 'email': return (<EmailErrorTooltip />);
      case 'password': return (<PasswordErrorTooltip />);
      case 'username': return (<UsernameErrorTooltip />);
      case 'name': return (<NameErrorTooltip />);
      default: return (<NameErrorTooltip />);
    }
  }; 

  return (
    <div
      className={styles.main}
      onMouseEnter={() => {
        setShowMessage(true);
      }}
      onMouseLeave={() => {
        setShowMessage(false);
      }}>
      <ErrorIcon />
      {showMessage && checkTypeForm()}
    </div>
  );
};

export default FieldErrorIcon;
