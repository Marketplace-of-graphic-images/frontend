import React from 'react';
import linse from '../../../assets/images/icons/Loupe.svg';
import styles from './SearchButton.module.scss';

const SearchButton = () => (
  <button type='submit' className={styles.SearchButton}>
    <img src={linse} alt='Найти' />
  </button>
);
export default SearchButton;
