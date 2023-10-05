import React, { FC } from 'react';
import { TImage, TAuthor } from 'types/types';
import styles from './ProductCard.module.scss';

interface IProductCard {
  ProductImage: TImage,
  author: TAuthor
}

const ProductCard: FC<IProductCard> = (props) => {
  const { ProductImage, author } = props;
  const { 
    created,
    name,
    image,
    license,
    format, 
  } = ProductImage;

  return (
    <section className={styles.ProductCard}>
      <div className={styles.ProductCard_header}>
        <h2>{name}</h2>
      </div>
      <img className={styles.ProductCard_img} src={image} alt={name} />
    </section>
  );
};
export default ProductCard;
