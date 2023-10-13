/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { FC } from 'react';
import { TImage1, TImageFull } from 'types/types';
import styles from './SimilarWorksTags.module.scss';

interface ISimilarWorksTags {
  tags: TImageFull;
}

const SimilarWorksTags: FC<ISimilarWorksTags> = (props) => {
  const { tags } = props;
  return (
    <section className={styles.SimilarWorksTags}>
      <h2 className={styles.SimilarWorksTags_title}>список тегов&#58;&emsp;</h2>
      <ul className={styles.SimilarWorksTags_tagsList}>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-call */}
        {tags.tags && tags.tags.map((item) => (
          <li className={styles.SimilarWorksTags_tag}>{item.name}</li>
        ))} 
      </ul>
    </section>
  );
};
export default SimilarWorksTags;
