import React, { useState, FC } from 'react';
import { ErrorIcon } from '../../Icons';
import styles from './FieldErrorIcon.module.scss';
import TypeInput from '../../../constants/typeInput';
import {
  EmailErrorTooltip,
  PasswordErrorTooltip, 
  NameErrorTooltip, 
}
  from '../../ErrorTooltips';

interface IFieldErrorIcon {
  type?: string
}

const FieldErrorIcon: FC<IFieldErrorIcon> = ({ type }) => {
  const [showMessage, setShowMessage] = useState(false);

  const checkTypeForm = () => {
    switch (type) {
      case 'email': return (<EmailErrorTooltip />);
      case 'password': return (<PasswordErrorTooltip />);
      case 'text': return (<NameErrorTooltip />);
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
FieldErrorIcon.defaultProps = {
  type: TypeInput.text,
};

export default FieldErrorIcon;
