import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getSimilarImageThunks from 'thunks/get-similarImge-thunks';
import imageDataDownloadThunk from 'thunks/image-thunk';
import styles from './ImageCardPage.module.scss';
import { useDispatch, useSelector } from '../../services/hooks';
import ProductCard from '../../components/ProductCard/ProductCard';
import SimilarWorksTags from './components/SimilarWorksTags/SimilarWorksTags';
import SimilarImage from './components/SimilarImage/SimilarImage';
import { TImageFull } from '../../types/types'; 

const ImageCardPage = () => {
  const dispatch = useDispatch();
  const { cardId } = useParams();
  const image : TImageFull = useSelector((state) => state.image);
  useEffect(() => {
    if (image.id !== Number(cardId)) {
      dispatch(imageDataDownloadThunk(cardId));
    }
  }, []);

  useEffect(() => {
    dispatch(getSimilarImageThunks(cardId));
  }, [dispatch, cardId]);
  return (
    <section className={styles.main}>
      <ProductCard 
        ProductImage={image}
        author={image.author} />
      <SimilarWorksTags tags={image} />
      <SimilarImage image={image} />
    </section>
  );
};
export default ImageCardPage;
