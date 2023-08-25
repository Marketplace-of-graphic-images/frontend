import React, { FC } from 'react';
import styles from './SearchSection.module.scss';
import { PopularButton } from '../../ui-lib/Button';
import SearchField from '../../ui-lib/SearchField/SearchField';
import { MagniferIcon } from '../../ui-lib/Icons';
import AllResurce from '../../ui-lib/Lists/AllResurce/AllResurce';

const SearchSection = () => {
  const testClick = () => {
    console.log('Сработало!');
  };
  const fakeData = [
    'сосиска',
    'жареные кузнечики',
    'чебуреки с котятами',
    'крысбургер',
  ];
  return (
    <section className={styles.SearchSection}>
      <div className={styles.dataBlock}>
        <h2 className={styles.title}>Найдите ресурсы под любые запросы</h2>
        <SearchField 
          data='шаурма' />
        <div className={styles.fastButtons}>
          {fakeData.map((item, index) => (
            <PopularButton
        // Это ещё почему нельзя использовать индекс массива?!?!
        // eslint-disable-next-line react/no-array-index-key 
              key={index}
              text={item}
              onClick={testClick} 
              icon={(
                <MagniferIcon 
                  className='magnifer' />
          )} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default SearchSection;
