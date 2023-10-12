import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from 'ui-lib/Button/LikeButton/LikeButton';
import { TLicense } from 'types/types';
import { putLike, removeLike } from 'api/api';
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

// async function toggleLike(id : number, isLiked : boolean) : Promise<boolean> {
//   isLiked
//     ? removeLike(id).then(()=>set)
/*  
  try {
    isLiked
      ? await removeLike(id)
      : await putLike(id);
    return !isLiked;
    }
    catch (e:any) {
    console.log(e);
  }
  return isLiked; */
// }

const ImageCard : FC<ImageCardProps> = ({
  id, name, image, license, isFavorited, 
  price, authorUsername, authorId, isLoggedIn,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(isFavorited);

  function toggleLike(cardId: number): void {
    const res : Promise<void> = isLiked
      ? removeLike(cardId)
        .then(() => setIsLiked(false))
        .catch((err: string) => console.log(`Не удалось удалить из избранных, ошибка ${err}`))
        .finally(() => setIsLiked(false))
      : putLike(cardId)
        .then(() => setIsLiked(true))
        .catch((err: string) => console.log(`Не удалось добавить в избранные, ошибка ${err}`))
        .finally(() => setIsLiked(true));
  }

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
        {isLoggedIn && <LikeButton isLiked={isLiked} onClick={() => toggleLike(id)} />}
      </span>
      <h3 className={styles.card__title}>{name}</h3>
      <Link to='/' className={styles.card__authorLink}>{authorUsername}</Link>
    </div>
  );  
};

export default ImageCard;
