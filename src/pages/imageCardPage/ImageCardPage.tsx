import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TAuthor, TImageFull } from 'types/types';
import imageDataDownloadThunk from 'thunks/image-thunk';
import styles from './ImageCardPage.module.scss';
import { useDispatch, useSelector } from '../../services/hooks';
import ProductCard from '../../components/ProductCard/ProductCard';

/*  // с бэка приходят параметры не в CamelCase, пришлось ниже выключить Eslint
const author: TAuthor = {
  id: 2,
  username: 'test_user1',
  // eslint-disable-next-line camelcase
  profile_photo: 'img',
  role: 'Author',
  // eslint-disable-next-line camelcase
  num_of_author_images: 33,
  // eslint-disable-next-line camelcase
  is_subscribed: false,
};

const image: TImageFull = {
  id: 150,
  created: '',
  author: author,
  name: 'Какое-то название',
  image: 'https://pictura.acceleratorpracticum.ru/media/images/206fd83e78bf889729b476f4575cd3db.jpg',
  is_favorited: false,
  tags: [],
  slug: '',
  license: 'free',
  price: 0,
  extension: 'JPG',
  recommended: [],
};  */

const ImageCardPage = () => {
  const dispatch = useDispatch();
  const { userRole, isLoggedIn } = useSelector((state) => state.system);
  const { id } = useParams();
  const image = useSelector((state) => state.image);

  useEffect(() => {
    if (image.id !== Number(id)) {
      dispatch(imageDataDownloadThunk(id));
    }
  // eslint-disable-next-line
  }, [, id, image.id]);

  console.log(image);
  
  return (
    <section className={styles.main}>
      <ProductCard ProductImage={image} author={image.author} />
    </section>
  );
};
export default ImageCardPage;
