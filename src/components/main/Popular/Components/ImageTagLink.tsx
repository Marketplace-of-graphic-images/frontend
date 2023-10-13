import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ImageTagLink.module.scss';
import { setImageSearchField } from '../../../../store/systemSlice';
import { useDispatch, useSelector } from '../../../../services/hooks';
import searchNameThunk from '../../../../thunks/search-name-thunk';

export interface ImageTagLinkProps {
  id: number;
  image: string;
  tagName: string;
  isBigImage?: boolean;
  link: string;
  slug:string;
}

const imageTagLink : FC<ImageTagLinkProps> = ({
  id, image, tagName, slug, isBigImage, link = '/search', 
}) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const showQuestion = () => {
    dispatch(searchNameThunk(slug, true));
  };

  return (
    <Link to='/search' onClick={showQuestion} className={styles.imageTagLink}>
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
};
imageTagLink.defaultProps = {
  isBigImage: false,
};

export default imageTagLink;
