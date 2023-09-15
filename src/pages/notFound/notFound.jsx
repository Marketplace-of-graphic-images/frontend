import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UniversalButton } from '../../ui-lib/Button';
import notFoindImgSVG from '../../assets/images/pictures/404.svg';
import styles from './notFound.module.scss';

const NotFound = () => {
  const navigate = useNavigate();
  const onHome = () => {
    navigate('/');
  };

  return (
    <section className={styles.NotFound}>
      <img className={styles.NotFound_img} src={notFoindImgSVG} alt='Страница не найдена' />
      <h2 className={styles.NotFound_header}>Страница не найдена</h2>
      <UniversalButton
        buttonStyle='filledGreen'
        width={220}
        height={48}
        className={styles.NotFound_homeButton}
        onClick={onHome}>
        На главную
      </UniversalButton>
    </section>
  );
};
export default NotFound;
