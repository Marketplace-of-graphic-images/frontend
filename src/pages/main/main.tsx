import React, { useMemo } from 'react';
import JoinTheCommunity from 'components/JoinTheCommunity/JoinTheCommunity';
import AdSection from 'components/AdSection/AdSection';
import styles from './main.module.scss';
import SectionWithSlider from '../../components/SectionWithSlider/SectionWithSlider';
import SearchSection from '../../components/SearchSection/SearchSection';
import TitleMainSection from '../../components/TitleMainSection/TitleMainSection';

const Main = () => {
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
    <main className={styles.main}>
      <SearchSection />

      <SectionWithSlider items={TEST_DATA}>
        <TitleMainSection
          titleAccent='Погрузитесь в мир'
          title='популярных категорий'
          subtitle='Познайте тенденции, которые завоевали сердца, и придайте своему проекту неповторимый шик!' />
        <AdSection />
        <JoinTheCommunity />
      </SectionWithSlider>
    </main>
  );
};
export default Main;
