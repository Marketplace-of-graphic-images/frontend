import React, { ComponentPropsWithoutRef, FC } from 'react';
import styles from './ButtonWithBorder.module.scss';

interface ButtonWithBorderProps extends ComponentPropsWithoutRef<'button'> {
  text: string;
  onClick: () => void;
}

const ButtonWithBorder: FC<ButtonWithBorderProps> = (
  {
    text,
    onClick,
    ...rest
  },
) => (
  <button
    type='button'
    className={styles.buttonWithBorder}
    onClick={onClick}
    {...rest}>
    {text}
  </button>
);

export default ButtonWithBorder;
