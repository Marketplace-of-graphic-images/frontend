import React from 'react';
import UniversalInput from '../UniversalInput/UniversalInput';

interface IEmailInput extends React.ComponentPropsWithoutRef<'input'> {
  apiError?: string;
  label?:string;
  validError? : boolean;
}

const EmailInput: React.FC<IEmailInput> = ({ apiError, label, validError }) => (
  <UniversalInput
    type='email'
    placeholder='Введите Email...'
    label={label}
    errorMessage={apiError}
    validError={validError} />
);
EmailInput.defaultProps = {
  apiError: '',
  label: 'Адрес электронной почты',
  validError: false,
};

export default EmailInput;
