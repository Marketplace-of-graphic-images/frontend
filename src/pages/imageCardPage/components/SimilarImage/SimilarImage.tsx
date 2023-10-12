import React, { FC, useState } from 'react';
import { TAuthor1, TImage1 } from 'types/types';
import { LikeButton } from 'ui-lib/Button';
import { putLike, removeLike } from 'api/api';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SimilarImage.module.scss';

interface TSimilarImage {
  author: TAuthor1,
  image: TImage1,
}

const SimilarImage: FC<TSimilarImage> = (props) => {
  const { author, image } = props;
  const {
    username,
    profile_photo,
  } = author;
  const { is_favorited } = image;

  const [like, setLike] = useState(is_favorited); 

  const likeToggle = (cardId: number) => {
    const res : Promise<string | void> = like
      ? removeLike(cardId)
        .then(() => setLike(false))
        .catch((err: string) => toast('ОЙ! Что-то пошло не так!', {
          duration: 3000,
          position: 'top-center',
          style: { fontSize: '18px' },
        }))
        .finally(() => setLike(false))
      : putLike(cardId)
        .then(() => setLike(true))
        .catch((err: string) => toast('ОЙ! Что-то пошло не так!', {
          duration: 3000,
          position: 'top-center',
          style: { fontSize: '18px' },
        }))
        .finally(() => setLike(true));
  };
  return (
    <section className={styles.SimilarImage}>
      <div className={styles.SimilarImage_container}>
        <Toaster />

        <div className={styles.SimilarImage_hoverBlock}>
          <div className={`${styles.SimilarImage_infoBlock} ${styles.SimilarImage_infoBlock_hover}`}>
            <img src='#' alt='Фото автора' className={styles.SimilarImage_authorPhoto} />
            <p className={styles.SimilarImage_username}>{username}</p>
          </div>
          <LikeButton isLiked={like} onClick={() => likeToggle(image.id)} className={`${styles.SimilarImage_likeButton} ${styles.SimilarImage_likeButton_hover}`} />
          <img 
            src='https://pictura.acceleratorpracticum.ru/media/images/206fd83e78bf889729b476f4575cd3db.jpg' 
            alt='картинка'
            className={styles.SimilarImage_img} />
        </div>
        
        <img 
          src='https://pictura.acceleratorpracticum.ru/media/images/206fd83e78bf889729b476f4575cd3db.jpg' 
          alt='картинка'
          className={styles.SimilarImage_img} />
        <img 
          src='https://pictura.acceleratorpracticum.ru/media/images/206fd83e78bf889729b476f4575cd3db.jpg' 
          alt='картинка'
          className={styles.SimilarImage_img} />
        <img 
          src='https://pictura.acceleratorpracticum.ru/media/images/206fd83e78bf889729b476f4575cd3db.jpg' 
          alt='картинка'
          className={styles.SimilarImage_img} />
      </div>
  
    </section>
  );
};
export default SimilarImage;
