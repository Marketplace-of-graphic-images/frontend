import React, { FC } from 'react';
import styles from './Loader.module.scss';
import { loader } from '../../assets/images/pictures';

interface LoaderProps {
  isBackground?: boolean;
}

const Loader: FC<LoaderProps> = ({ isBackground = true }) => (
  <div className={`${styles.loader} ${isBackground ? '' : styles.loader_notBackground}`}>
    <img className={styles.loader__picture} src={loader} alt='загрузка' />
  </div>
);

Loader.defaultProps = {
  isBackground: true,
};

export default Loader;
