import React, { FC } from 'react';
import styles from './ImageCard.module.scss';

interface SlideProps {
  title: string;
  imageLink: string;
}

const ImageCard: FC<SlideProps> = ({ title, imageLink }) => (
  <div className={styles.card}>
    <img alt={title} src={imageLink} className={styles.card__img} />
    <h3 className={styles.card__title}>{title}</h3>
  </div>
);

export default ImageCard;
