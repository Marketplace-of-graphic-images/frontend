import React from 'react';
import styles from './main.module.scss';
import MainGuest from './components/MainGuest/MainGuest';
import { UniversalButton } from '../../ui-lib/Button';
import MainUser from './components/MainUser/MainUser';
import MainAuthor from './components/MainAuthor/MainAuthor';
import { useDispatch, useSelector } from '../../services/hooks';
import { setAuthorRole, setGuestRole, setUserRole } from '../../store';

const Main = () => {
  const dispatch = useDispatch();
  const { userRole } = useSelector((state) => state.system);
  
  return (
    <main className={styles.main}>

      <div className={styles.temporaryMenu}>
        <UniversalButton width={60} onClick={() => dispatch(setGuestRole())}>
          Гость
        </UniversalButton>
        <UniversalButton width={60} onClick={() => dispatch(setUserRole())}>
          Юзер
        </UniversalButton>
        <UniversalButton width={60} onClick={() => dispatch(setAuthorRole())}>
          Автор
        </UniversalButton>
      </div>

      {userRole === 'guest' && <MainGuest />}
      {userRole === 'user' && <MainUser />}
      {userRole === 'author' && <MainAuthor />}
    </main>
  );
};
export default Main;
