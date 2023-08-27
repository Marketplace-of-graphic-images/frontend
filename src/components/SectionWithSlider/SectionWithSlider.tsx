import React, { FC } from 'react';
import styles from './SectionWithSlider.module.scss';
import Slider from '../Slider/Slider';

interface SectionWithSliderProps {
  items: Array<Record<string, any>>;
  titleAccent: string;
  title: string;
  subtitle: string;
}

const SectionWithSlider: FC<SectionWithSliderProps> = (
  { 
    items,
    titleAccent, 
    title, 
    subtitle, 
  },
) => (
  <section className={styles.sectionWithSlider}>

    <h2 className={styles.sectionWithSlider__title}>
      <span className={styles.sectionWithSlider__title_accent}>{`${titleAccent} `}</span>
      {title}
    </h2>

    <p className={styles.sectionWithSlider__subtitle}>{subtitle}</p>
    <Slider items={items} />

  </section>
);

export default SectionWithSlider;
