import React, { useState } from 'react';
import UniversalInput from '../UniversalInput/UniversalInput';
import PasswordFieldButton from '../../Button/PasswordFieldButton/PasswordFieldButton';

interface IPasswordInput extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
  apiError?: string;
  label?: string;
  validError?: boolean;
  placeholder?: string;
  isErrorIconShow?: boolean;
}

const PasswordInput: React.FC<IPasswordInput> = (
  {
    validError,
    apiError,
    label,
    placeholder,
    isErrorIconShow,
    id,
    ...rest
  },
) => {
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
      id={id}
      type={inputState.type}
      placeholder={placeholder}
      label={label}
      errorMessage={apiError}
      validError={validError}
      isErrorIconShow={isErrorIconShow}
      {...rest}
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
  placeholder: 'Введите пароль...',
  isErrorIconShow: true,
};

export default PasswordInput;
