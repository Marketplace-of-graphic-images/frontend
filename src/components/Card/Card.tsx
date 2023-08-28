import React, { FC } from 'react';
import styles from './Card.module.scss';

interface SlideProps {
  title: string;
  imageLink: string;
}

const Card: FC<SlideProps> = ({ title, imageLink }) => (
  <div className={styles.card}>
    <img alt={title} src={imageLink} className={styles.card__img} />
    <h3 className={styles.card__title}>{title}</h3>
  </div>
);

export default Card;
