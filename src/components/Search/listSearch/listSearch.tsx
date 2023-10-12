/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './listSearch.module.scss';

interface TlistSearch {
  name:string,
  list: string[]
}
const ListSearch:FC<TlistSearch> = ({ name = 'Тип файла', list }) => {
  const FakeData = [
    'собаки',
    'коты',
    'хомячки',
    'пизябры',
    'бегемоты',
  ];
  return (
    <div className={styles.container}>
      <select className={styles.select}>
        <option value=''>
          -- 
          {name}
          -- 
        </option>
        {list.map((item) => (
          <option key={uuidv4()} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default ListSearch;
