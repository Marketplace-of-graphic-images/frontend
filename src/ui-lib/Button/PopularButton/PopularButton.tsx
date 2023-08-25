import React, { FC } from 'react';
import styles from './PopularButton.module.scss';

interface IpopularButton extends React.ComponentPropsWithoutRef<'button'> {
  text: string
  onClick: () => void
  icon: any
}

const PopularButton: FC<IpopularButton> = ({
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
    {icon}
  </button>
);
export default PopularButton;
