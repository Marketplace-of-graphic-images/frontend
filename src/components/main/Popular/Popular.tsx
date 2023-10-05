import { popularData } from 'constants/popularTestData'; // Хардкод базы тегов
import { baseImageUrl } from 'constants/baseUrl';
import React, { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getPopular } from 'api/getPopular';
import { TTagImage, TTag } from 'types/types';
import { useSelector } from 'services/hooks';
import ImageTagButton, { ImageTagButtonProps } from './Components/ImageTagButton';
import styles from './Popular.module.scss';
  
export interface PopularProps {
  data: Array<ImageTagButtonProps>;
}

const Popular: FC = () => {
// Стейт логина из стора
  const { isLoggedIn } = useSelector((state) => state.system);

  // Стейт с массивом тегов с картинками для вывода в секции или null если что-то пошло не так
  const [popularItems, setPopularItems] = useState<PopularProps | null>(null);

  // Однократная подгрузка данных при логине для стейта с массивом тегов и картинок
  useEffect(() => {
    if (isLoggedIn) {
      setPopularItems(fetchPopularData(popularData, 5));

      // Заготовка для Fetch тегов с помощью Rtk-query
/*    const {data: items} = getPopular.useFetchPopularImagesQuery('');
      setPopularItems(fetchPopularData(items, 5)); */
    }
  }, [isLoggedIn]);

  // Функция формирования массива заданной длины из неповторяющихся 
  // элементов исходного массива в случайном порядке
  function shuffleArray(sourceArr : TTag[], resultArrLength = 5) : TTag[] | null {
    // Если в исходном массиве меньше элементов чем должно быть в 
    // результате или он пустой, то возвращаем null
    if ((!sourceArr.length) || (resultArrLength > sourceArr.length)) return null;
    
    const resultIndexes : number[] = [];
    const result : TTag[] = [];
    const sourceArrLength : number = sourceArr.length;
    let randomIndex : number;
    
    while (result.length < resultArrLength) {
      randomIndex = Math.floor(Math.random() * sourceArrLength);
      if ((!resultIndexes.includes(randomIndex)) && (sourceArr[randomIndex].tag_images.length)) {
        resultIndexes.push(randomIndex);
        result.push(sourceArr[randomIndex]);
      }
    }
    return result;
  }

  // Функция формирования массива заданной длины из неповторяющихся 
  // элементов исходного массива в случайном порядке  
  function fetchPopularData(pd : TTag[], qty : number) : PopularProps | null {
    // Вариант с выводом первых пяти тегов
/*    const collection : TTag[] | null = pd.slice(0, 5); */

    // Вариант со случайным выбором тегов в shuffleArray
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
  return popularItems && (
    <section className={styles.popular}>
      <div className={styles.popular__content}>
        <h2 className={styles.popular__title}>
          Рекомендации:
          <span className={styles.popular__title_span}> специально для вас!</span>
        </h2>

        <ul className={styles.popular__imageItems}>
          { popularItems.data.slice(0, 5).map((el, i) => (
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
