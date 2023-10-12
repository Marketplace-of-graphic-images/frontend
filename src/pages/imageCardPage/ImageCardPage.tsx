import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getSimilarImageThunks from 'thunks/get-similarImge-thunks';
import styles from './ImageCardPage.module.scss';
import { useDispatch, useSelector } from '../../services/hooks';
import ProductCard from '../../components/ProductCard/ProductCard';
import SimilarWorksTags from './components/SimilarWorksTags/SimilarWorksTags';
import SimilarImage from './components/SimilarImage/SimilarImage';

const ImageCardPage = () => {
  const dispatch = useDispatch();

  const { cardId } = useParams();
  const productImage = useSelector((state) => state.image); 

  useEffect(() => {
    dispatch(getSimilarImageThunks(cardId));
  }, [dispatch, cardId]);
  return (
    <section className={styles.main}>
      <ProductCard 
        ProductImage={productImage} />
      <SimilarWorksTags tags={productImage} />
      <SimilarImage image={productImage} />
    </section>
  );
};
export default ImageCardPage;
