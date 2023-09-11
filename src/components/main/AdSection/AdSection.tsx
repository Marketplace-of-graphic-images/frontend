import React, { FC, ReactComponentElement } from 'react';
import { useDispatch } from '../../../services/hooks';
import { openModalRegister } from '../../../store';
import styles from './AdSection.module.scss';
import { UniversalButton } from '../../../ui-lib/Button';
import { arrowDownIcon } from '../../../assets/images/icons';
import { AuthorIcon } from '../../../ui-lib/Icons';

const AdSection = () => {
  const dispatch = useDispatch();
  const openRegisterModal = () => {
    dispatch(openModalRegister());
  };
  return (
    <section className={styles.AdSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Присоединяйтесь и загружайте больше бесплатных изображений!
        </h2>
        <UniversalButton
          buttonStyle='borderBlack'
          onClick={openRegisterModal}
          width='max-content'>
          Создать аккаунт
        </UniversalButton>
      </div>
    </section>
  );
};
export default AdSection;
