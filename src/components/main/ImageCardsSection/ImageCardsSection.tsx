import React, { FC } from 'react';
import ImageCard from './components/ImageCard';
import { ImageCardProps } from './components/ImageCard';
import style from './ImageCardsSection.module.scss';
import { UniversalButton } from '../../../ui-lib/Button';
import { ArrowRightIconGreen } from '../../../ui-lib/Icons';

interface ImageCardsSectionProps {
  sectionTitle: string;
  buttonCaption: string;
  items: Array<ImageCardProps>;
}

const buttonPressTest = () => {
  console.log('Button is pressed');
}

const ImageCardsSection: FC<ImageCardsSectionProps> = ({ sectionTitle, buttonCaption, items }) => (
  <section className={style.imageCardsSection} aria-label={sectionTitle}>
    <div className={style.imageCardsSection__container}>
      <div className={style.imageCardsSection__header}>
        <h2 className={style.imageCardsSection__headerTitle}>{sectionTitle}</h2>
        <UniversalButton
          width='max-content'
          height='auto'
          onClick={buttonPressTest}
          buttonStyle='borderNone'
          icon={<ArrowRightIconGreen />}>
          {buttonCaption}
        </UniversalButton>
      </div>
      <div className={style.imageCardsSection__content}>
        {items.map(({ title, imageLink, id, author, price, isFree=false, isLiked=false }) => (
          <ImageCard id={id} title={title} imageLink={imageLink} key={id} author={author} price={price} isFree={isFree} isLiked={isLiked}/>
      ))}
      </div>
    </div>
  </section>
);

export default ImageCardsSection;


