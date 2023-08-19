import React, { FC } from 'react';
import styles from './ClosePopupButton.module.scss';

interface ClosePopupButtonProps {
  label?: string;
  onClick: () => void;
}

const ClosePopupButton: FC<ClosePopupButtonProps> = ({ label, onClick }) => (
  <button
    type='button'
    className={styles['close-button']}
    aria-label={label}
    onClick={onClick} />
);

ClosePopupButton.defaultProps = {
  label: '',
};

export default ClosePopupButton;
