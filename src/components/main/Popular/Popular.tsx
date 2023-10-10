import { baseImageUrl } from 'constants/baseUrl';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getPopular } from 'api/getPopular';
import { TTag } from 'types/types';
import { shuffleArray } from 'utils/funcs';
import ImageTagLink, { ImageTagLinkProps } from './Components/ImageTagLink';
import styles from './Popular.module.scss';
  
export interface PopularProps {
  data: Array<TTag>;
}

const Popular: FC<PopularProps> = ({ data }) => (
  <section className={styles.popular}>
    <div className={styles.popular__content}>
      <h2 className={styles.popular__title}>
        Рекомендации:
        <span className={styles.popular__title_span}> специально для вас!</span>
      </h2>

      <ul className={styles.popular__imageItems}>
        { data.map((el, i) => (
          <li className={styles.popular__item} key={uuidv4()}>
            <ImageTagLink 
              key={el.id} 
              id={el.id} 
              image={el.tag_images ? el.tag_images[0].image : ''} 
              tagName={el.name} 
              isBigImage={!i} 
              link={el.tag_images ? el.tag_images[0].image : ''} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Popular;
