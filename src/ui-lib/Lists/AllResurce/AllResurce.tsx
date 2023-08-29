/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AllResurce.module.scss';

interface IAllResurce {
  optionSelected: string
}

const AllResurce = () => {
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
        <option value='all'>Все ресурсы</option>
        {FakeData.map((item) => (
          <option key={uuidv4()} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default AllResurce;
