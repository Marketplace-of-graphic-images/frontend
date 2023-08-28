import React, { FC } from 'react';
import styles from './TitleMainSection.module.scss';

interface TitleMainSectionProps {
  titleAccent: string;
  title: string;
  subtitle: string;
}

const TitleMainSection: FC<TitleMainSectionProps> = ({ titleAccent, title, subtitle }) => (
  <>
    <h2 className={styles.titleMainSection}>
      <span className={styles.titleMainSection_accent}>{`${titleAccent} `}</span>
      {title}
    </h2>

    <p className={styles.titleMainSection__subtitle}>
      {subtitle}
    </p>
  </>
);

export default TitleMainSection;
