import React, { FC, useState } from 'react';
import { TUser } from 'types/types';
import { useDispatch } from 'services/hooks';
import { UniversalButton } from 'ui-lib/Button';
import { openModalRegister, openAuthorModal } from 'store';
import styles from './JoinToCommunity.module.scss';

interface IJoinToCommunity {
  user: TUser,
  roleUser: string
}
const JoinToCommunity: FC<IJoinToCommunity> = ({ user, roleUser }) => {
  const [hiddenSection, setHiddeSection] = useState(false);

  const dispatch = useDispatch();
  const openRegisterModal = () => {
    dispatch(openAuthorModal());
  };
  const hideSection = () => {
    setHiddeSection(true);
  };
  return (
    <section className={`${styles.JoinToCommunity}
    ${hiddenSection === false 
      ? styles['JoinToCommunity_section-show']
      : styles['JoinToCommunity_section-hidden']}`}>
      <div className={styles.JoinToCommunity_container}>
        <div className={styles.JoinToCommunity_info}>
          <h2 className={styles.JoinToCommunity_header}>
            Присоединяйтесь к сообществу&#160;
            <span className={styles.JoinToCommunity_header_span}>авторов!</span>
          </h2>
          <div className={styles.JoinToCommunity_buttons}>
            <UniversalButton
              width='184'
              height='42'
              onClick={openRegisterModal}
              buttonStyle='filledGreen'>
              Стать автором
            </UniversalButton>
            <button 
              type='button' 
              className={styles.JoinToCommunity_notNow} 
              onClick={hideSection}>
              Не сейчас
            </button>
          </div>
        </div>
        <img src='#' alt='Join' className={styles.JoinToCommunity_image} />
      </div>
    </section>
  );
};
export default JoinToCommunity;
