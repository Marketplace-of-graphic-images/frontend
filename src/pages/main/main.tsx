import React from 'react';
import styles from './main.module.scss';
import SectionWithSlider from '../../components/SectionWithSlider/SectionWithSlider';

const Main = () => (
  <main className={styles.main}>
    <SectionWithSlider
      titleAccent='Погрузитесь в мир'
      title='популярных категорий'
      subtitle='Познайте тенденции, которые завоевали сердца, и придайте своему проекту неповторимый шик!' />
  </main>
);
export default Main;
