import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TAuthor, TImageFull } from 'types/types';
import imageDataDownloadThunk from 'thunks/image-thunk';
import ProductCard from 'components/ProductCard/ProductCard';
import styles from './ImageCardPage.module.scss';
import { useDispatch, useSelector } from '../../services/hooks';

const ImageCardPage = () => {
  const dispatch = useDispatch();
  const { userRole, isLoggedIn } = useSelector((state) => state.system);
  const { id } = useParams();
  const image : TImageFull = useSelector((state) => state.image);

  useEffect(() => {
    if (image.id !== Number(id)) {
      dispatch(imageDataDownloadThunk(id));
    }
    
  // eslint-disable-next-line
  }, []);
  
  return (
    <section className={styles.main}>
      <ProductCard ProductImage={image} author={image.author} />
    </section>
  );
};
export default ImageCardPage;
