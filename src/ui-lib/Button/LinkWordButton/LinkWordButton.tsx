import React from 'react';
import styles from './LinkWordButton.module.scss';

interface LinkWordButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title?: string;
  buttonName: string;
  onClick?: () => void;
}

const LinkWordButton: React.FC<LinkWordButtonProps> = ({
  title,
  buttonName,
  onClick,
  ...rest
}) => (
  <div className={styles.wrapper}>
    <p>{title}</p>
    <button className={styles.button} type='button' onClick={onClick} {...rest}>
      {buttonName}
    </button>

  </div>
);

LinkWordButton.defaultProps = {
  title: '',
  onClick: () => {},
};

export default LinkWordButton;
