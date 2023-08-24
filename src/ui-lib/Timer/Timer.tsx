import React, { FC, useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import styles from './Timer.module.scss';
import { LinkWordButton } from '../Button';

interface TimerProps {
  // eslint-disable-next-line react/require-default-props
  numberOfSeconds: number;
  numberOfminutes:number;
}

const Timer: FC<TimerProps> = ({ numberOfSeconds, numberOfminutes }) => {
  const [timerState, setTimerState] = useState<'timer' | 'codeNotCome' | 'timerEnd'>('timer');
  const [attempts, setAttempts] = useState(2);

  const time = new Date();
  time.setSeconds(time.getSeconds() + numberOfSeconds);
  time.setMinutes(time.getMinutes() + numberOfminutes);
  const { minutes, seconds, restart } = useTimer({ expiryTimestamp: time });

  useEffect(() => {
    if (seconds === 0) {
      if (attempts > 0) {
        setTimerState('timerEnd');
      } else {
        setTimerState('codeNotCome');
      }
    }
  }, [attempts, seconds]);

  const handleGetNewCode = () => {
    if (attempts > 0) {
      setTimerState('timer');
      setAttempts(attempts - 1);

      const newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + numberOfSeconds);
      restart(newTime);
    }
  };

  return (
    <div className='timer'>
      {
        timerState === 'timer' && (
          <div className={styles.timer__container}>
            <p className={styles.timer__text}>Запросить новый код через:</p>
            <p className={styles.timer__countdown}>
              {minutes}
              :
            </p>
            <p className={styles.timer__countdown}>{seconds}</p>
          </div>
        )
      }

      {
        timerState === 'timerEnd' && (
          <div className={styles.timer__container}>
            <LinkWordButton
              title='Запросить новый код:'
              buttonName='Отправить'
              onClick={handleGetNewCode} />
          </div>
        )
      }

      {
        timerState === 'codeNotCome' && (
          <div className={styles.timer__container}>
            <LinkWordButton
              title='Код не пришёл?'
              buttonName='Написать в поддержку' />
          </div>
        )
      }
    </div>
  );
};

export default Timer;
