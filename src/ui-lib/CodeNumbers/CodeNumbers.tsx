import React, { FC, useRef } from 'react';
import styles from './CodeNumbers.module.scss';
import CodeInput from '../Input/CodeInput/CodeInput';

interface CodeNumbersProps {
  values: Record<string, string>;
  changeValues: (newValues: Record<string, string>) => void;
  isError: boolean;
}

const CodeNumbers: FC<CodeNumbersProps> = ({ values, changeValues, isError }) => {
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);
  const fifthRef = useRef<HTMLInputElement>(null);
  const sixthRef = useRef<HTMLInputElement>(null);

  const switchFocus = (name: string) => {
    switch (true) {
      case name === 'first':
        secondRef?.current?.focus();
        break;

      case name === 'second':
        thirdRef?.current?.focus();
        break;

      case name === 'third':
        fourthRef?.current?.focus();
        break;

      case name === 'fourth':
        fifthRef?.current?.focus();
        break;

      case name === 'fifth':
        sixthRef?.current?.focus();
        break;

      default: break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value.match(/^[0-9]$/) || value.match(/^$/)) {
      changeValues({ [name]: value });

      if (value !== '') switchFocus(name);
    }
  };

  return (
    <div className={styles['code-numbers']}>
      <CodeInput
        onChange={handleChange}
        name='first'
        value={values.first || ''}
        isError={isError} />

      <CodeInput
        onChange={handleChange}
        name='second'
        value={values.second || ''}
        inputRef={secondRef}
        isError={isError} />

      <CodeInput
        onChange={handleChange}
        name='third'
        value={values.third || ''}
        inputRef={thirdRef}
        isError={isError} />

      <CodeInput
        onChange={handleChange}
        name='fourth'
        value={values.fourth || ''}
        inputRef={fourthRef}
        isError={isError} />

      <CodeInput
        onChange={handleChange}
        name='fifth'
        value={values.fifth || ''}
        inputRef={fifthRef}
        isError={isError} />

      <CodeInput
        onChange={handleChange}
        name='sixth'
        value={values.sixth || ''}
        inputRef={sixthRef}
        isError={isError} />
    </div>
  );
};

export default CodeNumbers;
