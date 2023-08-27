import React, { ComponentPropsWithoutRef, FC, useState } from 'react';
import styles from './ButtonWithArrow.module.scss';
import ArrowUp from '../../Icons/ArrowUp/ArrowUp';
import ArrowDown from '../../Icons/ArrowDown/ArrowDown';

interface ButtonWithBorderProps extends ComponentPropsWithoutRef<'button'> {
  text: string;
  onClick: () => void;
}

const ButtonWithArrow: FC<ButtonWithBorderProps> = (
  {
    text,
    onClick,
    ...rest
  },
) => {
  const [inOpen, setInOpen] = useState(false);

  const handleClick = () => {
    onClick();
    setInOpen(!inOpen);
  };

  return (
    <button
      type='button'
      className={styles.buttonWithArrow}
      onClick={handleClick}
      {...rest}>
      {text}
      {inOpen ? <ArrowUp /> : <ArrowDown />}
    </button>
  );
};

export default ButtonWithArrow;
