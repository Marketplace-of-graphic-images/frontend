import React, { FC, PropsWithChildren } from 'react';
import styles from './Popup.module.scss';
import PopupWrapper from '../PopupWrapper/PopupWrapper';
import { ClosePopupButton } from '../../../ui-lib/Button';

interface PopupProps extends PropsWithChildren {
  width?: string;
  height?: string;
  isOpen: boolean;
  onClose: () => void;
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
