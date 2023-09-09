import React, { FC, useContext } from 'react';
import { useSwiper } from 'swiper/react';
import { SwiperContext } from '../../../../services/contexts/contexts';

interface SliderButtonProps {
  buttonType: 'left' | 'right';
}

export const leftSliderButtonId = 'slider-function-btn-left';
export const rightSliderButtonId = 'slider-function-btn-right';

const SliderHiddenButton: FC<SliderButtonProps> = ({ buttonType }) => {
  const swiper = useSwiper();

  const { changeIsBegin, changeIsEnd } = useContext(SwiperContext);

  const handleClick = () => {
    if (buttonType === 'left') {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }

    changeIsBegin(swiper.isBeginning);
    changeIsEnd(swiper.isEnd);
  };

  return (
    <input
      id={buttonType === 'left' ? leftSliderButtonId : rightSliderButtonId}
      type='button'
      onClick={handleClick}
      style={{
        width: '1px',
        height: '1px',
        opacity: '0',
      }} />
  );
};

export default SliderHiddenButton;
