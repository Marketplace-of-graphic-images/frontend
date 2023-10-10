import React, { useMemo } from 'react';
import JoinTheCommunity from 'components/main/JoinTheCommunity/JoinTheCommunity';
import Advantages from 'components/main/Advantages/Advantages';
import ImageCardsSection from 'components/main/ImageCardsSection/ImageCardsSection';
import JoinToCommunity from 'components/Profile/JoinToCommunity/JoinToCommunity';
import ProductCard from 'components/ProductCard/ProductCard';
import { useSelector } from '../../../../services/hooks';
import SearchSection from '../../../../components/main/SearchSection/SearchSection';
import TitleMainSection from '../../../../components/main/TitleMainSection/TitleMainSection';
import Popular from '../../../../components/main/Popular/Popular';

import sampleImg1 from '../../../../assets/images/pictures/testImage_cats.jpg';
import sampleImg2 from '../../../../assets/images/pictures/testImage_dogs.jpg';
import sampleImg3 from '../../../../assets/images/pictures/testImage_food.jpg';
import sampleImg4 from '../../../../assets/images/pictures/testImage_motivation.jpg';
import sampleImg5 from '../../../../assets/images/pictures/testImage_office.jpg';

const MainUser = () => {
  const TEST_IMAGE_CARDS_SECTION = useMemo(() => [
    {
      id: 1, 
      name: 'Котики', 
      image: sampleImg1, 
      authorId: 1, 
      authorUsername: 'Анатолий', 
      isFavorited: false, 
      license: false, 
      price: 3000, 
      onImageClick: () => { console.log('Картинка'); }, 
      onAuthorClick: () => { console.log('Автор'); },
      onLikeClick: () => { console.log('Лайк'); },
    },
    {
      id: 2, 
      name: 'Собачки', 
      image: sampleImg2, 
      authorId: 2, 
      authorUsername: 'Аркадий', 
      isFavorited: false, 
      license: true, 
      price: 7000, 
      onImageClick: () => { console.log('Картинка'); }, 
      onAuthorClick: () => { console.log('Автор'); },
      onLikeClick: () => { console.log('Лайк'); },
    },
    {
      id: 3, 
      name: 'Еда', 
      image: sampleImg3, 
      authorId: 3, 
      authorUsername: 'Арестарх', 
      isFavorited: true, 
      license: false, 
      price: 7000, 
      onImageClick: () => { console.log('Картинка'); }, 
      onAuthorClick: () => { console.log('Автор'); },
      onLikeClick: () => { console.log('Лайк'); },
    },
    {
      id: 4, 
      name: 'Бесконечная мотивация офисных работников', 
      image: sampleImg4, 
      authorId: 4, 
      authorUsername: 'Акакий', 
      isFavorited: true, 
      license: true, 
      price: 12000, 
      onImageClick: () => { console.log('Картинка'); }, 
      onAuthorClick: () => { console.log('Автор'); },
      onLikeClick: () => { console.log('Лайк'); },
    },
  ], []);
  const TEST_POPULAR_ITEMS = useMemo(() => ([
    {
      id: 1, image: sampleImg1, tagName: 'Котики', onClick: () => {}, 
    },
    {
      id: 2, image: sampleImg2, tagName: 'Офисные работники', onClick: () => {}, 
    },
    {
      id: 3, image: sampleImg3, tagName: 'Еда', onClick: () => {}, 
    },
    {
      id: 4, image: sampleImg4, tagName: 'Собачки', onClick: () => {}, 
    },
    {
      id: 5, image: sampleImg5, tagName: 'Мотивация', onClick: () => {}, 
    },
  ]), []);

  const { user } = useSelector((state) => state);

  // временные данные. Вообще всё это нужно получать по запросу к апи по ID картинки
  
  return (
    <>
      <JoinToCommunity
        user={user} 
        roleUser='customer' />
      <SearchSection />
      <TitleMainSection
        titleAccent='Погрузитесь в мир'
        title='популярных категорий!' />
      <ImageCardsSection cards={TEST_IMAGE_CARDS_SECTION} title='Популярные фотографии' link='/' />
      <Popular data={TEST_POPULAR_ITEMS} />
      <Advantages />
      <JoinTheCommunity />
    </>
  );
};
export default MainUser;
