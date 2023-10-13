import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from 'ui-lib/Button/LikeButton/LikeButton';
import { TLicense } from 'types/types';
import { putLike, removeLike } from 'api/api';
import imageLikeThunk from 'thunks/like-thunk';
import { useDispatch } from 'services/hooks';
import styles from './ImageCard.module.scss';

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

const ImageCard : FC<ImageCardProps> = ({
  id, name, image, license, isFavorited, 
  price, authorUsername, authorId, isLoggedIn,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(isFavorited);
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Link to={`/card/${id}`} className={styles.card__imageLink}>
        <img alt={name} src={image} className={styles.card__img} />
      </Link>
      {license !== 'free' && (
        <span className={styles.card__priceTag}>
          {price} 
          {' ₽'}
        </span>
      )}
      <span className={styles.card__likeButtonSpan}>
        {isLoggedIn && (
        <LikeButton 
          isLiked={isLiked} 
          onClick={() => { dispatch(imageLikeThunk(id, isLiked)); setIsLiked(!isLiked); }} />
        )}
      </span>
      <h3 className={styles.card__title}>{name}</h3>
      <Link to='/' className={styles.card__authorLink}>{authorUsername}</Link>
    </div>
  );  
};

export default ImageCard;
