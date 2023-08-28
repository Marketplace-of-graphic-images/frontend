/* eslint-disable */
// Отключаем eslint, т.к. он ругается на spread оператор в пропсах,
// считаю что он нужен в данном случае
import React from 'react';
import styles from './EmptyButton.module.scss';

interface IEmptyButton extends React.ComponentPropsWithoutRef<'button'> {
  size?: 'large' | 'medium' | 'small';
}

const EmptyButton: React.FC<IEmptyButton> = ({
  size = 'large',
  type = 'submit',
  ...rest
}) => (
  <button
    type= {type}
    className={`${styles.button} ${size ? styles[size] : ''}`}
    {...rest} />
);


export default EmptyButton;
