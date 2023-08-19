import React, { useState } from 'react';
import { ErrorIcon } from '../../Icons';
import styles from './FieldErrorIcon.module.scss';

const FieldErrorIcon = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className={styles.main}
      onMouseEnter={() => {
        setShowMessage(true);
      }}
      onMouseLeave={() => {
        setShowMessage(false);
      }}>
      <ErrorIcon />
      {showMessage && <p className={styles.test}>test</p>}
    </div>
  );
};
export default FieldErrorIcon;
