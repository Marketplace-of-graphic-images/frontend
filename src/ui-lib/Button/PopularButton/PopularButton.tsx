import React, { FC } from 'react';
import styles from './PopularButton.module.scss';

interface IPopularButton extends React.ComponentPropsWithoutRef<'button'> {
  text: string
  onClick: () => void
  icon: any
}

const PopularButton: FC<IPopularButton> = ({
  text, 
  onClick, 
  icon, 
  ...rest 
}) => (
  <button
    type='button'
    className={styles.button}
    onClick={onClick}
    {...rest}>
    <p className={styles.text}>{text}</p>

    <div className={styles.icon}>
      {icon}
    </div>

  </button>
);
export default PopularButton;
