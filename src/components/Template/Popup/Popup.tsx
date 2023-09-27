import React, { FC, PropsWithChildren } from 'react';
import styles from './Popup.module.scss';
import PopupWrapper, { PopupWrapperProps } from '../PopupWrapper/PopupWrapper';
import { ClosePopupButton } from '../../../ui-lib/Button';

interface PopupProps extends PopupWrapperProps {
  width?: string;
  height?: string;
}

const Popup: FC<PopupProps> = (
  {
    children,
    isOpen,
    onClose,
    width,
    height,
  },
) => (
  <PopupWrapper isOpen={isOpen} onClose={onClose}>
    <div className={styles.popup} style={{ maxWidth: width, height }}>

      <ClosePopupButton onClick={onClose} aria-label='Закрыть' />
        
      {children}

    </div>
  </PopupWrapper>
);

Popup.defaultProps = {
  width: '580px',
  height: 'min-content',
};

export default Popup;
