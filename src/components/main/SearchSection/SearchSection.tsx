/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import styles from './SearchSection.module.scss';
import SearchField from '../../../ui-lib/SearchField/SearchField';
import TagsField from '../../../ui-lib/TagsField/TagsField';

const SearchSection = () => {

  const tagsData: string[] = ['Узоры', 'Узоры', 'Узоры'];

  return (
    <section className={styles.SearchSection}>
      <div className={styles.dataBlock}>
        <h2 className={styles.title}>Найдите ресурсы под любые запросы</h2>
        <SearchField 
          data='шаурма' />

        <TagsField 
          data={ tagsData } />
      </div>
    </section>
  );
};
export default SearchSection;
