import React from 'react';
import styles from './Wallet.module.scss';
import { UniversalButton } from '../../../../../ui-lib/Button';

const Wallet = () => (
  <div className={styles.wallet}>

    <div className={styles.wallet__container}>
      <p className={styles.wallet__title}>Заработок</p>
      <p className={styles.wallet__text}>2,987 ₽</p>
    </div>

    <UniversalButton buttonStyle='filledGreen' width='fit-content'>
      Вывести Деньги
    </UniversalButton>
  </div>
);

export default Wallet;
