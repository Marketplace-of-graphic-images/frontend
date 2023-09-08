import React from 'react';
import styles from './Subscriptions.module.scss';
import ProfileTitle from '../Profile/components/ProfileTitle/ProfileTitle';
import SolidLine from '../../ui-lib/Line/SolidLine/SolidLine';
import UniversalButton from '../../ui-lib/Button/UniversalButton/UniversalButton';

const ArraySubscriptions = [
  Array(11).fill({
    name: 'AremiyLebedev',
    icon: '',
  }),
];

const SubscriptionsCard = ({ name, icon }) => (
  <div className={styles.subscriptions__user}>
    <div className={styles.subscriptions__icon}>{icon}</div>
    <p className={styles.subscriptions__name}>{name}</p>
    <UniversalButton 
      height={24}
      width={100} 
      isFilled={false} 
      className={styles.subscriptions__button}>
      Отписаться
    </UniversalButton>
  </div>
);

const Subscriptions = () => (
  <section className={styles.subscriptions}>
    <div className={styles.subscriptions__title}>
      <ProfileTitle text='Подписки' />
    </div>
    <SolidLine />
    <div className={styles.subscriptions__users}>
      {ArraySubscriptions[0].map(({ name, icon }) => (
        <SubscriptionsCard name={name} icon={icon} />
      ))}
    </div>
  </section>
);

export default Subscriptions;
