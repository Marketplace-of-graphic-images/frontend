import React, {
  FC, PropsWithChildren, useEffect, useState, 
} from 'react';
import styles from './NotificationPopupOnRight.module.scss';
import PopupWrapper from '../PopupWrapper/PopupWrapper';
import { ClosePopupButton } from '../../../ui-lib/Button';

interface NotificationModalOnRightProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPopupOnRight: FC<NotificationModalOnRightProps> = (
  {
    isOpen,
    onClose,
    children,
  },
) => {
  const [className, setClassName] = useState(styles.notificationPopupOnRight);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setClassName(`${styles.notificationPopupOnRight} ${styles.notificationPopupOnRight_open}`);
      }, 1);
    } else {
      setClassName(styles.notificationPopupOnRight);
    }
  }, [isOpen]);
  return (
    <PopupWrapper isOpen={isOpen} onClose={onClose}>
      <div className={className}>

        <ClosePopupButton onClick={onClose} />
        {children}

      </div>
    </PopupWrapper>
  );
};

export default NotificationPopupOnRight;
