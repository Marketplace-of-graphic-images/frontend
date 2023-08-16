import React, { FC } from 'react';
import ValidationErrorTooltip, { IValidationErrorTooltipProps } from '../ValidationErrorTooltip/ValidationErrorTooltip';

const NameErrorTooltip: FC<IValidationErrorTooltipProps> = (
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
  const paragraphs = [
    'Минимальное количество символов: 8',
    'Максимальное количество символов: 254',
    'Допустимые символы:',
  ];
  const listItems = [
    'Латиница',
    'Цифры',
    'Специальные символы (“-”, “_”, “!”, “ . “ )',
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

export default NameErrorTooltip;
