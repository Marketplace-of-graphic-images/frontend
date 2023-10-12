import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageCardBig.module.scss';
import { greyPlug } from '../../../../../assets/images/pictures';
import { LikeButton } from '../../../../../ui-lib/Button';
import { putLike, removeLike } from '../../../../../api/api';

interface ImageCardBigProps {
  image: string;
  name: string;
  id: number;
  isLiked: boolean;
}

/* eslint-disable @typescript-eslint/no-floating-promises, promise/catch-or-return */

const ImageCardBig: FC<ImageCardBigProps> = ({ 
  image, name, id, isLiked, 
}) => {
  const [like, setLike] = useState(isLiked);
  
  const toggleLike = () => {
    if (like) {
      removeLike(id).then(() => setLike(false));
    } 
    putLike(id).then(() => setLike(true));
  };
  
  return (
    <li className={styles.imageCardBig}>
      <LikeButton
        isLiked={like}
        onClick={toggleLike}
        className={styles.imageCardBig__like} />

      <Link to={`/card/${id}`}>
        <img src={image || greyPlug} alt={name} className={styles.imageCardBig__img} />
      </Link>
    </li>
  );
};

export default ImageCardBig;
