import React from 'react';
import UniversalInput, { IUniversalInput } from '../UniversalInput/UniversalInput';
import { PATTERN_EMAIL } from '../../../constants/constants';

interface IEmailInput extends IUniversalInput {
  apiError?: string;
}

const EmailInput: React.FC<IEmailInput> = ({
  apiError,
  label = 'Адрес электронной почты',
  validError,
  id,
  borderColor = 'black',
  ...rest
}) => (
  <UniversalInput
    id={id}
    type='email'
    placeholder='Введите Email...'
    label={label}
    errorMessage={apiError}
    validError={validError}
    errorType='email'
    pattern={PATTERN_EMAIL}
    borderColor={borderColor}
    {...rest} />
);

EmailInput.defaultProps = {
  apiError: '',
};

export default EmailInput;
