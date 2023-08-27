import React, { FC, useMemo } from 'react';
import styles from './OtpCode.module.scss';
import CodeInput from '../Input/CodeInput/CodeInput';
import { RE_DIGIT } from '../../constants/constants';
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */

interface OtpCodeProps {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
  onEnterPress: () => void;
  isError: boolean;
}

const OtpCode: FC<OtpCodeProps> = ({
  value, valueLength, onChange, onEnterPress, isError,
}) => {
  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push('');
      }
    }

    return items;
  }, [value, valueLength]);

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling = target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling = target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const { target } = e;
    let targetValue = target.value;
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';

    const nextInputEl = target.nextElementSibling as HTMLInputElement | null;

    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
      return;
    }

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);
      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      focusToNextInput(target);
    } else
    if (targetValueLength === valueLength) {
      onChange(targetValue);

      target.blur();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === 'Enter' && value.trim().length === 6) {
      onEnterPress();
    }

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;

    target.setSelectionRange(0, targetValue.length);

    if (key !== 'Backspace' || targetValue !== '') {
      return;
    }

    focusToPrevInput(target);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    const prevInputEl = target.previousElementSibling as HTMLInputElement | null;

    if (prevInputEl && prevInputEl.value === '') {
      return prevInputEl.focus();
    }

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <div className={styles.code}>
      {valueItems.map((digit, idx) => (
        <CodeInput
          key={idx}
          name='first'
          inputMode='numeric'
          autoComplete='one-time-code'
          pattern='\d{1}'
          maxLength={valueLength}
          value={digit}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          isError={isError}
          autoFocus={idx === 0} />
      ))}
    </div>
  );
};

export default OtpCode;
