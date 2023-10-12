import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import getSimilarImageThunks from 'thunks/get-similarImge-thunks';
import styles from './ImageCardPage.module.scss';
import { useDispatch, useSelector } from '../../services/hooks';
import ProductCard from '../../components/ProductCard/ProductCard';
import SimilarWorksTags from './components/SimilarWorksTags/SimilarWorksTags';
import SimilarImage from './components/SimilarImage/SimilarImage';

/* const image = {
  id: 150,
  name: 'Какое-то название',
  image: 'https://pictura.acceleratorpracticum.ru/media/images/206fd83e78bf889729b476f4575cd3db.jpg',
  license: 'free',
  price: 0,
  format: 'JPG',
  is_favorited: false,
}; */
// с бэка приходят параметры не в CamelCase, пришлось ниже выключить Eslint
const author = {
  id: 2,
  username: 'test_user1',
  // eslint-disable-next-line camelcase
  profile_photo: null,
  role: 'Author',
  // eslint-disable-next-line camelcase
  num_of_author_images: 33,
  // eslint-disable-next-line camelcase
  is_subscribed: false,
};
const tags = [ // шесть тегов, больше не нужно.
  'Свистулькин',
  'Караулькин',
  'Патрулькин',
  'Сапожкин',
  'Каскин',
  'Палочкин',
];

const ImageCardPage = () => {
  const dispatch = useDispatch();
  // const { id } = useSelector((state) => state.image);
  const [imgId, setImgId] = useState();
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const { id } = useParams();
  const { 
    name, 
    image, 
    license, 
    price, 
    format, 
    is_favorited,
  } = useSelector((state) => state.image);

  useEffect(() => {
    if (id) {
      dispatch(getSimilarImageThunks());
    }
  }, [dispatch, id]);

  console.log(name);
  /* const imgData = {
    ID: id,
    NAME: name, 
    IMAGE: image, 
    LICENSE: license, 
    PRICE: price, 
    FORMAT: format, 
    IS_FAVORITED: is_favorited,
  }; */
   
  return (
    <section className={styles.main}>
      {/* <ProductCard ProductImage={imgData} author={author} />
      <SimilarWorksTags tags={tags} />
      <SimilarImage author={author} image={imageOfProduct} /> */}
    </section>
  );
};
export default ImageCardPage;
