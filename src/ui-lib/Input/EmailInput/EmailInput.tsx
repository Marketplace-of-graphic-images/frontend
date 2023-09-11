import React from 'react';
import UniversalInput, { IUniversalInput } from '../UniversalInput/UniversalInput';
import { PATTERN_EMAIL } from '../../../constants/constants';

// interface IEmailInput extends IUniversalInput {}

const EmailInput: React.FC<IUniversalInput> = ({
  label = 'Адрес электронной почты',
  ...rest
}) => (
  <UniversalInput
    type='text'
    label={label}
    pattern={PATTERN_EMAIL}
    {...rest} />
);

export default EmailInput;
