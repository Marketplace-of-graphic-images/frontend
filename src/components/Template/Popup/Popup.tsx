import React, {
  FC, PropsWithChildren, useEffect, useState,
} from 'react';
import styles from './Popup.module.scss';
import ClosePopupButton from '../../../ui-lib/Button/ClosePopupButton/ClosePopupButton';

interface PopupProps extends PropsWithChildren {
  maxWidth?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Popup: FC<PopupProps> = (
  {
    children,
    isOpen,
    onClose,
    maxWidth,
  },
) => {
  const [overlay, setOverlay] = useState<Element | null>(null);

  useEffect(() => {
    setOverlay(document.querySelector(`.${styles.popup}`));
  }, []);

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

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <section className={styles.popup} style={{ display: isOpen ? 'block' : 'none' }} onClick={handleClickOverlay}>
      <div className={styles.popup__container} style={{ maxWidth }}>

        <ClosePopupButton onClick={onClose} aria-label='Закрыть' />
        {children}

      </div>
    </section>
  );
};

Popup.defaultProps = {
  maxWidth: '580px',
};

export default Popup;
