/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';

// Иконки
import ErrorIcon from '../../Icons/Error/ErrorIcon';
import NoVisionIcon from '../../Icons/NoVision/NoVisionIcon';
import VisionIcon from '../../Icons/Vision/VisionIcon';

// Стили
import styles from './PasswordInput.module.scss';

interface IPasswordInput extends React.ComponentPropsWithoutRef<'input'> {
  errorMessage?: string;
}

// Как лучше состояние warning реализовать? Через пропсы или через внутреннее состояние компонента
const PasswordInput: React.FC<IPasswordInput> = ({ errorMessage }) => {
  const [inputState, setInputState] = useState({
    type: 'password',
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
    <div>

      <label className={styles.label} htmlFor='pass'>Пароль</label>
      <div
        className={`${styles.inputContainer} ${
          errorMessage ? styles.warning : ''
        }`}>
        <input
          id='pass'
          className={styles.input}
          placeholder='Введите пароль...'
          type={inputState.type} />

        {inputState.visionIcon ? (
          <VisionIcon onClick={toggleType} />
        ) : (
          <NoVisionIcon onClick={toggleType} />
        )}
        {errorMessage && <ErrorIcon />}
      </div>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default PasswordInput;
