import React from 'react';
import styles from './LikeButton.module.scss';
import { LikeIconGreen, LikeIconWhite } from '../../Icons';

interface LikeButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isLiked?: boolean;
  onClick?: () => void;
  className?: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  isLiked = false,
  onClick,
  className = '',
  ...rest
}) => (
  <button className={`${styles.button} ${className}`} type='button' onClick={onClick} {...rest}>
    {isLiked ? <LikeIconGreen /> : <LikeIconWhite />}
  </button>
);

LikeButton.defaultProps = {
  isLiked: false,
  onClick: () => {},
  className: '',
};

export default LikeButton;
