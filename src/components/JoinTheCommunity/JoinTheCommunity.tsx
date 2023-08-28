import React, { FC } from 'react';
import styles from './JoinTheCommunity.module.scss';
import BecomeAnAuthorButton from '../../ui-lib/Button/BecomeAnAuthor/BecomeAnAuthor';
import { useDispatch } from '../../services/hooks';
import { openModalRegister } from '../../store';

const JoinTheCommunity = () => {
  const dispatch = useDispatch();
  const openRgisterModal = () => {
    dispatch(openModalRegister());
  };

  return (
    <section className={styles.section}>
      <div className={styles.dataContainer}>
        <div className={styles.wrapper}>
          <img src='#' alt='Join' className={styles.image} />
          <div className={styles.info}>
            <h2 className={styles.header}>
              Присоединяйтесь к сообществу&#160;
              <span className={styles.header_span}>авторов</span>                       
            </h2>
            <div className={styles.texttInfo}>
              <p className={styles.text}>
                За каждым обыденным изображением скрыто творческое вдохновение. 
                И помните, что в ваших силах не только воплотить уникальный контент в жизнь, 
                но и с легкостью представить его миру, как для бесплатного использования, 
                так и для продажи!
              </p>
              <BecomeAnAuthorButton 
                text='Стать автором' 
                onClick={openRgisterModal} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default JoinTheCommunity;
