import React, { useMemo } from 'react';
import JoinTheCommunity from 'components/main/JoinTheCommunity/JoinTheCommunity';
import AdSection from 'components/main/AdSection/AdSection';
import Advantages from 'components/main/Advantages/Advantages';
import SearchSection from '../../../../components/main/SearchSection/SearchSection';
import TitleMainSection from '../../../../components/main/TitleMainSection/TitleMainSection';
import SectionWithSlider from '../../../../components/main/SectionWithSlider/SectionWithSlider';
import ImageCardsSection from 'components/main/ImageCardsSection/ImageCardsSection';

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

  return (
    <>
      <SearchSection />

      <ImageCardsSection sectionTitle='Популярные фотографии' buttonCaption='Смотреть ещё' items={[
//ТЕСТОВЫЕ ДАННЫЕ!!!        
        {id: 1, title: 'Котик', imageLink: '#', author: 'Author', isFree: false, price: '1500 ₽', isLiked: false},
        {id: 2, title: 'Собачка в наушниках', imageLink: '#', author: 'Author', isFree: false, price: '1500 ₽', isLiked: true},
        {id: 3, title: 'Котик в офисе', imageLink: '#', author: 'Author', isFree: false, price: '1500 ₽', isLiked: false},
        {id: 4, title: 'Кот на пляже', imageLink: '#', author: 'Author', isFree: false, price: '1500 ₽', isLiked: true}
      ]}/>

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
