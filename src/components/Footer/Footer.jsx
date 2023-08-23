import React from 'react';
import style from './Footer.module.scss';
import { UniversalButton } from '../../ui-lib/Button';

const Footer = () => {
  console.log('footer');
  return (
    <footer className={style.footer}>
      <div className={style.footer__conteiner_content}>
        <div className={style.footer__menu}>
          <div>
            <h4 className={style.footer__title}>«Маркетплейс»</h4>
            <ul className={style.footer__links}>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>О нас</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>FAQ</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Реквизиты</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Вакансии</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Связаться с нами</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={style.footer__title}>Условия пользования</h4>
            <ul className={style.footer__links}>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Об авторском праве</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Приложения</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Конфиденциальность</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Политика файлов Cookie</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Партнерская программа</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={style.footer__title}>Клиентам</h4>
            <ul className={style.footer__links}>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Услуги</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Акции</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Специальные предложения</a>
              </li>
              <li>
                <a className={style.footer__link} href='http://localhost:3000/' target='blank'>Подписка</a>
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
      <div className={style.footer__conteiner}>
        <p className={style.footer__copyright}>
          &copy; 2023 «Маркетплейс графических изображений» Все права защищены
        </p>
      </div>
    </footer>
  );
};

export default Footer;
