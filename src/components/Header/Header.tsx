import {
  aboutUsLinks, designLinks, photoLinks, videoLinks, 
  ProfileLinks,
} from 'constants/headerLinks';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  closeModal, openModalAuth, openModalNotification, openModalRegister, 
  openAuthorModal,
} from 'store';
import { useDispatch, useSelector } from 'services/hooks';
import { NotificationsNo, NotificationsYes, ProfileIcon } from 'ui-lib/Icons';
import ButtonWithDropDown, { IButtonWithDropDown } from 'ui-lib/Button/ButtonWithDropDown/ButtonWithDropDown';
import { UniversalButton, LinkWordButton } from 'ui-lib/Button';
import { Link } from 'react-router-dom';
import Logo from './components/Logo/Logo';
import styles from './Header.module.scss';
import NotificationPopupOnRight from '../Template/NotificationPopupOnRight/NotificationPopupOnRight';

const Header = () => { 
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.system);
  const { role } = useSelector((state) => state.user);

  const { notificationModal } = useSelector((state) => state.modals);
  const [notificationsState, setNotificationsState] = useState(false);
  const openRegisterModal = () => {
    dispatch(openModalRegister());
  };
  
  const openAuthModal = () => {
    dispatch(openModalAuth());
  };

  const handleNotificationModal = () => {
    if (notificationModal) {
      dispatch(closeModal());
    } else {
      dispatch(openModalNotification());
    }
  };

  const openFormAuthorModal = () => {
    dispatch(openAuthorModal());
  };

  const closeModalState = () => {
    dispatch(closeModal());
  };
  
  const menuLinks: IButtonWithDropDown[] = [
    {
      title: 'Фотографии',
      menuItem: photoLinks,
    },
    {
      title: 'Дизайн',
      menuItem: designLinks,
    },
    {
      title: 'GIF',
      menuItem: videoLinks,
    },
    {
      title: 'О нас',
      menuItem: aboutUsLinks,
    }];

  return (
    <header className={styles.header} style={{ zIndex: notificationModal ? '110' : 'auto' }}>
      <div className={styles.headerContainer}>
        <div className={styles.leftBlock}>
          <Logo />

          <nav>
            <ul className={styles.menu}>      
              {menuLinks.map((link) => <ButtonWithDropDown key={uuidv4()} {...link} />)}
            </ul>
          </nav>
        </div>
        
        {!isLoggedIn ? (
          <div className={styles.rightBlock}> 
            <LinkWordButton buttonName='Войти' onClick={openAuthModal} />
            <UniversalButton onClick={openRegisterModal} type='button' width='174' height='47'>
              Создать аккаунт
            </UniversalButton>
          </div>
        ) : (
          <div className={styles.rightBlockAuthor}>
            {role === 'User' && (
              <UniversalButton buttonStyle='borderGreen' onClick={openFormAuthorModal} type='button' width='208' height='47'>
                Стать автором
              </UniversalButton>
            )}

            {role === 'Author' && (
              <UniversalButton buttonStyle='borderGreen' type='button' width='208' height='47'>
                Загрузить работу
              </UniversalButton>
            )}

            <button type='button' onClick={handleNotificationModal}>
              {notificationsState
                ? <NotificationsYes width='40' height='40' />
                : <NotificationsNo width='40' height='40' />}
            </button>
            
            <ButtonWithDropDown isProfile menuItem={ProfileLinks} />
              
          </div>
        )}

      </div>
      
      <NotificationPopupOnRight isOpen={notificationModal} onClose={closeModalState} />
    </header>
  );
};
export default Header;
