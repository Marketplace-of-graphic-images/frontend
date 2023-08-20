import React, { FC } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, ...rest }) => (
  <label className={styles.checkbox__label} htmlFor={styles.checkbox}>
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
      className={styles.checkbox}
      id={styles.checkbox}
      {...rest} />
    <span className={styles.checkbox__visible} />
  </label>
);

export default Checkbox;
