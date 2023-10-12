import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageCardBig.module.scss';
import { greyPlug } from '../../../../../assets/images/pictures';
import { LikeButton } from '../../../../../ui-lib/Button';

interface ImageCardBigProps {
  image: string;
  name: string;
  id: number;
  isLiked: boolean;
}

const ImageCardBig: FC<ImageCardBigProps> = ({ 
  image, name, id, isLiked, 
}) => (
  <li className={styles.imageCardBig}>
    <Link to={`/card/${id}`}>
      <LikeButton isLiked={isLiked} className={styles.imageCardBig__like} />
      <img src={image || greyPlug} alt={name} className={styles.imageCardBig__img} />
    </Link>
  </li>
);

export default ImageCardBig;
