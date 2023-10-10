import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from 'ui-lib/Button/LikeButton/LikeButton';
import { TLicense } from 'types/types';
import styles from './ImageCard.module.scss';
import { putLike, removeLike } from 'api/api';

export interface ImageCardProps {
  id: number;
  name: string;
  image: string;
  license: TLicense;
  isFavorited: boolean;
  price: number | null;
  authorUsername: string;
  authorId: number;
  isLoggedIn: boolean;
}

async function onLikeClick(id : number, isLiked : boolean) : Promise<boolean> {
  try {
    isLiked
      ? await removeLike(id)
      : await putLike(id);
    return !isLiked;
    }
    catch (e:any) {
    console.log(e);
  }
  return isLiked;
}

const ImageCard : FC<ImageCardProps> = ({
  id, name, image, license, isFavorited, 
  price, authorUsername, authorId, isLoggedIn
}) => (
  <div className={styles.card}>
    <Link to='#' className={styles.card__imageLink}>
      <img alt={name} src={image} className={styles.card__img} />
    </Link>
    {license !== 'free' && (
      <span className={styles.card__priceTag}>
        {price} 
        {' ₽'}
      </span>
    )}
    <span className={styles.card__likeButtonSpan}>
      {isLoggedIn && <LikeButton isLiked={isFavorited} onClick={()=>onLikeClick(id, isFavorited)} />}
    </span>
    <h3 className={styles.card__title}>{name}</h3>
    <Link to='#' className={styles.card__authorLink}>{authorUsername}</Link>
  </div>
);

export default ImageCard;
