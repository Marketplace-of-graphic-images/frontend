import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageCardSmall.module.scss';
import { greyPlug } from '../../../../../assets/images/pictures';

interface ImageCardSmallProps {
  image: string;
  name: string;
  id: number;
}

const ImageCardSmall: FC<ImageCardSmallProps> = ({ image, name, id }) => (
  <li className={styles.imageCardSmall}>
    <Link to={`/card/${id}`} className={styles.imageCardSmall__link}>
      <img src={image || greyPlug} alt={name} className={styles.imageCardSmall__img} />
      <h3 className={styles.imageCardSmall__title}>{name}</h3>
    </Link>
  </li>
);

export default ImageCardSmall;
