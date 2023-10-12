import React from 'react';
import styles from './Search.module.scss';
import { useSelector } from '../../services/hooks';
import SearchInput from '../../components/Search/SearchInput/SearchInput';
import ListSearch from '../../components/Search/listSearch/listSearch';

const Search = () => {
  const { user } = useSelector((state) => state);
  const { role } = useSelector((state) => state.user);

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
        <p className={styles.search_not}>
          Ничего не найдено. Попробуйте ввести другой поисковой запрос!
        </p>

      </div>
    </main>
  );
};
export default Search;
