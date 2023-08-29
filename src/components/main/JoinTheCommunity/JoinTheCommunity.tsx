import React from 'react';
import { UniversalButton } from 'ui-lib/Button';
import styles from './JoinTheCommunity.module.scss';
import { useDispatch } from '../../../services/hooks';
import { openModalRegister } from '../../../store';

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
              <UniversalButton
                width='278' 
                height='47' 
                onClick={openRgisterModal}> 
                Стать автором
              </UniversalButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default JoinTheCommunity;
