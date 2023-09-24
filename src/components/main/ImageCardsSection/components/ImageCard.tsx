import React from 'react';
import LikeButton from 'ui-lib/Button/LikeButton/LikeButton';
import styles from './ImageCard.module.scss';
import imageLink from '../../../../assets/images/pictures/404.png';

const ImageCard = () => (
  <div className={styles.card}>
    <span className={styles.card__priceTag}>15000</span>
    <span className={styles.card__likeButtonSpan}>
      <LikeButton isLiked />
    </span>
    <img alt='Название изображения' src={imageLink} className={styles.card__img} />
    <h3 className={styles.card__title}>Собачка в наушниках</h3>
    <button type='button' className={styles.card__authorButton} onClick={() => {}}>Автор</button>
  </div>
);

export default ImageCard;
