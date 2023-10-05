import { baseImageUrl } from 'constants/baseUrl';
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getPopular } from 'api/getPopular';
import { TTag } from 'types/types';
import ImageTagButton, { ImageTagButtonProps } from './Components/ImageTagButton';
import { shuffleArray } from 'utils/funcs';
import styles from './Popular.module.scss';
  
export interface PopularProps {
  data: Array<ImageTagButtonProps>;
}

const Popular: FC = () => {

// получение тегов с помощью rtkQuery
  const { data: popularTags, error, isLoading } = getPopular.useFetchPopularImagesQuery('');

  // Функция формирования массива заданной длины из неповторяющихся 
  // элементов исходного массива в случайном порядке  
  function setPopularData(pd : TTag[], qty : number = 5 ) : PopularProps | null {

  // Вариант с выводом первых qty тегов
/*  const collection : TTag[] | null = pd.slice(0, qty); */

  // Вариант со случайным выбором qty тегов в shuffleArray
    const collection : TTag[] | null = shuffleArray(pd, qty);

    return collection
      ? ({
        data: collection.map(({ tag_images, name }) => ({
          id: tag_images[0].id, 
          image: `${baseImageUrl}${tag_images[0].image}`, 
          tagName: name, 
          onClick: () => {}, 
        })),
      })
      : null;
  }

  // Если в стейте с тегами null то ничего не рисуем
  return !error && !isLoading && popularTags && popularTags.length >= 5 && (
    <section className={styles.popular}>
      <div className={styles.popular__content}>
        <h2 className={styles.popular__title}>
          Рекомендации:
          <span className={styles.popular__title_span}> специально для вас!</span>
        </h2>

        <ul className={styles.popular__imageItems}>
          { setPopularData(popularTags)?.data.map((el, i) => (
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
};

export default Popular;
