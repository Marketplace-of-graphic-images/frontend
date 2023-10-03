import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Popular.module.scss';
import ImageTagButton, { ImageTagButtonProps } from './Components/ImageTagButton';
  
export interface PopularProps {
  data: Array<ImageTagButtonProps>;
}

const Popular: FC<PopularProps> = ({ data }) => (
  <section className={styles.popular}>
    <div className={styles.popular__content}>
      <h2 className={styles.popular__title}>
        Рекомендации:
        <span className={styles.popular__title_span}> специально для вас!</span>
      </h2>

      <ul className={styles.popular__imageItems}>
        { data.slice(0, 5).map((el, i) => (
          <li className={styles.popular__item} key={uuidv4()}>
            <ImageTagButton 
              key={el.id} 
              id={el.id} 
              image={el.image} 
              tagName={el.tagName} 
              isBigImage={!i} 
              onClick={el.onClick} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Popular;
