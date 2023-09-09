import React, { useState } from 'react';
import UniversalInput, { IUniversalInput } from '../UniversalInput/UniversalInput';
import PasswordFieldButton from '../../Button/PasswordFieldButton/PasswordFieldButton';
/* eslint-disable ternary/no-unreachable */

interface IPasswordInput extends IUniversalInput {
  apiError?: string;
  customToggleType?: () => void;
  customInputState?: { type: string, visionIcon: boolean };
}

const PasswordInput: React.FC<IPasswordInput> = (
  {
    validError = false,
    apiError = '',
    label = 'Пароль',
    placeholder = 'Введите пароль...',
    isErrorIconShow = true,
    id,
    customToggleType,
    customInputState,
    borderColor = 'black',
    ...rest
  },
) => {
  const [inputState, setInputState] = useState({
    type: 'password',
    visionIcon: false,
  });

  const toggleType = () => {
    if (customToggleType) {
      customToggleType();
      return;
    }

    if (inputState.type === 'password') {
      setInputState({ type: 'text', visionIcon: true });
    } else {
      setInputState({ type: 'password', visionIcon: false });
    }
  };

  return (
    <UniversalInput
      id={id}
      type={customInputState ? customInputState.type : inputState.type}
      placeholder={placeholder}
      label={label}
      errorMessage={apiError}
      validError={validError}
      isErrorIconShow={isErrorIconShow}
      errorType='password'
      borderColor={borderColor}
      {...rest}
      icon={(
        <PasswordFieldButton
          isVision={customInputState ? customInputState.visionIcon : inputState.visionIcon}
          onClick={toggleType}
          error={
          !!(validError || apiError)
        } />
      )} />
  );
};

PasswordInput.defaultProps = {
  apiError: '',
  customToggleType: undefined,
  customInputState: undefined,
};

export default PasswordInput;
