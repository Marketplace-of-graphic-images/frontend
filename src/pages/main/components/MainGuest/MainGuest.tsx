import React, { useMemo } from 'react';
import JoinTheCommunity from 'components/main/JoinTheCommunity/JoinTheCommunity';
import AdSection from 'components/main/AdSection/AdSection';
import Advantages from 'components/main/Advantages/Advantages';
import ImageCardsSection from 'components/main/ImageCardsSection/ImageCardsSection';
import { TRUE } from 'node-sass';
import SearchSection from '../../../../components/main/SearchSection/SearchSection';
import TitleMainSection from '../../../../components/main/TitleMainSection/TitleMainSection';
import SectionWithSlider from '../../../../components/main/SectionWithSlider/SectionWithSlider';

import sampleImg1 from '../../../../assets/images/pictures/testImage_cats.jpg';
import sampleImg2 from '../../../../assets/images/pictures/testImage_dogs.jpg';
import sampleImg3 from '../../../../assets/images/pictures/testImage_food.jpg';
import sampleImg4 from '../../../../assets/images/pictures/testImage_motivation.jpg';

const MainGuest = () => {
  const TEST_DATA = useMemo(() => ([
    { id: 0, title: 'Еда', image: '#' },
    { id: 1, title: 'Животные', image: '#' },
    { id: 2, title: 'Спорт', image: '#' },
    { id: 3, title: 'Офис', image: '#' },
    { id: 4, title: 'Котики', image: '#' },
    { id: 5, title: 'Закат', image: '#' },
    { id: 6, title: 'Природа', image: '#' },
    { id: 7, title: 'Город', image: '#' },
    { id: 9, title: 'Котики', image: '#' },
    { id: 10, title: 'Закат', image: '#' },
    { id: 11, title: 'Природа', image: '#' },
    { id: 12, title: 'Город', image: '#' },
  ]), []);

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

  return (
    <>
      <SearchSection />

      <ImageCardsSection cards={TEST_IMAGE_CARDS_SECTION} title='Популярные фотографии' link='/' />

      <SectionWithSlider items={TEST_DATA}>
        <TitleMainSection
          titleAccent='Погрузитесь в мир'
          title='популярных категорий'
          subtitle='Познайте тенденции, которые завоевали сердца, и придайте своему проекту неповторимый шик!' />
      </SectionWithSlider>

      <AdSection />
      <Advantages />
      <JoinTheCommunity />
    </>
  );
};
export default MainGuest;
