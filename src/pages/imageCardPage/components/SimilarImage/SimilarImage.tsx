/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC, useState } from 'react';
import { TImage1 } from 'types/types';
import { LikeButton } from 'ui-lib/Button';
import { putLike, removeLike } from 'api/api';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { ArrowRightIconGreen } from 'ui-lib/Icons';
import styles from './SimilarImage.module.scss';
import ImageCardBig from '../../../../components/Template/ImageCardBig/ImageCardBig';

interface TSimilarImage {
  image: TImage1,
}

const SimilarImage: FC<TSimilarImage> = (props) => {
  const { image } = props;
  const { 
    recommended, 
    id, 
  } = image;
  /*
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
  }; */

  return (
    <section className={styles.SimilarImage}>
      <div className={styles.SimilarImage_container}>
        <Toaster />
        {recommended?.map((item) => (
          <ImageCardBig card={item} />
        ))}
      </div>
      <div className={styles.SimilarImage_more}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to='#' className={styles.imageCardsSection__headerLink}>
          Смотреть ещё
          <ArrowRightIconGreen />
        </Link>
      </div>

    </section>
  );
};
export default SimilarImage;
