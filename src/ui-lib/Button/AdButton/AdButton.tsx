import React, { FC } from 'react';
import styles from './AdButton.module.scss';

interface IAdButton extends React.ComponentPropsWithoutRef<'button'> {
  text: string
  onClick: () => void
}

const AdButton: FC<IAdButton> = ({
  text, 
  onClick, 
  ...rest 
}) => (
  <button
    type='button'
    className={styles.button}
    onClick={onClick}
    {...rest}>
    <p className={styles.text}>{text}</p>
  </button>
);
export default AdButton;
