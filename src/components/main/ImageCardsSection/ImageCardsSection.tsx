import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { TImage } from 'types/types';
import ImageCard, { ImageCardProps } from './components/ImageCard';
import styles from './ImageCardsSection.module.scss';
import { ArrowRightIconGreen } from '../../../ui-lib/Icons';

interface ImageCardsSectionProps {
  cards: Array<TImage>;
  title: string;
  link: string;
  isLoggedIn: boolean;
}

const ImageCardsSection: FC<ImageCardsSectionProps> = ({ cards, title, link, isLoggedIn }) => (
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
        {cards.slice(0, 4).map((el:TImage) => (
          <li className={styles.imageCardsSection__cardItem} key={uuidv4()}>
            <ImageCard 
              id={el.id} 
              name={el.name}
              image={el.image}
              price={el.price}
              authorId={el.author.id}
              authorUsername={el.author.username}
              license={el.license}
              isFavorited={el.is_favorited} 
              isLoggedIn = {isLoggedIn}/>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ImageCardsSection;
