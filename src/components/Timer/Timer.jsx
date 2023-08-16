import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import './Timer.scss';

const Timer = (props) => {
  useEffect(() => {
  }, []);
  // const valueCheckbox = createSelector(
  //   (state) => state.Checkbox.
  // );
  return (
    <div className='timer'>
      <div className='timer__conteiner'>
        <p className='timer__text'>Запросить новый код через:</p>
        <p className='timer__countdown'>0:56</p>
      </div>
      <div className='timer__conteiner'>
        <p className='timer__text'>Запросить новый код:</p>
        <a href='http://localhost:3000/' className='timer__link'>Отправить</a>
      </div>
      <div className='timer__conteiner'>
        <p className='timer__text'>Код не пришёл?</p>
        <a href='http://localhost:3000/' className='timer__link'>Написать в поддержку</a>
      </div>
    </div>
  );
};

export default Timer;
