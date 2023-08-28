import React, { FC } from 'react';
import styles from './BackPopupButton.module.scss';

interface IBackPopupButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
}

const BackPopupButton: FC<IBackPopupButtonProps> = ({ onClick, ...rest }) => (
  <button
    type='button'
    className={styles['back-button']}
    aria-label='назад'
    onClick={onClick}
    {...rest} />
);

export default BackPopupButton;
