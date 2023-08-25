import React, { FC, useState } from 'react';
import Slide from './Slide';
import styles from './Slider.module.scss';
import SliderButton from '../../ui-lib/Button/SliderButton/SliderButton';
/* eslint-disable @typescript-eslint/no-unsafe-call */

interface SliderProps {
  items: Record<string, any>;
}

const Slider: FC<SliderProps> = ({ items }) => {
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const changeSlide = (direction = 1) => {
    const slideNumber = (slide + direction) % items.length;
    setSlide(slideNumber);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  return (
    <div
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}>

      <SliderButton 
        buttonStyle='left' 
        onClick={() => changeSlide(-1)} 
        disabled={slide === 0}
        style={{ transform: 'translateY(-27px)' }} />

      <div className={styles.slider__list}>
        <div
          className={styles.slider__container}
          style={{ transform: `translateX(-${slide * (302 + 24)}px)` }}>

          {items.map(({ title, image, id }) => (
            <Slide title={title} imageLink={image} key={id} />
          ))}
        </div>
      </div>

      <SliderButton 
        buttonStyle='right' 
        onClick={() => changeSlide(+1)}
        disabled={slide - 4 === 0}
        style={{ transform: 'translateY(-27px)' }} />
    </div>
  );
};

export default Slider;
