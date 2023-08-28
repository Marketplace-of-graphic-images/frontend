import React, {
  FC, PropsWithChildren, useEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './Popup.module.scss';
import ClosePopupButton from '../../../ui-lib/Button/ClosePopupButton/ClosePopupButton';

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
) => {
  const [overlay, setOverlay] = useState<Element | null>(null);

  useEffect(() => {
    setOverlay(document.querySelector(`.${styles.popup}`));
  }, [isOpen]);

  useEffect(() => {
    const onEscPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onEscPress);

    return () => {
      document.removeEventListener('keydown', onEscPress);
    };
  }, [onClose]);

  const handleClickOverlay = (e: React.MouseEvent) => {
    if (e.target === overlay) {
      onClose();
    }
  };

  return createPortal(
    isOpen && (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <section
      className={styles.popup} 
      style={{ display: isOpen ? 'block' : 'none' }}
      onClick={handleClickOverlay}>
      <div
        className={styles.popup__container} 
        style={{ maxWidth: width, height }}>

        <ClosePopupButton onClick={onClose} aria-label='Закрыть' />
        {children}

      </div>
    </section>
    ),
    document.body,
  );
};

Popup.defaultProps = {
  width: '580px',
  height: 'min-content',
};

export default Popup;
