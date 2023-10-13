import React from 'react';
import styles from './Search.module.scss';
import { useSelector } from '../../services/hooks';
import SearchInput from '../../components/Search/SearchInput/SearchInput';
import ListSearch from '../../components/Search/listSearch/listSearch';
import ImageCardBig from '../../components/Template/ImageCardBig/ImageCardBig';

const Search = () => {
  const { serchImages } = useSelector((state) => state.system);

  const listPrice = [
    'Бесплатные',
    'Платные',
  ];
  const listTypeFile = [
    'JPG',
    'PNG',
    'WEBP',
    'GIF',
  ];
  const typeResurce = [
    'Изображения',
    'Анимации',
    'Пиктограммы',
  ];

  return (
    <main className={styles.main}>
      <SearchInput 
        data='шаурма' />
      <div className={styles.tags_box}> 
        <ListSearch name='Тип файла' list={listTypeFile} />
        <ListSearch name='Цена' list={listPrice} />
        <ListSearch name='Тип ресурса' list={typeResurce} />
      </div>
      <div className={styles.list}>
        {serchImages.length > 0
         && serchImages.map((card) => (<ImageCardBig key={card.id} card={card} />))}
        {serchImages.length < 0 && (
        <p className={styles.search_not}>
          Ничего не найдено. Попробуйте ввести другой поисковой запрос!
        </p>
        )}

      </div>
    </main>
  );
};
export default Search;
