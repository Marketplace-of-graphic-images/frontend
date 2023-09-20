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

    <div className={styles.icon}>
      {icon}
    </div>
    
    <p className={styles.text}>{text}</p>
  </button>
);
export default PopularButton;
