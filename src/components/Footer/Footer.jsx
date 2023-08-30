import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { UniversalButton } from '../../ui-lib/Button';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__container}>
      <div className={styles.footer__container_content}>
        <div className={styles.footer__menu}>
          <div>
            <h4 className={styles.footer__title}>«Маркетплейс»</h4>
            <ul className={styles.footer__links}>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>О нас</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>FAQ</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Реквизиты</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Вакансии</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Связаться с нами</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.footer__title}>Условия пользования</h4>
            <ul className={styles.footer__links}>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Об авторском праве</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Приложения</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Конфиденциальность</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Политика файлов Cookie</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Партнерская программа</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.footer__title}>Клиентам</h4>
            <ul className={styles.footer__links}>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Услуги</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Акции</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Специальные предложения</Link>
              </li>
              <li className={styles.footer__container_link}>
                <div className={styles.footer__icon} />
                <Link className={styles.footer__link} href='http://localhost:3000/'>Подписка</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__newsletter}>
          <h4 className={styles.footer__title}>
            Подписывайтесь на рассылку, чтобы быть в курсе последних новостей и обновлений!
          </h4>
          <input className={styles.footer__input} aria-label='Email' type='email' placeholder='Email' />
          <UniversalButton type='button' width='302' height='47'>Подписаться</UniversalButton>
        </div>
      </div>
      <div className={styles.footer__container_copyright}>
        <p className={styles.footer__copyright}>
          &copy; 2023 «Маркетплейс графических изображений»
        </p>
        <p className={styles.footer__copyright}>
          Все права защищены
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
