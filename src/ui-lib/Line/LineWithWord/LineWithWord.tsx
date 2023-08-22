import React, { FC } from 'react';
import styles from './LineWithWord.module.scss';

interface ILineWithWord {
  text: string,
}

const LineWithWord: FC<ILineWithWord> = ({ text }) => (
  <span className={styles.text}> 
    {text}
  </span>
);

export default LineWithWord;
