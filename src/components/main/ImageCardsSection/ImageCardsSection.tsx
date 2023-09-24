import React from 'react';
import ImageCard from './components/ImageCard';
import style from './ImageCardsSection.module.scss';

import { UniversalButton } from '../../../ui-lib/Button';
import { ArrowRightIconGreen } from '../../../ui-lib/Icons';

const buttonPressTest = () => {
  console.log('Button is pressed');
};

const ImageCardsSection = () => (
  <section className={style.imageCardsSection}>
    <div className={style.imageCardsSection__container}>
      <div className={style.imageCardsSection__headerContainer}>
        <h2 className={style.imageCardsSection__headerTitle}>Популярные фотографии</h2>
        <UniversalButton
          width='max-content'
          height='auto'
          onClick={buttonPressTest}
          buttonStyle='borderNone'
          icon={<ArrowRightIconGreen />}>
          Смотреть ещё 
        </UniversalButton>
      </div>
      <ul className={style.imageCardsSection__content}>
        <li className={style.imageCardsSection__cardItem}>
          <ImageCard />
        </li>
        <li className={style.imageCardsSection__cardItem}>
          <ImageCard />
        </li>
        <li className={style.imageCardsSection__cardItem}>
          <ImageCard />
        </li>                
        <li className={style.imageCardsSection__cardItem}>
          <ImageCard />
        </li>
      </ul>
    </div>
  </section>
);

export default ImageCardsSection;
