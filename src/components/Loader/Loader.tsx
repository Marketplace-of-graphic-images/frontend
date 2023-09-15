import React from 'react';
import styles from './Loader.module.scss';
import { loader } from '../../assets/images/pictures';

const Loader = () => (
  <div className={styles.loader}>
    <img className={styles.loader__picture} src={loader} alt='загрузка' />

  </div>
);
export default Loader;
