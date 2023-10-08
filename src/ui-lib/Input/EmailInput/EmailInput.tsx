import React from 'react';
import UniversalInput, { IUniversalInput } from '../UniversalInput/UniversalInput';

interface IEmailInput extends IUniversalInput {
  isEmailValidation?: boolean;
}

const EmailInput: React.FC<IEmailInput> = ({
  label = 'Адрес электронной почты',
  isEmailValidation,
  ...rest
}) => (
  <UniversalInput
    type={isEmailValidation ? 'email' : 'text'}
    label={label}
    maxLength={256}
    {...rest} />
);

EmailInput.defaultProps = {
  isEmailValidation: true,
};

export default EmailInput;
