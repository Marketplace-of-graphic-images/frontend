import React, { FC } from 'react';
import styles from './ClosePopupButton.module.scss';

interface IClosePopupButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
}

const ClosePopupButton: FC<IClosePopupButtonProps> = ({ onClick, ...rest }) => (
  <button
    type='button'
    className={styles['close-button']}
    aria-label='закрыть'
    onClick={onClick}
    {...rest} />
);

export default ClosePopupButton;
