import React, { FC } from 'react';
import styles from './ImageCard.module.scss';
import { Link } from 'react-router-dom';
import imageLink from '../../../../assets/images/pictures/404.png'
import LikeButton from 'ui-lib/Button/LikeButton/LikeButton';

const ImageCard = () => (
  <div className={styles.card}>
    <span className={styles.card__priceTag}>15000</span>
    <span className={styles.card__likeButtonSpan}>
      <LikeButton isLiked={true} />
    </span>
    <img alt='Название изображения' src={imageLink} className={styles.card__img} />
    <h3 className={styles.card__title}>Собачка в наушниках</h3>
    <Link className={styles.card__authorLink} to="#">Автор</Link>
  </div>
);

export default ImageCard;
