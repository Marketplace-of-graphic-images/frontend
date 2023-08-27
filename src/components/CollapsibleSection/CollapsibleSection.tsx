import React, {
  FC, useEffect, useState,
} from 'react';
import styles from './CollapsibleSection.module.scss';
import CardList from '../CardList/CardList';
import ButtonWithBorder from '../../ui-lib/Button/ButtonWithBorder/ButtonWithBorder';
import ButtonWithArrow from '../../ui-lib/Button/ButtonWithArrow/ButtonWithArrow';

interface CollapsibleSectionProps {
  items: Array<Record<string, any>>
}

const CollapsibleSection: FC<CollapsibleSectionProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('255px');

  useEffect(() => {
    if (isOpen) {
      setHeight(`${Math.ceil(items.length / 4) * (255 + 24)}px`);
    } else {
      setHeight('255px');
    }
  }, [isOpen, items]);

  return (
    <section className={styles.collapsibleSection}>
      <h2 className={styles.collapsibleSection__title}>
        <span className={styles.collapsibleSection__title_accent}>{'Творческая атмосфера: '}</span>
        Ваш Мир
      </h2>

      <p className={styles.collapsibleSection__subtitle}>
        Публикуйте и просматривайте свои работы в любое время!
      </p>

      <div className={styles.collapsibleSection__container} style={{ height }}>
        {items.length === 0 && (
          <div className={styles.collapsibleSection__empty}>
            место для ваших шедевров
          </div>
        )}
        <CardList items={items} />
      </div>

      <div className={styles.collapsibleSection__btnContainer}>
        <ButtonWithBorder text='Загрузить публикацию' onClick={() => {}} />
        {items.length >= 4 && (
          <ButtonWithArrow text='Смотреть ещё' onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>

    </section>
  );
};

export default CollapsibleSection;
