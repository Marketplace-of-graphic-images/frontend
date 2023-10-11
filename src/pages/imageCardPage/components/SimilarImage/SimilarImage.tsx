import React, { FC } from 'react';
import { TAuthor1 } from 'types/types';
import styles from './SimilarImage.module.scss';

interface TSimilarImage {
  author: TAuthor1,
}

const SimilarImage: FC<TSimilarImage> = (props) => {
  const { author } = props;
  const {
    username,
    profile_photo,
  } = author;

  return (
    <section className={styles.SimilarImage}>
      <div className={styles.SimilarImage_container}>
        <div className={styles.SimilarImage_hoverBlock}>
          <div className={`${styles.SimilarImage_infoBlock} ${styles.SimilarImage_infoBlock_hover}`}>
            <img src='#' alt='Фото автора' className={styles.SimilarImage_authorPhoto} />
            <p className={styles.SimilarImage_username}>{username}</p>
          </div>
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
