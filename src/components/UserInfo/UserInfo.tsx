import React, {
  ChangeEvent, FC, useEffect, useState,
} from 'react';
import { TUser } from 'types/types';
import { useGetAllusersQuery } from 'api/getUser';
import { UniversalButton } from 'ui-lib/Button';
import styles from './UserInfo.module.scss';

interface IUserData {
  user: TUser
}

const UserInfo: FC<IUserData> = ({ user }) => {
  const [userImg, setUserImg] = useState('');
  const [file, setFile] = useState<File>();

  // Получаем всех пользователей
  const { data } = useGetAllusersQuery('getUser');
  // это всё

  const userData = data?.find(() => true);
  
  const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };
  useEffect(() => {
    if (!file) {
      return;
    }
    alert(`Загружен файл: ${file.name}`);
    setFile(undefined); 
  }, [file]);
  const onDeletePhoto = () => {
    alert('Аватарка удалена!');
  };
  return (
    <section className={styles.UserInfo}>
      {userImg 
        ? <img className={styles.avatar} src={userImg} alt='avatar' />
        : <div className={styles.avatar_plug} />}
      <h3 className={styles.avatar_userNick}>
        {userData?.name}
      </h3>
      <ul className={styles.avatar_datalist}>
        <li id='public' className={styles.avatar_list}>
          {userData?.id}
          <span className={styles.avatar_span}>Публикаций</span>
        </li>
        <li className={styles.avatar_list}>
          {userData?.id}
          <span className={styles.avatar_span}>Подписчиков</span>
        </li>
        <li className={styles.avatar_list}>
          {userData?.id}
          <span className={styles.avatar_span}>Лайков</span>
        </li>        
      </ul>
      <input className={styles.avatar_set} type='file' accept='image/*' onChange={onFileUpload} />
      <UniversalButton 
        isFilled={false}
        width={302}
        height={47}
        onClick={onDeletePhoto}>
        Удалить фото
      </UniversalButton>
    </section>
  );
};
export default UserInfo;
