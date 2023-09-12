import React, { FC } from 'react';
import styles from './Footer.module.scss';
import FooterList from './components/FooterList/FooterList';
import MailingForm from '../Forms/MailingForm/MailingForm';
import { FOOTER_LINKS_COLUMN_1, FOOTER_LINKS_COLUMN_2, FOOTER_LINKS_COLUMN_3 } from '../../constants/layout';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__container}>

      <div className={styles.footer__content}>

        <nav className={styles.footer__nav}>
          <FooterList title='«Маркетплейс»' items={FOOTER_LINKS_COLUMN_1} />
          <FooterList title='Условия пользования' items={FOOTER_LINKS_COLUMN_2} />
          <FooterList title='Клиентам' items={FOOTER_LINKS_COLUMN_3} />
        </nav>

        <div className={styles.footer__newsletter}>
          <MailingForm />
        </div>

      </div>

      <div className={styles.footer__bottom}>

        <p className={styles.footer__bottomText}>
          &copy; 2023 «Маркетплейс графических изображений»
        </p>
        <p className={styles.footer__bottomText}>
          Все права защищены
        </p>

      </div>

    </div>

  </footer>
);

export default Footer;
