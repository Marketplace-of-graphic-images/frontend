import React from 'react';
import { UniversalButton } from 'ui-lib/Button';
import { PigIcon } from 'ui-lib/Icons';

import styles from './Wallet.module.scss';

const Wallet = () => (
  <section className={styles.Wallet}>
    <div className={styles.Wallet_data}>
      <div className={styles.Wallet_pig}>
        <PigIcon width={48} height={48} />
        <p className={styles.Wallet_description}>Кошелёк</p>  
      </div>
      <p className={styles.Wallet_money}>8888&#160;&#8381;</p>
    </div>
    <UniversalButton
      buttonStyle='borderGreen'
      width={310}
      height={47}>
      Вывести средства
    </UniversalButton>
  </section>
);
export default Wallet;
