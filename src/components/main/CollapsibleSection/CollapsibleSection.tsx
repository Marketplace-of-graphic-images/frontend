import React, {
  FC, PropsWithChildren, useEffect, useState,
} from 'react';
import styles from './CollapsibleSection.module.scss';
import ImageCardRenderer from '../../ImageCardRenderer/ImageCardRenderer';
import ButtonWithArrow from '../../../ui-lib/Button/ButtonWithArrow/ButtonWithArrow';
import { UniversalButton } from '../../../ui-lib/Button';

interface CollapsibleSectionProps extends PropsWithChildren {
  items: Array<Record<string, any>>;
  isPublicationBtn?: boolean;
  sectionStyle?: React.StyleHTMLAttributes<'section'>
}

const CollapsibleSection: FC<CollapsibleSectionProps> = (
  { 
    items,
    isPublicationBtn = false,
    children,
    sectionStyle,
  },
) => {
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
    <section className={styles.collapsibleSection} style={sectionStyle}>

      {children}

      <div className={styles.collapsibleSection__container} style={{ height }}>
        {items.length === 0 && (
          <div className={styles.collapsibleSection__empty}>
            место для ваших шедевров
          </div>
        )}
        <ImageCardRenderer items={items} />
      </div>

      <div className={styles.collapsibleSection__btnContainer}>
        {isPublicationBtn && (

          <UniversalButton isFilled={false} width={207}>
            Загрузить работу
          </UniversalButton>
        )}
        {items.length >= 4 && (
          <ButtonWithArrow text={isOpen ? 'Скрыть' : 'Смотреть ещё'} onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>

    </section>
  );
};

CollapsibleSection.defaultProps = {
  isPublicationBtn: false,
  sectionStyle: undefined,
};

export default CollapsibleSection;
