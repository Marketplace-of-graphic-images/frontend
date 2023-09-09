import React, { FC, useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import ImageCard from '../ImageCardRenderer/components/ImageCard/ImageCard';
import SliderHiddenButton, { leftSliderButtonId, rightSliderButtonId } from './components/SliderHiddenButton/SliderHiddenButton';
import SliderButton from './components/SliderButton/SliderButton';
import { SwiperContext } from '../../services/contexts/contexts';
import styles from './Slider.module.scss';
import 'swiper/scss';
/* eslint-disable jsx-a11y/label-has-associated-control */

interface SliderProps {
  items: Array<Record<string, any>>;
}

const Slider: FC<SliderProps> = ({ items }) => {
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const changeIsBegin = (newVal: boolean) => {
    setIsBegin(newVal);
  };

  const changeIsEnd = (newVal: boolean) => {
    setIsEnd(newVal);
  };

  const contextValues = useMemo(() => ({
    isBegin, isEnd, changeIsBegin, changeIsEnd,
  }), [isBegin, isEnd]);

  return (
    <div className={styles.slider}>
      <SwiperContext.Provider value={contextValues}>

        <label htmlFor={leftSliderButtonId} className={styles.slider__leftBtn}>
          <SliderButton buttonStyle='left' />
        </label>

        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          navigation
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className={styles.slider__swiper}>

          <SliderHiddenButton buttonType='left' />
          <SliderHiddenButton buttonType='right' />

          {items.map((card) => (
            <SwiperSlide key={uuidv4()}>
              <ImageCard title={card.title} imageLink={card.image} key={card.id} />
            </SwiperSlide>
          ))}

        </Swiper>

        <label htmlFor={rightSliderButtonId} className={styles.slider__rightBtn}>
          <SliderButton buttonStyle='right' />
        </label>
        
      </SwiperContext.Provider>
    </div>
  );
};

export default Slider;
