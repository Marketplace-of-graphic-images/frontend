import React, { FC } from 'react';
import ValidationErrorTooltip, { IValidationErrorTooltipProps } from '../ValidationErrorTooltip/ValidationErrorTooltip';

const PasswordErrorTooltip: FC<IValidationErrorTooltipProps> = (
  {
    opacity,
    position,
    width,
    top,
    left,
    right,
    bottom,
  },
) => {
  const paragraphs = ['Допустимые символы:'];
  const listItems = [
    'Латиница',
    'Цифры',
    'Специальные символы (“_”, “!”, “ . “ )',
  ];

  return (
    <ValidationErrorTooltip
      paragraphElemArray={paragraphs}
      listElemArray={listItems}
      opacity={opacity}
      position={position}
      width={width}
      top={top}
      left={left}
      right={right}
      bottom={bottom} />
  );
};

export default PasswordErrorTooltip;
