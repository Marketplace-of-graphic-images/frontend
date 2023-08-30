import React from 'react';
import AdButton from 'ui-lib/Button/AdButton/AdButton';
import { useDispatch } from '../../../services/hooks';
import { openModalRegister } from '../../../store';
import styles from './AdSection.module.scss';

const AdSection = () => {
  const dispatch = useDispatch();
  const openRgisterModal = () => {
    dispatch(openModalRegister());
  };
  return (
    <section className={styles.AdSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Присоединяйтесь и загружайте больше бесплатных изображений!
        </h2>
        <AdButton 
          text='Зарегистрироваться'
          onClick={openRgisterModal} />
      </div>
    </section>
  );
};
export default AdSection;
