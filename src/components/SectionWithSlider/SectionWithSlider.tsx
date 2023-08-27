import React, { FC } from 'react';
import styles from './SectionWithSlider.module.scss';
import Slider from '../Slider/Slider';

interface SectionWithSliderProps {
  titleAccent: string;
  title: string;
  subtitle: string;
}

const SectionWithSlider: FC<SectionWithSliderProps> = ({ titleAccent, title, subtitle }) => {
  const DATA = [
    { id: 0, title: 'Еда', image: '#' },
    { id: 1, title: 'Животные', image: '#' },
    { id: 2, title: 'Спорт', image: '#' },
    { id: 3, title: 'Офис', image: '#' },
    { id: 4, title: 'Котики', image: '#' },
    { id: 5, title: 'Закат', image: '#' },
    { id: 6, title: 'Природа', image: '#' },
    { id: 7, title: 'Город', image: '#' },
  ];

  return (
    <section className={styles.sectionWithSlider}>

      <h2 className={styles.sectionWithSlider__title}>
        <span className={styles.sectionWithSlider__title_accent}>{`${titleAccent} `}</span>
        {title}
      </h2>

      <p className={styles.sectionWithSlider__subtitle}>{subtitle}</p>
      <Slider items={DATA} />

    </section>
  );
};

export default SectionWithSlider;
