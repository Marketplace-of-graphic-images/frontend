import React from 'react';
import styles from './JoinToAuthorsBanner.module.scss';
import { UniversalButton } from '../../../../../ui-lib/Button';
import { greyPlug } from '../../../../../assets/images/pictures';
import { useDispatch } from '../../../../../services/hooks';
import { openAuthorModal } from '../../../../../store';

const JoinToAuthorsBanner = () => {
  const dispatch = useDispatch();
  
  const openChangeRoleModal = () => {
    dispatch(openAuthorModal());
  };
  
  return (
    <article className={styles.joinToAuthorsBanner}>
      <div className={styles.joinToAuthorsBanner__container}>

        <h2 className={styles.joinToAuthorsBanner__title}>
          Присоединяйтесь к сообществу&nbsp;
          <span className={styles.joinToAuthorsBanner__title_accent}>авторов</span>
        </h2>

        <div className={styles.joinToAuthorsBanner__buttonsContainer}>
          <UniversalButton
            buttonStyle='filledGreen'
            width='fit-content'
            onClick={openChangeRoleModal}>
            Стать Автором
          </UniversalButton>

          <button type='button' className={styles.joinToAuthorsBanner__notButton}>
            Не сейчас
          </button>
        </div>

      </div>

      <img src={greyPlug} alt='баннер' className={styles.joinToAuthorsBanner__image} />

    </article>
  );
};

export default JoinToAuthorsBanner;
