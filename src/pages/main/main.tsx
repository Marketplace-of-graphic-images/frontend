import React from 'react';
import styles from './main.module.scss';
import SectionWithSlider from '../../components/SectionWithSlider/SectionWithSlider';
import SearchSection from '../../components/SearchSection/SearchSection';

const Main = () => (
  <main className={styles.main}>
    <SectionWithSlider
      titleAccent='Погрузитесь в мир'
      title='популярных категорий'
      subtitle='Познайте тенденции, которые завоевали сердца, и придайте своему проекту неповторимый шик!' />
    <SearchSection />
  </main>
);
export default Main;
