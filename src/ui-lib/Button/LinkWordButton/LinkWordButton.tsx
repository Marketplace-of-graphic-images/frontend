import React, { FC, ReactComponentElement } from 'react';
import styles from './LinkWordButton.module.scss';

interface LinkWordButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title?: string;
  buttonName: string;
  className?: string;
  icon?: ReactComponentElement<FC> | null;
  onClick?: () => void;
}

const LinkWordButton: React.FC<LinkWordButtonProps> = ({
  title,
  buttonName,
  onClick,
  className = '',
  icon = null,
  ...rest
}) => (
  <div className={styles.wrapper}>
    {!!title && <span className={`${styles.text} ${className}`}>{`${title} `}</span>}
    <button className={`${styles.button} ${className} ${icon !== null ? styles.withIcon : ''}`} type='button' onClick={onClick} {...rest}>
      {buttonName}
      {icon !== null && icon}
    </button>
  </div>
);

LinkWordButton.defaultProps = {
  title: '',
  onClick: () => {},
  className: '',
  icon: null,
};

export default LinkWordButton;
