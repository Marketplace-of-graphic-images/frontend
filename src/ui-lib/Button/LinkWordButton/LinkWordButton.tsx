import React from 'react';
import styles from './LinkWordButton.module.scss';

interface LinkWordButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title?: string;
  buttonName: string;
  className?: string;
  onClick?: () => void;
}

const LinkWordButton: React.FC<LinkWordButtonProps> = ({
  title,
  buttonName,
  onClick,
  className = '',
  ...rest
}) => (
  <div className={styles.wrapper}>
    {!!title && <span className={`${styles.text} ${className}`}>{`${title} `}</span>}
    <button className={`${styles.button} ${className}`} type='button' onClick={onClick} {...rest}>
      {buttonName}
    </button>
  </div>
);

LinkWordButton.defaultProps = {
  title: '',
  onClick: () => {},
  className: '',
};

export default LinkWordButton;
