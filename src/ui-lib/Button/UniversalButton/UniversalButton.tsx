/* eslint-disable */
// Отключаем eslint, т.к. он ругается на spread оператор в пропсах,
// считаю что он нужен в данном случае
import React from 'react';
import styles from './UniversalButton.module.scss';

interface IUniversalButton extends React.ComponentPropsWithoutRef<'button'> {
  size?: 'large' | 'medium' | 'small';
}

const UniversalButton: React.FC<IUniversalButton> = ({
  size = 'large',
  ...rest
}) => (
  <button
    type='submit'
    className={`${styles.button} ${size ? styles[size] : ''}`}
    {...rest} />
);

export default UniversalButton;
