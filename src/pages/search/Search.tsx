import React from 'react';
import styles from './Search.module.scss';
import { useSelector } from '../../services/hooks';
import SearchInput from '../../components/Search/SearchInput/SearchInput';
import ListSearch from '../../components/Search/listSearch/listSearch';

const Search = () => {
  const { user } = useSelector((state) => state);
  const { role } = useSelector((state) => state.user);

  return (
    <main className={styles.main}>
      <SearchInput 
        data='шаурма' />
      <div className={styles.tags_box}> 
        <ListSearch />
      </div>
    </main>
  );
};
export default Search;
