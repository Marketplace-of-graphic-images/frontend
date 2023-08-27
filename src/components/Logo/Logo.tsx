import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo: FC = () => (
  <Link to='/' className={styles.logo}>
    <span className={styles.name}>МАРКЕТПЛЕЙС</span>
    <span className={styles.description}>графических изображений</span>
  </Link>
);

export default Logo;
