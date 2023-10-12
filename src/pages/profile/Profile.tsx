import React from 'react';
import JoinToCommunity from 'components/Profile/JoinToCommunity/JoinToCommunity';
import styles from './profile.module.scss';
import UserInfo from '../../components/Profile/UserInfo/UserInfo';
import Content from '../../components/Profile/Content/Content';

const Profile = () => (
  <main className={styles.main}>
    <UserInfo />
    <Content />
  </main>
);

export default Profile;
