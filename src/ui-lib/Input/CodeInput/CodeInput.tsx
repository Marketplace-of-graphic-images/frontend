import React, { FC } from 'react';
import styles from './CodeInput.module.scss';

interface CodeInputProps extends React.ComponentPropsWithoutRef<'input'> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
}

const CodeInput: FC<CodeInputProps> = ({
  name, value, onChange, isError, ...rest
}) => {
  const errorClass = `${styles['input-code']} ${isError ? styles['input-code_error'] : ''}`;

  return (
    <input
      type='text'
      className={errorClass}
      value={value}
      onChange={onChange}
      required
      {...rest} />
  );
};

CodeInput.defaultProps = {
  isError: false,
};

export default CodeInput;
