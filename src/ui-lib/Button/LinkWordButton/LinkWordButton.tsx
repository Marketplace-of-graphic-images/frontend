import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from './LinkWordButton.module.scss';

type TLinkWordButton = {
  title?: string;
  buttonName: string;
  path: string;
};

const LinkWordButton: React.FC<TLinkWordButton> = ({
  title,
  buttonName,
  path,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <button className={styles.button} type='button' onClick={() => navigate(path)}>
        {buttonName}
      </button>

    </div>
  );
};

LinkWordButton.defaultProps = {
  title: '',
};

export default LinkWordButton;
