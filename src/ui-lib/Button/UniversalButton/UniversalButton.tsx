/* eslint-disable */
import React from 'react';
import styles from './UniversalButton.module.scss';

interface IUniversalButton extends React.ComponentPropsWithoutRef<'button'> {
  size?: 'large' | 'medium' | 'small_medium' |'small';
}

const UniversalButton: React.FC<IUniversalButton> = ({
  size = 'large',
  type = 'submit',
  ...rest
}) => (
  <button
    type= {type}
    className={`${styles.button} ${size ? styles[size] : ''}`}
    {...rest} />
);


export default UniversalButton;
