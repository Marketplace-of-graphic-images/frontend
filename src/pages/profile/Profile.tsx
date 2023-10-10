import React from 'react';
import JoinToCommunity from 'components/Profile/JoinToCommunity/JoinToCommunity';
import styles from './profile.module.scss';
import UserInfo from '../../components/Profile/UserInfo/UserInfo';
import { useSelector } from '../../services/hooks';

const Profile = () => {
  const { user } = useSelector((state) => state);
  const { role } = useSelector((state) => state.user);

  return (
    <main className={styles.main}>
      <UserInfo />
      { role === 'User' && (
      <JoinToCommunity
        user={user} 
        roleUser={role} />
      )}
    </main>
  );
};
export default Profile;
