import React, { useState } from 'react';
import UniversalInput, { IUniversalInput } from '../UniversalInput/UniversalInput';
import PasswordFieldButton from '../../Button/PasswordFieldButton/PasswordFieldButton';
import { PATTERN_PASSWORD } from '../../../constants/constants';
/* eslint-disable ternary/no-unreachable */

interface IPasswordInput extends IUniversalInput {
  customToggleType?: () => void;
  customInputState?: { type: string, visionIcon: boolean };
}

const PasswordInput: React.FC<IPasswordInput> = (
  {
    validError,
    apiErrorMessage,
    label = 'Пароль',
    customToggleType,
    customInputState,
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
      type={customInputState ? customInputState.type : inputState.type}
      label={label}
      apiErrorMessage={apiErrorMessage}
      validError={validError}
      pattern={PATTERN_PASSWORD}
      {...rest}
      icon={(
        <PasswordFieldButton
          isVision={customInputState ? customInputState.visionIcon : inputState.visionIcon}
          onClick={toggleType}
          error={
          !!(validError || apiErrorMessage)
        } />
      )} />
  );
};

PasswordInput.defaultProps = {
  customToggleType: undefined,
  customInputState: undefined,
};

export default PasswordInput;
