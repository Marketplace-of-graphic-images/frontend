import React, { FC } from 'react';
import styles from './ProfileEdit.module.scss';
import ProfileForm from '../../../components/Forms/ProfileForm/ProfileForm';

const ProfileEdit: FC = () => (
  <main className={styles.profileEdit}>
    <ProfileForm />
  </main>
);

export default ProfileEdit;
