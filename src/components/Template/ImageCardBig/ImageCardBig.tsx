import React, { FC, useState } from 'react';
import { TImage1 } from 'types/types';
import { LikeButton } from 'ui-lib/Button';
import styles from './ImageCardBig.module.scss';

interface TSimilarImage {
  card: TImage1,
}

const ImageCardBig: FC<TSimilarImage> = ({ card }) => {
  const likeToggle = (id) => {
    console.log(id);
  };
  return (
    <div className={styles.SimilarImage_hoverBlock}>
      <div className={`${styles.SimilarImage_infoBlock} ${styles.SimilarImage_infoBlock_hover}`}>
        <img src='#' alt='Фото автора' className={styles.SimilarImage_authorPhoto} />
        <p className={styles.SimilarImage_username}>{card.author.username}</p>
      </div>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
      <LikeButton isLiked={card.is_favorited} onClick={() => likeToggle(card.id)} className={`${styles.SimilarImage_likeButton} ${styles.SimilarImage_likeButton_hover}`} />
      <img
        src={card.image}
        alt='картинка'
        className={styles.SimilarImage_img} />
    </div>
  );
};
export default ImageCardBig;
