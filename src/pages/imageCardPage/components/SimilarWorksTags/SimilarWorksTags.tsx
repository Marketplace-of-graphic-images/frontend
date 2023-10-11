import React, { FC } from 'react';
import styles from './SimilarWorksTags.module.scss';

interface ISimilarWorksTags {
  tags: Array<string>;
}

const SimilarWorksTags: FC<ISimilarWorksTags> = ({ tags }) => {
  console.log('Работы, тэги');

  return (
    <section className={styles.SimilarWorksTags}>
      <h2 className={styles.SimilarWorksTags_title}>список тегов&#58;&emsp;</h2>
      <ul className={styles.SimilarWorksTags_tagsList}>
        {tags && tags.map((item) => (
          <li className={styles.SimilarWorksTags_tag}>{item}</li>
        ))}
      </ul>
    </section>
  );
};
export default SimilarWorksTags;
