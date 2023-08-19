import React, { useState } from 'react';
import UniversalInput from '../UniversalInput/UniversalInput';
import PasswordFieldButton from '../../Button/PasswordFieldButton/PasswordFieldButton';

interface IPasswordInput extends React.ComponentPropsWithoutRef<'input'> {
  apiError?: string;
  label?:string;
  validError? : boolean;
}

const PasswordInput: React.FC<IPasswordInput> = ({ validError, apiError, label }) => {
  const [inputState, setInputState] = useState({
    type: 'password',
    visionIcon: false,
  });

  const toggleType = () => {
    if (inputState.type === 'password') {
      setInputState({ type: 'text', visionIcon: true });
    } else {
      setInputState({ type: 'password', visionIcon: false });
    }
  };
  return (
    <UniversalInput
      type={inputState.type}
      placeholder='Введите пароль...'
      label={label}
      errorMessage={apiError}
      validError={validError}
      icon={(
        <PasswordFieldButton
          isVision={inputState.visionIcon}
          onClick={toggleType}
          error={
          !!(validError || apiError)
        } />
)} />
  );
};
PasswordInput.defaultProps = {
  apiError: '',
  label: 'Пароль',
  validError: false,
};

export default PasswordInput;
