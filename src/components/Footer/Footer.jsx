import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';
import { UniversalButton } from '../../ui-lib/Button';

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.footer__container_content}>
      <div className={style.footer__menu}>
        <div>
          <h4 className={style.footer__title}>«Маркетплейс»</h4>
          <ul className={style.footer__links}>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>О нас</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>FAQ</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Реквизиты</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Вакансии</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Связаться с нами</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={style.footer__title}>Условия пользования</h4>
          <ul className={style.footer__links}>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Об авторском праве</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Приложения</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Конфиденциальность</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Политика файлов Cookie</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Партнерская программа</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className={style.footer__title}>Клиентам</h4>
          <ul className={style.footer__links}>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Услуги</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Акции</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Специальные предложения</Link>
            </li>
            <li className={style.footer__container_link}>
              <div className={style.footer__icon} />
              <Link className={style.footer__link} href='http://localhost:3000/'>Подписка</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.footer__newsletter}>
        <h4 className={style.footer__title}>
          Подписывайтесь на рассылку, чтобы быть в курсе последних новостей и обновлений!
        </h4>
        <input className={style.footer__input} aria-label='Email' type='email' placeholder='Email' />
        <UniversalButton size='small_medium'>Подписаться</UniversalButton>
      </div>
    </div>
    <div className={style.footer__container}>
      <p className={style.footer__copyright}>
        &copy; 2023 «Маркетплейс графических изображений»
      </p>
      <p className={style.footer__copyright}>
        Все права защищены
      </p>
    </div>
  </footer>
);

export default Footer;
