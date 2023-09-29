/* eslint-disable react/button-has-type */
import React, { FC, ReactNode } from 'react';
import styles from './ImageButton.module.scss';

interface ImageButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  height?: string;
  image: string | null;
  alt: string;
  onClick: () => void;
  children?: ReactNode;
}

const ImageButton: FC<ImageButtonProps> = ({
  height = '200px',
  type = 'button',
  onClick = () => {},
  image = null,
  alt = '',
  children = null,
  ...rest
}) => (
  <button
    type={type}
    className={styles.imageButton}
    onClick={onClick}
    {...rest}>

    <img 
      src={image !== null ? image : ''} 
      alt={alt} 
      className={styles.imageButton__image} 
      style={{ height: `${/\d+px/.test(String(height)) ? height : '200px'}` }} />

    {children}

  </button>
);

ImageButton.defaultProps = {
  height: '200px',
  children: null,
};

export default ImageButton;
