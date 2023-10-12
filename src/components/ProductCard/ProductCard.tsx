/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { FC } from 'react';
import { TImageFull, TAuthor } from 'types/types';
import { 
  Back, Downloads, Share, File, License, Buy,
} from 'ui-lib/Icons';
import Report from 'ui-lib/Icons/Report/Report';
import Add from 'ui-lib/Icons/Add/Add';
import { UniversalButton, LikeButton } from 'ui-lib/Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { openModalShare, openModalComplain, setImage } from 'store';
import styles from './ProductCard.module.scss';

interface IProductCard {
  ProductImage: TImageFull,
  author: TAuthor,
}

const ProductCard: FC<IProductCard> = (props) => {
  const { ProductImage, author } = props;
  const { 
    name,
    image,
    license,
    price,
    extension, 
  } = ProductImage;
  const {
    is_subscribed,
    num_of_author_images,
    profile_photo,
    role,
    username,
  } = author;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goBack = () => { // На шаг назад, дурацкая и не нужная кнопка 
    navigate(-1);
  };

  const Clipboard = () => {
    dispatch(openModalShare());
    dispatch(setImage(ProductImage));
  };
  const Complain = () => {
    dispatch(openModalComplain());
  };
  const Download = () => {
    window.open(image);
  };

  return (
    <section className={styles.ProductCard}>
      <div className={styles.ProductCard_header}>
        <button type='button' className={styles.ProductCard_back} onClick={goBack}>
          <Back 
            width={48}
            height={48} />  
        </button> 
        <h2 className={styles.ProductCard_title}>{name}</h2>
        <button type='button' className={styles.ProductCard_report} onClick={Complain}>
          <Report 
            width={24} 
            height={24}
            className={`${styles.ProductCard_report_flag} ${styles.ProductCard_report_hover}`} />
          <p className={`${styles.ProductCard_report_text} ${styles.ProductCard_report_hover}`}>пожаловаться</p>
        </button>
      </div>
      <div className={styles.wrapper}>
        <span className={styles.card__likeButtonSpan}>
          <LikeButton className={styles.wrapper_like} />
        </span>
        <img className={styles.ProductCard_img} src={image} alt={name} />
        <div className={styles.wrapper_InfoBlock}>
          {license === 'free' 
            ? null
            : (
              <div className={styles.wrapper_price}>
                <p className={styles.wrapper_text}>Цена</p>
                <p className={styles.wrapper_price}>{price}</p>
              </div>
            )}
          <div className={styles.wrapper_buttons}>
            <button type='button' className={styles.wrapper_share} onClick={Clipboard}>
              <Share />
            </button>
            {price === 0 
              ? (
                <UniversalButton
                  width={236}
                  height={48}
                  className={styles.wrapper_download}
                  icon={<Downloads />}
                  onClick={Download}>
                  скачать
                </UniversalButton>
              )
              : (
                <UniversalButton
                  width={236}
                  height={48}
                  className={styles.wrapper_download}
                  icon={<Buy />}>
                  купить
                </UniversalButton>
              )}
          </div>
          <div className={styles.wrapper_info}>
            <div className={styles.wrapper_type}>
              <File />
              <p className={styles.wrapper_aboutFormat}>
                Тип файла:&nbsp; 
                <span className={styles.wrapper_aboutType}>{extension}</span>
              </p>
              
            </div>
            <div className={styles.wrapper_type}>
              <License />
              <p className={styles.wrapper_aboutFormat}>
                {/* eslint-disable-next-line ternary/no-unreachable */}
                {license === 'free' 
                  ? 'Бесплатная лицензия'
                  : 'Премиум лицензия'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutUser}>
        <img src={profile_photo} alt='Фото автора' className={styles.aboutUser_avatar} />
        <div className={styles.aboutUser_info}>
          <p className={styles.aboutUser_name}>{username}</p>
          <p className={styles.aboutUser_jobs}>
            {num_of_author_images}
            &nbsp;работы
          </p>
        </div>
        <UniversalButton
          width={152}
          height={36}
          buttonStyle='borderGreen'>
          Подписаться
          <Add
            width={24}
            height={24}
            className={`${styles.aboutUser_add} ${styles.aboutUser_add_hover}`} />
        </UniversalButton>
      </div>
    </section>
  );  
};
export default ProductCard;
