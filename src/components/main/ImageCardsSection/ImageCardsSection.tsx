import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ImageCard, { ImageCardProps } from './components/ImageCard';
import styles from './ImageCardsSection.module.scss';
import { ArrowRightIconGreen } from '../../../ui-lib/Icons';

interface ImageCardsSectionProps {
  cards: Array<ImageCardProps>;
  title: string;
  link: string;
}

const buttonPressTest = () => {
  console.log('Button is pressed');
};

const ImageCardsSection: FC<ImageCardsSectionProps> = ({ cards, title, link }) => (
  <section className={styles.imageCardsSection}>
    <div className={styles.imageCardsSection__container}>
      <div className={styles.imageCardsSection__headerContainer}>
        <h2 className={styles.imageCardsSection__headerTitle}>{title}</h2>
        <Link to={link} className={styles.imageCardsSection__headerLink}>
          Смотреть ещё 
          <ArrowRightIconGreen />
        </Link>
      </div>
      <ul className={styles.imageCardsSection__content}>
        {cards.slice(0, 4).map((el:ImageCardProps) => (
          <li className={styles.imageCardsSection__cardItem} key={uuidv4()}>
            <ImageCard 
              id={el.id} 
              name={el.name}
              image={el.image}
              price={el.price}
              authorId={el.authorId}
              authorUsername={el.authorUsername}
              license={el.license}
              isFavorited={el.isFavorited}
              onImageClick={el.onImageClick}
              onAuthorClick={el.onAuthorClick} 
              onLikeClick={el.onLikeClick} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ImageCardsSection;
