import React, { FC } from 'react';
import { ImageButton } from 'ui-lib/Button';
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
  isBigImage
    ? (
      <ImageButton type='button' onClick={onClick} image={image} height='424px' alt={tagName}>
        <span className={styles.imageTagButton__bigImageTagName}>{tagName}</span>
      </ImageButton>
    )
    : (
      <ImageButton type='button' onClick={onClick} image={image} height='200px' alt={tagName}>
        <span className={styles.imageTagButton__smallImageTagName}>{tagName}</span>
      </ImageButton>
    ));

ImageTagButton.defaultProps = {
  isBigImage: false,
};

export default ImageTagButton;
