/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './UniversalButton.module.scss';

interface IUniversalButton extends React.ComponentPropsWithoutRef<'button'> {
  isFilled?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const UniversalButton: React.FC<IUniversalButton> = ({
  width, height,
  isFilled,
  type = 'submit',
  className = '',
  ...rest
}) => (
  <button
    type={type}
    style={{ width: `${String(width)}px`, height: `${String(height)}px` }}
    className={`${isFilled ? styles.filledButton : styles.emptyButton} ${className}`}
    {...rest} />
);

UniversalButton.defaultProps = {
  isFilled: true,
  width: 484,
  height: 48,
  className: '',
};

export default UniversalButton;
