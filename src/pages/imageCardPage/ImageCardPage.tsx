import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ImageCardPage.module.scss';
import { useDispatch, useSelector } from '../../services/hooks';
import ProductCard from '../../components/ProductCard/ProductCard';
import SimilarWorksTags from './components/SimilarWorksTags/SimilarWorksTags';
import SimilarImage from './components/SimilarImage/SimilarImage';

const image = {
  id: 150,
  name: 'Какое-то название',
  image: 'https://pictura.acceleratorpracticum.ru/media/images/206fd83e78bf889729b476f4575cd3db.jpg',
  license: 'free',
  price: 0,
  format: 'JPG',
};
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
  const { userRole, isLoggedIn } = useSelector((state) => state.system);
  const { id } = useParams();
  
  return (
    <section className={styles.main}>
      <ProductCard ProductImage={image} author={author} />
      <SimilarWorksTags tags={tags} />
      <SimilarImage author={author} />
    </section>
  );
};
export default ImageCardPage;
