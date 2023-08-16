import React, { useState } from 'react';

// Иконки
import ErrorIcon from '../../Icons/Error/ErrorIcon';
import NoVisionIcon from '../../Icons/NoVision/NoVisionIcon';
import VisionIcon from '../../Icons/Vision/VisionIcon';

// Стили
import styles from './PasswordInput.module.scss';

const PasswordInput: React.FC<React.ComponentPropsWithoutRef<'input'>> = () => {
  const [inputState, setInputState] = useState({
    type: 'password',
    warning: false,
    visionIcon: false,
  });

  const toggleType = () => {
    if (inputState.type === 'password') {
      setInputState((prev) => ({ ...prev, type: 'text' }));
      setInputState((prev) => ({ ...prev, visionIcon: true }));
    } else {
      setInputState((prev) => ({ ...prev, type: 'password' }));
      setInputState((prev) => ({ ...prev, visionIcon: false }));
    }
  };
  return (
    <div
      className={`${styles.inputContainer} ${
        inputState.warning ? styles.warning : ''
      }`}>
      <input
        className={styles.input}
        placeholder='Введите пароль...'
        type={inputState.type} />

      {inputState.visionIcon ? (
        <VisionIcon onClick={toggleType} />
      ) : (
        <NoVisionIcon onClick={toggleType} />
      )}
      {inputState.warning && <ErrorIcon />}
    </div>
  );
};

export default PasswordInput;
