import React, { FC } from 'react';
import styles from './BackPageButton.module.scss';

interface IBackPopupButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
}

const BackPageButton: FC<IBackPopupButtonProps> = ({ onClick, ...rest }) => (
  <button
    type='button'
    className={styles['back-button']}
    aria-label='назад'
    onClick={onClick}
    {...rest} />
);

export default BackPageButton;
