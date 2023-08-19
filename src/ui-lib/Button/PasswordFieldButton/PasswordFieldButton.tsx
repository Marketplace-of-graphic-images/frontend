import React, { FC, ComponentPropsWithoutRef } from 'react';
import styles from './PasswordFieldButton.module.scss';
import { NoVisionIcon, VisionIcon } from '../../Icons/index';

interface IPasswordFieldButton extends ComponentPropsWithoutRef<'button'> {
  isVision?: boolean;
  onClick?: () => void;
  error?: boolean;
}

const PasswordFieldButton:FC<IPasswordFieldButton> = ({ isVision, onClick, error }) => {
  const checkError = () => {
    if (error) {
      return styles.icon_error;
    }
    return '';
  };
  return (
    <button type='button' onClick={onClick}>
      {isVision ? <VisionIcon className={checkError()} />
        : <NoVisionIcon className={checkError()} /> }
    </button>
  );
};
PasswordFieldButton.defaultProps = {
  isVision: true,
  onClick: () => {},
  error: false,
};

export default PasswordFieldButton;
