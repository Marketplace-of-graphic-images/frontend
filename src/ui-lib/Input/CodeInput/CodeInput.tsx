import React, { FC } from 'react';
import styles from './CodeInput.module.scss';

interface CodeInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.Ref<HTMLInputElement>;
  isError?: boolean;
}

const CodeInput: FC<CodeInputProps> = ({
  name, value, onChange, inputRef, isError,
}) => {
  const errorClass = `${styles['input-code']} ${isError ? styles['input-code_error'] : ''}`;

  return (
    <input
      type='text'
      maxLength={1}
      className={errorClass}
      name={name}
      value={value}
      // onKeyUp={combineNumbers}
      onChange={onChange}
      ref={inputRef}
      required />
  );
};

CodeInput.defaultProps = {
  inputRef: null,
  isError: false,
};

export default CodeInput;
