import React, { FC, PropsWithChildren } from 'react';
import styles from './SectionWithSlider.module.scss';
import Slider from '../../Slider/Slider';

interface SectionWithSliderProps extends PropsWithChildren {
  items: Array<Record<string, any>>;
}

const SectionWithSlider: FC<SectionWithSliderProps> = (
  { 
    items,
    children,
  },
) => (
  <section className={styles.sectionWithSlider}>

    {children}
    <Slider items={items} />

  </section>
);

export default SectionWithSlider;
