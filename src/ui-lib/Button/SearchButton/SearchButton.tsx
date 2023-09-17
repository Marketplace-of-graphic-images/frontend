import React, { FC } from 'react';
import styles from './SearchButton.module.scss';
import { SearchIconGreen } from '../../Icons';

const SearchButton: FC = () => (
  <button type='submit' className={styles.SearchButton}>
    <SearchIconGreen />
  </button>
);
export default SearchButton;
