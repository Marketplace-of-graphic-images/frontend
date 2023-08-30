import React, { ComponentPropsWithoutRef, FC, useState } from 'react';
import styles from './ButtonWithArrow.module.scss';
import ArrowUp from '../../Icons/ArrowUp/ArrowUp';
import ArrowDown from '../../Icons/ArrowDown/ArrowDown';

interface ButtonWithBorderProps extends ComponentPropsWithoutRef<'button'> {
  text: string;
  onClick: () => void;
  isBorder?: boolean;
}

const ButtonWithArrow: FC<ButtonWithBorderProps> = (
  {
    text,
    onClick,
    isBorder,
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
      className={`${styles.buttonWithArrow} ${isBorder ? styles.buttonWithArrow_border : ''}`}
      onClick={handleClick}
      {...rest}>
      {text}
      {inOpen
        ? <ArrowUp className={styles.buttonWithArrow__arrow} />
        : <ArrowDown className={styles.buttonWithArrow__arrow} />}
    </button>
  );
};

ButtonWithArrow.defaultProps = {
  isBorder: false,
};

export default ButtonWithArrow;
