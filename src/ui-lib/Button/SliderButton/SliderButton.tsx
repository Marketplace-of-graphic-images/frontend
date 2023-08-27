import React, { ComponentPropsWithoutRef, FC } from 'react';
import styles from './SliderButton.module.scss';

interface SliderButtonProps extends ComponentPropsWithoutRef<'button'> {
  buttonStyle: 'left' | 'right';
  onClick: () => void;
}

const SliderButton: FC<SliderButtonProps> = ({ buttonStyle, onClick, ...rest }) => {
  const className = `
    ${styles.sliderButton} ${buttonStyle === 'left' ? styles.sliderButton_left : styles.sliderButton_right}
  `;
  
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      {...rest} />
  );
};

export default SliderButton;
