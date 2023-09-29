import React, { FC } from 'react';
import styles from './ImageTagButton.module.scss';

export interface ImageTagButtonProps {
  id: number;
  image: string;
  tagName: string;
  isBigImage?: boolean;
  onClick: () => void
}

const ImageTagButton : FC<ImageTagButtonProps> = ({
  id, image, tagName, isBigImage, onClick, 
}) => (
  <button type='button' onClick={onClick} className={styles.imageTagButton}>
    {isBigImage
      ? (
        <>
          <img src={image} className={styles.imageTagButton__bigImage} alt={tagName} />
          <span className={styles.imageTagButton__bigImageTagName}>{tagName}</span> 
        </>
      )
      : (
        <>
          <img src={image} className={styles.imageTagButton__smallImage} alt={tagName} />
          <span className={styles.imageTagButton__smallImageTagName}>{tagName}</span>
        </>
      )}
  </button>
);

ImageTagButton.defaultProps = {
  isBigImage: false,
};

export default ImageTagButton;
