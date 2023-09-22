import React, { FC } from 'react';
import styles from './ImageCard.module.scss';
import { Link } from 'react-router-dom';
import LikeButton from 'ui-lib/Button/LikeButton/LikeButton';

export interface ImageCardProps {
  id: number;
  title: string;
  imageLink: string;
  isFree?: boolean;
  isLiked: boolean;
  price?: string;
  author: string;
  authorLink?: string;
}

const ImageCard: FC<ImageCardProps> = ({ id, title, imageLink, isFree, price, author, authorLink, isLiked }) => (
  <div className={styles.card}>
    {!isFree && (<span className={styles.card__priceTag}>{price}</span>)}
    <span className={styles.card__likeButtonSpan}>
      <LikeButton isLiked={isLiked} />
    </span>
    <img alt={title} src={imageLink} className={styles.card__img} />
    <h3 className={styles.card__title}>{title}</h3>
    <Link className={styles.card__authorLink} to="#">{author}</Link>
  </div>
);

export default ImageCard;
