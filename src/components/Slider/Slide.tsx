import React, { FC } from 'react';
import styles from './Slide.module.scss';

interface SlideProps {
  title: string;
  imageLink: string;
}

const Slide: FC<SlideProps> = ({ title, imageLink }) => (
  <div className={styles.slide}>
    <img alt={title} src={imageLink} className={styles.slide__img} />
    <h3 className={styles.slide__title}>{title}</h3>
  </div>
);

export default Slide;
