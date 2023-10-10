import React from 'react';
import styles from './profile.module.scss';
import UserInfo from '../../components/Profile/UserInfo/UserInfo';
import { useSelector } from '../../services/hooks';

const Profile = () => {
  const { user } = useSelector((state) => state);

  return (
    <main className={styles.main}>
      <UserInfo />
    </main>
  );
};
export default Profile;
