import React, { FC } from 'react';
import { TUser } from 'types/types';
import { useGetAllusersQuery } from 'api/getUser';
import styles from './UserInfo.module.scss';

interface IUserData {
  user: TUser
}

const UserInfo: FC<IUserData> = ({ user }) => {
  const { data } = useGetAllusersQuery('getUser');

  return (
    <section className={styles.UserInfo}>
      <div>
        {data?.map((item) => (
          <p>{item.name}</p>
        ))}
      </div>
    </section>
  );
};
export default UserInfo;
