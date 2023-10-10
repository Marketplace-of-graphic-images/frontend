import React, { FC } from 'react';
import styles from './Avatar.module.scss';
import { greyPlug } from '../../../../assets/images/pictures';
import FileLoadInput from '../../../../ui-lib/Input/FileLoadInput/FileLoadInput';
import { CameraIconGreen } from '../../../../ui-lib/Icons';

interface AvatarProps {
  image: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Avatar: FC<AvatarProps> = ({ image, onChange }) => (
  <div className={styles.avatar}>
    <img src={image || greyPlug} alt='Фото профиля' className={styles.avatar__image} />
    <FileLoadInput
      onChange={onChange}
      icon={<CameraIconGreen width={22} height={22} />}
      className={styles.avatar__loadInput} />
  </div>
);

export default Avatar;
