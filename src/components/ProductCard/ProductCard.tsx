import React, { FC } from 'react';
import { TImage, TAuthor } from 'types/types';
import { Back } from 'ui-lib/Icons';
import Report from 'ui-lib/Icons/Report/Report';
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
        <button type='button' className={styles.ProductCard_back}>
          <Back 
            width={48}
            height={48} />  
        </button> 
        <h2 className={styles.ProductCard_title}>{name}</h2>
        <button type='button' className={styles.ProductCard_report}>
          <Report 
            width={24} 
            height={24}
            className={`${styles.ProductCard_report_flag} ${styles.ProductCard_report_hover}`} />
          <p className={`${styles.ProductCard_report_text} ${styles.ProductCard_report_hover}`}>пожаловаться</p>
        </button>
      </div>
      <img className={styles.ProductCard_img} src={image} alt={name} />
    </section>
  );
};
export default ProductCard;
