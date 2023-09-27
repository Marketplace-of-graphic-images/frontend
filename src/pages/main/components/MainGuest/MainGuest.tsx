import React, { useMemo } from 'react';
import JoinTheCommunity from 'components/main/JoinTheCommunity/JoinTheCommunity';
import AdSection from 'components/main/AdSection/AdSection';
import Advantages from 'components/main/Advantages/Advantages';
import SearchSection from '../../../../components/main/SearchSection/SearchSection';
import TitleMainSection from '../../../../components/main/TitleMainSection/TitleMainSection';
import SectionWithSlider from '../../../../components/main/SectionWithSlider/SectionWithSlider';
import Popular from '../../../../components/main/Popular/Popular';

import sampleImg1 from '../../../../assets/images/pictures/testImage_cats.jpg';
import sampleImg2 from '../../../../assets/images/pictures/testImage_office.jpg';
import sampleImg3 from '../../../../assets/images/pictures/testImage_food.jpg';
import sampleImg4 from '../../../../assets/images/pictures/testImage_dogs.jpg';
import sampleImg5 from '../../../../assets/images/pictures/testImage_motivation.jpg';

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

  return (
    <>
      <SearchSection />

      <SectionWithSlider items={TEST_DATA}>
        <TitleMainSection
          titleAccent='Погрузитесь в мир'
          title='популярных категорий'
          subtitle='Познайте тенденции, которые завоевали сердца, и придайте своему проекту неповторимый шик!' />
      </SectionWithSlider>

      <AdSection />
      <Advantages />

      <Popular data={TEST_POPULAR_ITEMS} />

      <JoinTheCommunity />
    </>
  );
};
export default MainGuest;
