import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TTag, TImage } from 'types/types';
import ImageTagLink from './Components/ImageTagLink';
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
// eslint-disable-next-line
              image={el.tag_images[0].image} 
              tagName={el.name} 
              isBigImage={!i}
// eslint-disable-next-line 
              link={el.tag_images[0].image} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Popular;
