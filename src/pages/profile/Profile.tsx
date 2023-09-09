import React from 'react';
import styles from './profile.module.scss';
import ProfileForm from '../../components/Forms/ProfileForm/ProfileForm';

const Profile = () => (
  <main className={styles.main}>
    <p> Профиль</p>
    <ProfileForm />
  </main>
);
export default Profile;
