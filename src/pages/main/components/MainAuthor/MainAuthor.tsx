import React, { useMemo } from 'react';
import CollapsibleSection from '../../../../components/main/CollapsibleSection/CollapsibleSection';
import SearchSection from '../../../../components/main/SearchSection/SearchSection';
import SectionWithSlider from '../../../../components/main/SectionWithSlider/SectionWithSlider';
import TitleMainSection from '../../../../components/main/TitleMainSection/TitleMainSection';
import Advantages from '../../../../components/main/Advantages/Advantages';

const MainAuthor = () => {
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

      <SectionWithSlider items={TEST_DATA}>
        <TitleMainSection
          titleAccent='Рекомендации:'
          title='вам может быть это интересно!'
          subtitle='Здесь подобраны категории на основе ваших предпочтений' />
      </SectionWithSlider>

      <CollapsibleSection items={TEST_DATA} isPublicationBtn>
        <TitleMainSection
          titleAccent='Творческая атмосфера:'
          title='Ваш Мир'
          subtitle='Публикуйте и просматривайте свои работы в любое время!' />
      </CollapsibleSection>

      <SectionWithSlider items={TEST_DATA}>
        <TitleMainSection
          titleAccent='Погрузитесь в мир'
          title='популярных категорий'
          subtitle='Познайте тенденции, которые завоевали сердца, и придайте своему проекту неповторимый шик!' />
      </SectionWithSlider>

      <Advantages />

    </>
  );
};

export default MainAuthor;
