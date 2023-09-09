import React, { FC, useContext } from 'react';
import styles from './SliderButton.module.scss';
import { SwiperContext } from '../../../../services/contexts/contexts';

interface SliderButtonProps {
  buttonStyle: 'left' | 'right';
}

const SliderButton: FC<SliderButtonProps> = ({ buttonStyle }) => {
  const { isEnd, isBegin } = useContext(SwiperContext);

  let className;

  if (buttonStyle === 'left') {
    className = `
      ${styles.sliderButton} ${styles.sliderButton__left} ${isBegin ? styles.sliderButton__left_disabled : ''} 
    `;
  } else {
    className = `
      ${styles.sliderButton} ${styles.sliderButton__right} ${isEnd ? styles.sliderButton__right_disabled : ''}
    `;
  }

  return (
    <div className={className} />
  );
};

export default SliderButton;
