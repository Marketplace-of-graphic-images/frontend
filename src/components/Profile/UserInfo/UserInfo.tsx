import React, { FC, ReactComponentElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TUser } from 'types/types';
import { useGetAllusersQuery } from 'api/getUsers';
import { UniversalButton } from 'ui-lib/Button';
import { Link } from 'react-router-dom';
import { PensilIcon } from 'ui-lib/Icons';
// import { pensil } from 'assets/images/icons';
import { useSelector } from '../../../services/hooks';
import styles from './UserInfo.module.scss';

interface IUserData {
  user: TUser,
  roleUser: string
}

const UserInfo: FC<IUserData> = ({ user, roleUser }) => {
  const {
    role, avatar, links, username, 
  } = useSelector((state) => state.user);
  // Получаем всех пользователей
  const { data } = useGetAllusersQuery('getUser');
  // это всё

  const userData = data?.find(() => true);

  const LINKS = [
    'https://vk.com',
    'https://github.com/udartapkom',
    'https://shtukar-design.com',
  ];

  const onEditProfile = () => {
    alert('Редактируем профиль!');
  };
  /*   const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  }; */
  /*   useEffect(() => {
    if (!file) {
      return;
    }
    alert(`Загружен файл: ${file.name}`);
    setFile(undefined);
  }, [file]);
  const onDeletePhoto = () => {
    alert('Аватарка удалена!');
  }; */
  return (
    <section className={styles.UserInfo}>
      <div className={styles.avatar_block}>
        {avatar
          ? <img className={styles.avatar} src={avatar} alt='avatar' />
          : <div className={styles.avatar_plug} />}
        <h3 className={styles.avatar_userNick}>
          {username}
        </h3>
        {roleUser === 'author' ? (
          <ul className={styles.avatar_datalist}>
            <li id='public' className={styles.avatar_list}>
              <span className={styles.avatar_span}>Публикации</span>
              {userData?.id}
            </li>
            <li className={styles.avatar_list}>
              <span className={styles.avatar_span}>Подписки</span>
              {userData?.id}
            </li>
          </ul>
        )
          : null}
      </div>
      <div className={styles.Links_block}>
        <div className={styles.Links}>
          {LINKS.length !== 0 ? <p className={styles.Links_description}>Ссылки:</p> : null}
          {LINKS?.map((item) => (
            <Link className={styles.Links_item} to={item} key={uuidv4()}>{item}</Link>
          ))}
        </div>
        <UniversalButton 
          buttonStyle='borderGreen'
          width={232}
          height={49}
          onClick={onEditProfile}
          className={styles.ProfilleButton}
          icon={<PensilIcon />}>
          Изменить профиль
        </UniversalButton>
      </div>
    </section>
  );
};
export default UserInfo;
