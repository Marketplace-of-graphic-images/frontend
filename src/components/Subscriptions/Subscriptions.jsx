import React from 'react';
import styles from './Subscriptions.module.scss';
import ProfileTitle from '../Profile/components/ProfileTitle/ProfileTitle';
import SolidLine from '../../ui-lib/Line/SolidLine/SolidLine';
import UniversalButton from '../../ui-lib/Button/UniversalButton/UniversalButton';

const Subscriptions = () => (
  <section className={styles.subscriptions}>
    <div className={styles.subscriptions__title}>
      <ProfileTitle text='Подписки' />
    </div>
    <SolidLine />
    <ul className={styles.subscriptions__users}>
      <li className={styles.subscriptions__user}>
        <div className={styles.subscriptions__icon} />
        <p className={styles.subscriptions__name}>AremiyLebedev</p>
        <UniversalButton 
          height={24}
          width={100} 
          isFilled={false} 
          className={styles.subscriptions__button}>
          Отписаться
        </UniversalButton>
      </li>
    </ul>
  </section>
);

export default Subscriptions;
