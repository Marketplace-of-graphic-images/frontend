import React, { FC } from 'react';
import styles from './ProfileTitle.module.scss';

interface ProfileTitleProps {
  text: string;
}

const ProfileTitle: FC<ProfileTitleProps> = ({ text }) => (
  <h2 className={styles.profileTitle}>
    {text}
  </h2>
);

export default ProfileTitle;
