import React from 'react';
import styles from './main.module.scss';
import MainGuest from './components/MainGuest/MainGuest';
import { UniversalButton } from '../../ui-lib/Button';
import MainUser from './components/MainUser/MainUser';
import MainAuthor from './components/MainAuthor/MainAuthor';
import { useDispatch, useSelector } from '../../services/hooks';
import { setAuthorRole, setUserRole } from '../../store';

const Main = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.system);
  const { role } = useSelector((state) => state.user);

  return (
    <main className={styles.main}>
      {!isLoggedIn && <MainGuest />}
      {(role === 'User' && isLoggedIn) && <MainUser />}
      {(role === 'Author' && isLoggedIn) && <MainAuthor />}
    </main>
  );
};
export default Main;
