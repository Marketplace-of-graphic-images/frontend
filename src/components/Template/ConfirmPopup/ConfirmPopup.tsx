import React, { FC } from 'react';
import styles from './ConfirmPopup.module.scss';
import PopupWrapper, { PopupWrapperProps } from '../PopupWrapper/PopupWrapper';
import { UniversalButton } from '../../../ui-lib/Button';

interface ConfirmPopupProps extends PopupWrapperProps {
  width?: string;
  height?: string;
  title: string;
  okButtonText?: string;
  onOkButtonClick: () => void,
  cancelButtonText?: string;
  onCancelButtonClick: () => void,
}

const ConfirmPopup: FC<ConfirmPopupProps> = (
  {
    isOpen,
    onClose,
    title,
    onOkButtonClick,
    onCancelButtonClick,
    width = '519px',
    height = 'min-content',
    okButtonText = 'Сохранить',
    cancelButtonText = 'Не сохранять',
  },
) => (
  <PopupWrapper isOpen={isOpen} onClose={onClose}>
    <div className={styles.confirmPopup} style={{ maxWidth: width, height }}>

      <h2 className={styles.confirmPopup__title}>{title}</h2>

      <div className={styles.confirmPopup__buttonsContainer}>
        <UniversalButton
          width={168}
          onClick={onCancelButtonClick}
          buttonStyle='borderGreen'>
          {cancelButtonText}
        </UniversalButton>

        <UniversalButton
          width={168}
          onClick={onOkButtonClick}
          buttonStyle='filledGreen'>
          {okButtonText}
        </UniversalButton>
      </div>

    </div>
  </PopupWrapper>
);

ConfirmPopup.defaultProps = {
  width: '519px',
  height: 'min-content',
  okButtonText: 'Сохранить',
  cancelButtonText: 'Не сохранять',
};

export default ConfirmPopup;
