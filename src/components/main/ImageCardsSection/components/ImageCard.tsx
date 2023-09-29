import React, { FC } from 'react';
import LikeButton from 'ui-lib/Button/LikeButton/LikeButton';
import { ImageButton } from 'ui-lib/Button';
import styles from './ImageCard.module.scss';

export interface ImageCardProps {
  id: number;
  name: string;
  image: string;
  license?: boolean;
  isFavorited?: boolean;
  price?: number;
  authorUsername: string;
  authorId: number;
  onImageClick: () => void;
  onAuthorClick: () => void;
  onLikeClick: () => void;
}

const ImageCard : FC<ImageCardProps> = ({
  id, name, image, license, isFavorited, 
  price, authorUsername, authorId, 
  onAuthorClick, onImageClick, onLikeClick,
}) => (
  <div className={styles.card}>
    <ImageButton type='button' onClick={onImageClick} image={image} alt={name} />
    {!!license && (
      <span className={styles.card__priceTag}>
        {price} 
        {' ₽'}
      </span>
    )}
    <span className={styles.card__likeButtonSpan}>
      <LikeButton isLiked={isFavorited} onClick={onLikeClick} />
    </span>
    <h3 className={styles.card__title}>{name}</h3>
    <button type='button' className={styles.card__authorButton} onClick={onAuthorClick}>{authorUsername}</button>
  </div>
);

ImageCard.defaultProps = {
  price: 0,
  license: false,
  isFavorited: false,
};

export default ImageCard;
