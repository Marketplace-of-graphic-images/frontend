/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './SearchSection.module.scss';
import { PopularButton } from '../../../ui-lib/Button';
import SearchField from '../../../ui-lib/SearchField/SearchField';
import { MagniferIcon } from '../../../ui-lib/Icons';

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
          {fakeData.map((item) => (
            <PopularButton
              key={uuidv4()}
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
