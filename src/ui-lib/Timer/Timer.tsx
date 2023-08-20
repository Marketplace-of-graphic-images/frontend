import React, { FC } from 'react';
import styles from './Timer.module.scss';

interface TimerProps {
  state: 'timer' | 'timerEnd' | 'codeNotCome',
  timer?: number;
}

const Timer: FC<TimerProps> = ({ state, timer }) => (
  <div className='timer'>
    {
      state === 'timer' && (
        <div className={styles.timer__container}>
          <p className={styles.timer__text}>Запросить новый код через:</p>
          <p className={styles.timer__countdown}>{timer}</p>
        </div>
      )
    }

    {
      state === 'timerEnd' && (
        <div className={styles.timer__container}>
          <p className={styles.timer__text}>Запросить новый код:</p>
          <a href='http://localhost:3000/' className={styles.timer__link}>Отправить</a>
        </div>
      )
    }

    {
      state === 'codeNotCome' && (
        <div className={styles.timer__container}>
          <p className={styles.timer__text}>Код не пришёл?</p>
          <a href='http://localhost:3000/' className={styles.timer__link}>Написать в поддержку</a>
        </div>
      )
    }
  </div>
);

Timer.defaultProps = {
  timer: 0,
};

export default Timer;
