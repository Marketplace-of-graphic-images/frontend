import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImageTagLink.module.scss';

export interface ImageTagLinkProps {
  id: number;
  image: string;
  tagName: string;
  isBigImage?: boolean;
  link: string;
}

const imageTagLink : FC<ImageTagLinkProps> = ({
  id, image, tagName, isBigImage, link = '#', 
}) => (
  <Link to={link} className={styles.imageTagLink} target='_blank'>
    {isBigImage
      ? (
        <>
          <img src={image} className={styles.imageTagLink__bigImage} alt={tagName} />
          <span className={styles.imageTagLink__bigImageTagName}>{tagName}</span> 
        </>
      )
      : (
        <>
          <img src={image} className={styles.imageTagLink__smallImage} alt={tagName} />
          <span className={styles.imageTagLink__smallImageTagName}>{tagName}</span>
        </>
      )}
  </Link>
);

imageTagLink.defaultProps = {
  isBigImage: false,
};

export default imageTagLink;
