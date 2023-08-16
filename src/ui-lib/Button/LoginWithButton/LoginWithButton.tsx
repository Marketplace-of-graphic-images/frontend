import React from 'react';
import styles from './LoginWithButton.module.scss';

interface ILoginWithButton extends React.ComponentPropsWithoutRef<'button'> {
  icon: any;
  title: string;
}

const LoginWithButton: React.FC<ILoginWithButton> = ({
  title,
  icon,
  ...rest
}) => (
  <button type='button' className={styles.button} {...rest}>
    {icon}
    {title}
  </button>
);

export default LoginWithButton;
