import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './FooterList.module.scss';

interface FooterListProps {
  title: string;
  items: Array<{ text: string, linkTo: string }>
}

const FooterList: FC<FooterListProps> = ({ title, items }) => (
  <div className={styles.footerList}>
    <h4 className={styles.footerList__title}>{title}</h4>

    <ul className={styles.footerList__list}>

      {items.map(((item) => (
        <li className={styles.footerList__item} key={uuidv4()}>
          <Link className={styles.footerList__link} to={item.linkTo}>
            {item.text}
          </Link>
        </li>
      ))) }

    </ul>
  </div>
);

export default FooterList;
