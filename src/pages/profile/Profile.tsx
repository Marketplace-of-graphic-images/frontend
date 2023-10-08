import React from 'react';
import JoinToCommunity from 'components/Profile/JoinToCommunity/JoinToCommunity';
import styles from './profile.module.scss';
import UserInfo from '../../components/Profile/UserInfo/UserInfo';
import { useSelector } from '../../services/hooks';

const Profile = () => {
  const { user } = useSelector((state) => state);

  return (
    <main className={styles.main}>
      <UserInfo 
        user={user} 
        roleUser='author' />
      <JoinToCommunity
        user={user} 
        roleUser='customer' />
    </main>
  );
};
export default Profile;
